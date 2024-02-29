import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_STRING = `${process.env.MONGODB_STRING}`;

await mongoose.connect(MONGODB_STRING)

export { RegistroManager } from '../models/registros.js'