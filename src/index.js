import express from "express";
import fetch from "node-fetch";
import React from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from 'styled-components';
import fs from 'fs';
import compression from 'compression';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import cron from 'node-cron';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';import Cryptr from 'cryptr';
const cryptr = new Cryptr(config.key);
import config from './config';
import passportConfig from './config/passport';

import userCtrl from './controllers/userCtrl';
import promotionCtrl from './controllers/promotionCtrl';

import { LoginRoot, PromolistRoot, PromoformRoot } from './roots';

var PORT = process.env.PORT || 3003;
passportConfig(passport);

const app = express();
app.use(session({
    secret: 'banana',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

cron.schedule('* * 1 * *', () => {
  fetch('https://hopkinscms.herokuapp.com/')
  .then(res => console.log("requested at " + new Date()));
});

var dataObj = {},
loginBundle = "",
promolistBundle = "",
promoformBundle = "";

fs.readFile('./dist/js/login.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  loginBundle = data || "";
});
fs.readFile('./dist/js/promolist.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  promolistBundle = data || "";
});
fs.readFile('./dist/js/promoform.bundle.min.js', "utf8", (err, data) => {
  if (err) console.log("ERR" ,err);
  promoformBundle = data || "";
});

app.get('/login', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, loginBundle, LoginRoot, "login"));
});
app.get('/promolist', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, promolistBundle, PromolistRoot, "promolist"));
});
app.get('/promoform', (req, res) => {
  let data = "";
  res.set('Cache-Control', 'public, max-age=31557600');
  res.send(returnHTML(data, promoformBundle, PromoformRoot, "promoform"));
});

app.get('/images/:id', (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
  res.sendFile(path.join(__dirname, '../images/' + req.params.id));
});

app.post('/api/login', passport.authenticate('local-login'), userCtrl.login);
app.post('/api/signup', passport.authenticate('local-signup'), userCtrl.login);
app.get('/getMe', userCtrl.getMe);
app.get('/logout', userCtrl.logout);
app.get('/users', userCtrl.read);
app.put('/users/:id', userCtrl.update);

app.get('/promotions', promotionCtrl.read);
app.get('/promotions/:id', promotionCtrl.readOne);
app.post('/promotions', promotionCtrl.create);
app.put('/promotions/:id', promotionCtrl.update);
app.delete('/promotions/:id', promotionCtrl.destroy);


app.get('/health', (req, res) => res.send('OK'));

var mongoUri = 'mongodb+srv://'+cryptr.decrypt(config.dbuser)+':'+cryptr.decrypt(config.dbpass)+'@hopkinscms.rwvej.mongodb.net/hopkinscms?retryWrites=true&w=majority';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'connection error'));
mongoose.connection.once('open', function(){
 console.log("Connected to mongoDB");
});

app.listen( PORT, () => {
  console.log('Running on http://localhost:' + PORT)
});


// functions!!!!!!!!!!!!!

function getQueries(req, res){
  const qOb = {};
  const queries = req && req._parsedUrl && req._parsedUrl.query && req._parsedUrl.query.split('&') ? req._parsedUrl.query.split('&') : [];
  if(queries.length){
    queries.forEach((x) => {
        var y = x.split('=');
        qOb[y[0]] = y[1];
    });
  }
  return qOb;
}

function fetcher(url){
	return fetch(url)
    .then((response) => {
        if(response.status !== 200) throw Error(response.statusText);
        return response.json();
    }).then((json) => {
        return json;
    }).catch(errHandle)
}

function returnHTML(data, bundle, Page, title){
    const dataString = JSON.stringify(data);
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<Page data={data}/>));
    const styles = sheet.getStyleTags();

    return `
            <html lang="en">
              <head>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <title>${title}</title>
                <meta name="Description" content="${title}">
                <style>
                  body { margin: 0; font-family: Helvetica; }
                  a { text-decoration: none; color: #000; }
                </style>
                ${styles}
              </head>
              <body>
                <script>window.os = window.os || {};</script>
                <script>window.__DATA__=${dataString}</script>
                <div id="app" role="main">${body}</div>
                <script>${bundle}</script>
              </body>
            </html>
          `;
}

function errHandle(err){
    console.log(err);
}
