import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import { log } from 'console';


const app = express();
const port = 3000;

app.use(express.static('./src/public/'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Http logger
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});
app.get('/search', (req, res) => {
  res.render('search');
});
app.get('/results', (req, res) => {
  res.render('results');
});
app.get('/upload', (req, res) => {
  res.render('upload');
});
app.post('/upload', (req, res) => {
  res.send('');
});

app.listen(port, () => {
});