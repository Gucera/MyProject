/*first exercise*/

const express = require("express");
const fs = require("fs");

const app = express();



app.get('/', function(request, response) {
    response.send("Welcome to express. This is my first web server.")
})

/*second exercise*/

app.get('/about', function(request, response) {
    response.send("This is the about page.")
})

app.listen(8000, function() {
    console.log("Server is running on port 8000")
})

app.get('/users/:userid', function(request, response){
    response.send(request.params)
})

/*thrid exercise*/
app.get('/GetStudents', function(request, response){
    fs.readFile( __dirname + "/Student.json", "utf-8", function(err, data){
        response.json({
            "status": true,
            "data": JSON.parse(data)
        })
    })



})

app.get('/GetStudentid/:id',(req,res)=>{
    studentdata={}
    fs.readFile(__dirname + "/" + "Student.json", 'utf8'
   , function (err, data) {
   
    var students= JSON.parse(data)
    var student=students["Student"+req.params.id]
    console.log("student",student)
    if (student)
   
    res.json(student)
    else
    res.json({ 'status':true, 'Status_Code':200,
    'requested at': req.localtime, 'requrl':req.url,
    'request Method':req.method, 'studentdata':JSON.parse(data)});
    });
   
   
    })



    app.get('/studentinfo',function(req,res)
{
res.sendFile('StudentInfo.html', { root: __dirname });
})
app.post('/submit-data', function (req, res) {
var name = req.body.firstName + ' ' + req.body.lastName+
' ';
var Age= req.body.myAge+ ' Gender: ' + req.body.gender+''
Qual= ' Qualification'+ req.body.Qual
console.log(req.body.Qual)
res.send({
status: true,
message: 'form Details', data: {
name: name, age:Age, Qualification:Qual,
}
});
});