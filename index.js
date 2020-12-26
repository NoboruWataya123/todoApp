const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const exphbr = require('express-handlebars');
const todoRoutes = require('./routes/todos');
const app = express();
const PORT = 3000;

const hbs = exphbr.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes);

async function start() {
  try {
    await mongoose.connect('mongodb+srv://ddk:p00p1488@ddk.gwkc5.mongodb.net/todos', 
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => {
      console.log(`Example app listening at http://localhost:${PORT}`)
    })
  } catch (err) {
    console.log(e);
  }
};

start();
