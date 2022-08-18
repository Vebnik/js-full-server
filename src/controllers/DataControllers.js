"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var CitizenModel_1 = require("../models/CitizenModel");
var CitiesModel_1 = require("../models/CitiesModel");
var DataControllers = /** @class */ (function () {
    function DataControllers() {
    }
    DataControllers.prototype.getCitizens = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var Citizen, allData, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, CitizenModel_1.default.getModel()];
                    case 1:
                        Citizen = _a.sent();
                        return [4 /*yield*/, Citizen.findAll()];
                    case 2:
                        allData = _a.sent();
                        res.json({ ok: true, data: allData });
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        res.json({ ok: false, data: err_1.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DataControllers.prototype.setCitizen = function (req, res, nex) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name_1, city_id, groups, Citizen, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, name_1 = _a.name, city_id = _a.city_id, groups = _a.groups;
                        return [4 /*yield*/, CitizenModel_1.default.getModel()];
                    case 1:
                        Citizen = _b.sent();
                        return [4 /*yield*/, Citizen.create({ name: name_1, city_id: city_id, groups: groups })];
                    case 2:
                        _b.sent();
                        res.json({ ok: true, data: 'Citizen created' });
                        return [3 /*break*/, 4];
                    case 3:
                        err_2 = _b.sent();
                        res.json({ ok: false, data: err_2.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DataControllers.prototype.setCitizens = function (req, res, nex) {
        return __awaiter(this, void 0, void 0, function () {
            var citizens, Citizen_1, err_3;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        citizens = req.body;
                        return [4 /*yield*/, CitizenModel_1.default.getModel()];
                    case 1:
                        Citizen_1 = _a.sent();
                        citizens.map(function (el) { return __awaiter(_this, void 0, void 0, function () {
                            var name, city_id, groups;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        name = el.name, city_id = el.city_id, groups = el.groups;
                                        return [4 /*yield*/, Citizen_1.create({ name: name, city_id: city_id, groups: groups })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        res.json({ ok: true, data: "Citizens created" });
                        return [3 /*break*/, 3];
                    case 2:
                        err_3 = _a.sent();
                        res.json({ ok: false, data: err_3.message });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    DataControllers.prototype.getCity = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var City, allData, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, CitiesModel_1.default.getModel()];
                    case 1:
                        City = _a.sent();
                        return [4 /*yield*/, City.findAll()];
                    case 2:
                        allData = _a.sent();
                        res.json({ ok: true, data: allData });
                        return [3 /*break*/, 4];
                    case 3:
                        err_4 = _a.sent();
                        res.json({ ok: false, data: err_4.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DataControllers.prototype.setCity = function (req, res, nex) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, name_2, data, City, err_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 3, , 4]);
                        _a = req.body, id = _a.id, name_2 = _a.name, data = _a.data;
                        return [4 /*yield*/, CitiesModel_1.default.getModel()];
                    case 1:
                        City = _b.sent();
                        return [4 /*yield*/, City.create({ id: id, name: name_2, data: data })];
                    case 2:
                        _b.sent();
                        res.json({ ok: true, data: 'City created' });
                        return [3 /*break*/, 4];
                    case 3:
                        err_5 = _b.sent();
                        res.json({ ok: false, data: err_5.message });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return DataControllers;
}());
exports.default = new DataControllers();
