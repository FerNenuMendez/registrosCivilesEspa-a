import { Router } from "express";

export const webRouter = Router()

webRouter.get('/', (req, res) => {
    res.render('buscador.handlebars', { titulo: 'Buscador' })
})
