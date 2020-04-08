const express = require('express');
var session = require('express-session');
const flash = require('connect-flash');
const engines = require('consolidate');
const app = express();


app.engine('hbs', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');
app.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false}));

app.use(flash()); 


app.get('/',(req,res) =>{
    
    res.render('index', { messages: req.flash('info') });
    // res.render('index',{ messages:"Bg" });
  
})

app.get('/flash', function(req, res){
    req.flash('info', 'Hi there!')
    res.redirect('/');
  });
  
app.get('/no-flash', function(req, res){
    res.redirect('/');
  });
  
app.get('/multiple-flash', function(req, res){
      req.flash('info', ['Welcome', 'Please Enjoy']);
      res.redirect('/');
});
  


app.listen(3000,()=>{
    console.log("App Started");
})