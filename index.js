/** @format */

import express from 'express'
import winston from 'winston'
import cors from 'cors'
import accountsRouter from './routes/account.route.js'
import swaggerUi from 'swagger-ui-express'
import { swaggerDocument } from './doc.js'
import { graphqlHTTP } from 'express-graphql'
import Schema from './schema/index.js'

global.fileName = 'accounts.json'

const { combine, timestamp, label, printf } = winston.format
const myformat = printf(({ level, message, label, timestamp }) => {
	return `${timestamp} [${label}] ${level}: ${message}`
})
global.logger = winston.createLogger({
	level: 'silly',
	transports: [
		new winston.transports.Console(),
		new winston.transports.File({ filename: 'my-bank-api.log' }),
	],
	format: combine(label({ label: 'my-bank-api' }), timestamp(), myformat),
})

export const app = express()

app.use(express.json())
app.use(express.static('public'))
app.use(cors())

app.use('/account', accountsRouter)
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(
	'/graphql',
	graphqlHTTP({
		schema: Schema,
		graphiql: true,
	})
)
