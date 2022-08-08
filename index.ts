import * as express from 'express'
import * as cors from 'cors'
import * as cookie from 'cookie-parser'
import router from "./src/router/Router";

const app = express()

app.use(cors( {credentials: true, origin: 'http://localhost:3000'} ));
app.use(express.json());
app.use(cookie());
app.use('/api', router)

app.listen('5000', () => console.log('App listen 5000 PORT'))