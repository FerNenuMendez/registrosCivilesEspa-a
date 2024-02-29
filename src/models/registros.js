import { Schema, model } from 'mongoose'

const collection = 'registros'

const registrosSchema = new Schema({
    nombre: { type: String, unique: true },
    email: { type: String, unique: true }
}, {
    strict: 'throw',
    versionKey: false,
})

export const RegistroManager = model(collection, registrosSchema)