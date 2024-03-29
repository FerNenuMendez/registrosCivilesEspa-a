import express from "express";
import handlebars from 'express-handlebars'
import { PORT } from "./utils/config/config.js";
import { webRouter } from "./routes/web/webRouter.js";
import { apiRouter } from "./routes/api/apiRouter.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars');

const server = app.listen(PORT, () => {
    console.log(`Servidor conectado a AtlasDB`)
    console.log(`En LocalHost puerto ${PORT}`)
})

app.use('/static', express.static('./static'))

app.use(webRouter)
app.use('/api', apiRouter)

app.get('/', (req, res) => {
    res.send('Api registros funcionando OK')
})