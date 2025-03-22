const express=require('express')
const cors=require('cors')
const database=require('./database/db2')
const st=require('./student')
const su=require('./index')
const app=express();
app.use(express.json())
app.use(cors())
app.get('/getdata',async (req,res)=>
{
    const db=await database.main();
    const collection=db.collection('studentlist1');
    const findresult=await collection.find({}).toArray();
    res.send({
        status:200,
        message:findresult
    })
})
app.get('/getlist',(req,res)=>
{
    res.send({
        status:500,
        data:st.list
    })
})
app.get('/getdetails',(req,res)=>
{
    const result=su.sum(10,20);
    const result2=su.minus(40,90);
    res.send({
        status:200,
        data:result,
        message:result2
    });
});
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
})
app.delete('./deleteData',async(req,res)=>
{
    try{
        const db=await database.main();
        const collection=db.collection('studentlist1');
        const findresult=await collection.deleteOne({name:req.query.name});
        console.log(findresult);
        if(findresult.deletedCount>0)
        {
            res.send({
                message:"",
                status:200,
                data:"record deleted successfully"
            })
        }
    }
    catch(err)
    {
        res.send({
            message:"something went wrong,Please try again later",
            status:500
        })
    }
})
    app.listen(3000,()=>
    {
        console.log("server statred on the port 3000")
    })
