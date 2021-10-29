import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;

app.get('/index.html',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html')); 
 });
 
 app.get('/public/style.css',function(req,res){
     res.sendFile(path.join(__dirname + '/public/style.css')); 
 });
 
 app.get('/public/script.js',function(req,res){
     res.sendFile(path.join(__dirname + '/public/script.js')); 
 });
 
 app.get('/', function(req, res) {
     res.redirect('index.html');
 });

app.listen(port);
console.log('Server started at http://localhost:' + port);