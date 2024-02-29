import { Router } from "express";
import { getRegistros, getRegistroControllerByName, postRegistroController } from '../../controllers/registrosControllers.js'

export const registrosRouter = Router()

registrosRouter.get('/', getRegistros)
registrosRouter.get('/:nombre', getRegistroControllerByName)
registrosRouter.post('/', postRegistroController)