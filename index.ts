import express  from 'express'
import {OAuthRouter} from './oauth.controller'

import bodyParser from 'body-parser';
let port = 1234
let app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(OAuthRouter);

app.listen(port, () => {
    console.log(`Server started at localhost:${port}`)
})