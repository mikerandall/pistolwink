const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const restify = require('express-restify-mongoose');
const cors = require('cors');
const app = express();
const router = express.Router();

const Narrative = require('./models/NarrativeModel');
const Character = require('./models/CharacterModel');
const Scene = require('./models/SceneModel');
const Timeline = require('./models/TimelineModel');

app.use(bodyParser.json());
app.use(methodOverride());

mongoose.connect('mongodb://localhost:27017/database');

restify.serve(router, Narrative);
restify.serve(router, Character);
restify.serve(router, Scene);
restify.serve(router, Timeline);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

app.use(router);

app.listen(3333, () => {
  console.log('Express server listening on port 3333')
});