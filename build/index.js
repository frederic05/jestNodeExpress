"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Importation des modules
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const initial_1 = __importDefault(require("./common/initial"));
const routing_1 = __importDefault(require("./router/routing"));
//Déclarations des variables
const app = (0, express_1.default)();
//Utilisation des middelware
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('apiBase/', routing_1.default);
app.use(body_parser_1.default.json());
app.use((0, morgan_1.default)('tiny'));
app.use((0, cors_1.default)({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false
}));
//Création du serveur
app.listen(initial_1.default.Port, () => console.info(`serveur listen port:http://${initial_1.default.Adress}:${initial_1.default.Port}`));
