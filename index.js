"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var cookie = require("cookie-parser");
var Router_1 = require("./src/router/Router");
var app = express();
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookie());
app.use('/api', Router_1.default);
app.listen(process.env.PORT || '5000', function () { return console.log('App listen 5000 PORT'); });
