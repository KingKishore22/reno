const express=require('express')
const mysql=require('mysql2')
const cors=require('cors')
const bodyParser=require('body-parser')
const app=express()
const port=5000
app.use(cors())
app.use(bodyParser.json())
const db=mysql.createConnection({
    host:'localhost',user:'root',password:'root',database:'users'
})
db.connect((err)=>{
    if(err) throw err;
    console.log('connected to Database!!!')
})
app.get('/users',(req,res)=>{
    db.query('select * from users_d',(er,result)=>{
        if(er) throw er;
        res.json(result)
    })
})

app.post('/users',(req,res)=>{
    const user=req.body;
    db.query('insert into users_d set ?',user,(er,result)=>{
        if(er) throw er;
        res.json({id:result.insertId,...user})
    })
})
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})