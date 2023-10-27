import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import { log } from 'console';


const app = express();
const port = 3000;

app.use(express.static('./src/public/'));

// Http logger
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './src/resources/views');

app.get('/', (req, res) => {
  console.log('xin chao');
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
});