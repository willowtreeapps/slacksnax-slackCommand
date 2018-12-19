"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const oauth_controller_1 = require("./oauth.controller");
const body_parser_1 = __importDefault(require("body-parser"));
let port = 1234;
let app = express_1.default();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(oauth_controller_1.OAuthRouter);
app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
});
