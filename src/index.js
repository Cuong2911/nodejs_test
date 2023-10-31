import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';

import { default as route } from './routes/index.js';

const app = express();
const port = 3000;

app.use(express.static('./src/public/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Http logger
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');

route(app);

app.listen(port, () => {});
