import express from "express";
import winston from "winston";
import cors from 'cors'
import accountsRouter from "./routes/account.route.js";
import { promises as fs } from "fs";
import swaggerUi from 'swagger-ui-express'
import { swaggerDocument } from "./doc.js";
import { buildSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";
import AccountService from "./services/account.service.js";
import Schema from "./schema/index.js";

const { readFile, writeFile } = fs;

global.fileName = "accounts.json";

const { combine, timestamp, label, printf } = winston.format;
const myformat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
  level: "silly",
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "my-bank-api.log" }),
  ],
  format: combine(label({ label: "my-bank-api" }), timestamp(), myformat),
});

// const schema = buildSchema(`
//   type Account {
//     id: Int
//     name: String
//     balance: Float
//   }
//   input AccountInput {
//     id: Int
//     name: String
//     balance: Float
//   }
//   type Query {
//     getAccounts: [Account]
//     getAccount(id: Int): Account
//   }
//   type Mutation {
//     createAccount(account: AccountInput): Account
//     deleteAccount(id: Int): Boolean
//     updateAccount(account: AccountInput): Account
//   }
// `)

// const root = {
//   getAccounts: () => AccountService.getAccounts(),
//   getAccount(args) {
//     return AccountService.getAccount(args.id)
//   },
//   createAccount({account}){
//     return AccountService.createAccount(account)
//   },
//   deleteAccount(args){
//     AccountService.deleteAccount(args.id)
//   },
//   updateAccount({account}){
//     return AccountService.updateAccount(account)
//   }
// }

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(cors())

app.use("/account", accountsRouter);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use("/graphql", graphqlHTTP({
  schema: Schema,
  // rootValue: root,
  graphiql: true
})),

  app.listen(3000, async () => {
    try {
      await readFile(global.fileName);
      logger.info("API STARTED");
    } catch (err) {
      const initialJson = {
        nextId: 1,
        accounts: [],
      };
      writeFile(global.fileName, JSON.stringify(initialJson))
        .then(() => {
          logger.info("API started and File Created");
        })
        .catch((err) => {
          logger.error(`${err.message}`);
        });
    }
  });
