var exp=require('express')
var fs=require('fs')
var app=exp()


app.listen(9000,function(){console.log("Server Started at 9000")})

app.use(express.static(path.join(__dirname,'public')));

 app.get('/', function (req, res) {
   res.sendFile(path.join(___dirname + '/form.html'));
});
 