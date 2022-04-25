var express = require('express')
var app=express()// app: 객체

//사용자가 http://localhost:5000/hello URL 주소로 접슨했을때
app.get('/hello',(req,res) =>{
    res.send('hello world!') //응답을 브라우저로 보내줌
})

// 맨 밑에 놓기
app.listen(5000, () =>{
    console.log("server is running on port 5000!")
})