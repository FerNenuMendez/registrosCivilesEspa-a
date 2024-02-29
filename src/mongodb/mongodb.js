import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ATLAS_STRING = `${process.env.ATLAS_STRING}`

await mongoose.connect(ATLAS_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conexión exitosa a la base de datos');
    })
    .catch(error => {
        console.error('Error de conexión:', error.message);
    });

export { RegistroManager } from '../models/registros.js'