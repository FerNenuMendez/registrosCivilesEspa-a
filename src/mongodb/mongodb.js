import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ATLAS_STRING = process.env.ATLAS_STRING;

await mongoose.connect(ATLAS_STRING, { useNewUrlParser: true, useUnifiedTopology: true })

export { RegistroManager } from '../models/registros.js'