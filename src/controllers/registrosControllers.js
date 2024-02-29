import { RegistroManager } from '../mongodb/mongodb.js'

export async function getRegistros(req, res) {
    try {
        const registros = await RegistroManager.find()
        res.status(200).send(registros)
    } catch {
        res.status(404).send({
            message: error.message
        })
    }
}

export async function getRegistroControllerByName(req, res) {
    const { nombre } = req.params
    try {
        const registro = await RegistroManager.findOne({ nombre: `${nombre}` })
        if (!registro) {
            res.status(404).send({
                message: 'Registro no encontrado'
            })
        } else {
            res.status(200).send(registro)
        }
    } catch {
        res.status(400).send({
            message: error.message
        })
    }
}

export async function postRegistroController(req, res) {
    const { nombre, email } = req.body
    try {
        const id = await RegistroManager.countDocuments() + 1
        const registro = await RegistroManager.create({ id, nombre, email })
        console.log(registro)
        res.sendStatus(201)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}