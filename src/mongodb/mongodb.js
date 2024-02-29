import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const ATLAS_STRING = process.env.ATLAS_STRING;
console.log(ATLAS_STRING)
await mongoose.connect(ATLAS_STRING)

export { RegistroManager } from '../models/registros.js'