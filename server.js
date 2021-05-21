var User=require('./models/user.js');
//підключаємо модуль express
var express=require('express');
//створюємо проект
var app=express();
//папка для віддачі статичного контенту (каталог проекту)
app.use(express.static(__dirname));
//опрацювання кореневого шляху -віддати клієнту index.html
app.get('/',function(req,res){
 res.sendFile(__dirname+'/index.html');
})
//порт прослуховування для сервера
//автоматичний підбір для віддаленого сервера,
//або 8080 для localhost
app.listen(process.env.PORT||8080);
//повідомлення про запуск сервера
console.log('Run server!');

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var fs=require('fs');

app.get('/getusers',function(req,res){
 User.find(function(err,data){
 //console.log(data);
 res.send(data);
 })
})

app.post('/adduser',function(req,res){
 //console.log(req.body);
 var user=new User(req.body);
 user.save(function(err,data){
 if(err) console.log(err.message);
 //console.log(data);
 res.send(data);///res.send("Add user");
 })
})

app.post('/deleteuser',function(req,res){
 User.remove({_id:req.body.id},function(err,data){
 res.send("remove user");
 })
})

app.post('/updateuser',function(req,res){
    console.log(req.body);
    console.log('\n');
    User.findByIdAndUpdate(req.body._id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('User udpated.');
    });
})
