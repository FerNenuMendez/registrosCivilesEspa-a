import { Router } from "express";

export const webRouter = Router()

webRouter.get('/buscar', (req, res) => {
    res.render('buscador.handlebars', { titulo: 'Buscar Registro' })
})
webRouter.get('/agregar', (req, res) => {
    res.render('addRegistro.handlebars', { titulo: 'Agregar Registro' })
})