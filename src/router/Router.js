"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var DataControllers_1 = require("../controllers/DataControllers");
var ValidationReqControllers_1 = require("../controllers/ValidationReqControllers");
var router = (0, express_1.Router)();
router.get('/citizens', ValidationReqControllers_1.default.requestLogger, DataControllers_1.default.getCitizens);
router.post('/citizens', ValidationReqControllers_1.default.requestLogger, DataControllers_1.default.setCitizen);
exports.default = router;
