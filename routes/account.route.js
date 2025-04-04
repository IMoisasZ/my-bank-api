/** @format */

import express from 'express'
import AccounController from '../controllers/account.controller.js'

const router = express.Router()

router.post('/', AccounController.createAccount)

router.get('/', AccounController.getAccounts)

router.get('/:id', AccounController.getAccount)

router.put('/', AccounController.updateAccount)

router.patch('/updateBalance', AccounController.updateBalance)

router.delete('/:id', AccounController.deleteAccount)

router.use((err, req, res, next) => {
	global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`)
	console.log(err)
	res.status(400).send({ error: err.message })
})

export default router
