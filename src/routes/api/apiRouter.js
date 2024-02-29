import { Router } from 'express'
import { registrosRouter } from './registrosRouter.js'

export const apiRouter = Router()

apiRouter.get('/', (req, res) => {
    res.send('ApiRouter Registros Funcionando')
})
apiRouter.use('/registros', registrosRouter)