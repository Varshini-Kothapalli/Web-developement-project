import exp from 'express'
import { MongoClient,Db } from 'mongodb';
import cors from "cors";

const app=exp()
const port=8080;
app.use(exp.json())
app.use(cors());
 
import { vendorRoute } from './routes/vendorRoutes.js';
import { budgetRoute } from './routes/budgetplanner.js';
app.use('/vendor-api',vendorRoute)
app.use('/budget-api',budgetRoute)
const dbclient=new MongoClient("mongodb://localhost:27017")
dbclient.connect()
.then(()=>{
    const dbobj=dbclient.db('backenddb')
    const vendorscollection=dbobj.collection('vendors')
    app.set("vendorscollection",vendorscollection)
    const budgetcollection=dbobj.collection('budgetplanner')  
    app.set("budgetcollection",budgetcollection)
    console.log("Data base connection success")
        app.listen(port,()=>console.log(`Server is listening ${port}`))
}).
catch((err)=>{
console.log("db connection failed",err)
})

app.use((req,res,next)=>{
    res.json({message:"Invalid path",payload:req.path})
})
app.use((err,req,res,next)=>{
    res.json({message:"Error occured",response:err.message})
})