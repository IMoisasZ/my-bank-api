/** @format */

import { app } from './index.js'
import { promises as fs } from 'fs'

const { readFile, writeFile } = fs

const PORT = 3000 || 3333

app.listen(PORT, async () => {
	try {
		console.log(`SERVER RUNNING AT PORT ${PORT}`)

		await readFile(global.fileName)
		logger.info('API STARTED')
	} catch (err) {
		const initialJson = {
			nextId: 1,
			accounts: [],
		}
		writeFile(global.fileName, JSON.stringify(initialJson))
			.then(() => {
				logger.info('API started and File Created')
			})
			.catch((err) => {
				logger.error(`${err.message}`)
			})
	}
})
