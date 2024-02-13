import { Router } from 'express'

export const apiRouter = Router()

apiRouter.get('/', (req, res)=>{
    res.send('Api Funcionando')
})