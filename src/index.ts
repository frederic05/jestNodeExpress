//Importation des modules
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import defaultParam from './common/initial';
import router from './router/routing';

//Déclarations des variables
const app = express();

//Utilisation des middelware
app.use(bodyParser.urlencoded({extended: false}));
app.use('apiBase/', router);
app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false
  }))


//Création du serveur
app.listen(defaultParam.Port, ()=> console.info(`serveur listen port:http://${defaultParam.Adress}:${defaultParam.Port}`));