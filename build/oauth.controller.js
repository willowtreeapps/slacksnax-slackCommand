"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const request_promise_1 = __importDefault(require("request-promise"));
class OAuthController {
    constructor() {
        this.router = express_1.Router();
        this.router.get('/', (req, res) => {
            res.send('Hello, World!');
        });
        this.router.post('/commands/snack', (req, res) => {
            console.log(req.body);
            let snack = req.body.text;
            let requestor = req.body.user_id;
            console.log(snack);
            console.log(requestor);
            request_promise_1.default.post('http://47fffc9b.ngrok.io/snacks', {
                method: "POST",
                json: true,
                body: {
                    "name": snack,
                    "requestor": requestor
                }
            })
                .promise()
                .then(() => res.send("Snack Saved!"));
        });
        this.router.get('/oauthredirect', (req, res) => {
            console.log(req.body);
            let { client_id, client_secret, code } = req.body;
            console.log(client_id);
            console.log(client_secret);
            console.log(code);
            res.send(`Hello, ${name}!`);
        });
    }
}
exports.OAuthRouter = new OAuthController().router;
