const express=require('express')
const slist=require('./student')
const app=express();
app.get('/getdata',(req,res)=>{
    res.send({
        "message":"hello node js",
        "status":200

    })
})
app.listen(3000,()=>{
    console.log("server  started on port 3000")
})
app.post('/insertData',(req,res)=>
    {
        try{
            res.send({
                status:200,
                message:"record inserted successfully",
                datais:req.body
            })
        }
        catch(err)
        {
            res.send({
                message:"something went wrong ,Please try again later"+err,
                status:500
            })
        }
        app.listen(3000,()=>
        {
            console.log("server statred on the port 3000")
        })
    })

