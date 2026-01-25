import exp from 'express'
export const vendorRoute=exp.Router()


vendorRoute.get("/vendors",async(req,res)=>{
const vendorscollection=req.app.get("vendorscollection")
const vendorsdata=await vendorscollection.find().toArray()
res.json({message:"vendors list",payload:vendorsdata})
})

vendorRoute.get("/vendors/:name",async(req,res)=>{
const vendorscollection=req.app.get("vendorscollection")
let vendorname=req.params.name
let vendorobj=await vendorscollection.findOne({name:vendorname})
if(!vendorobj)
   return res.json({message:"user not found"})

res.json({message:"User found",payload:vendorobj})
})

vendorRoute.post("/vendors",async(req,res)=>{
    const vendorscollection=req.app.get("vendorscollection")
    let newvendor=req.body
    await vendorscollection.insertOne(newvendor)
    res.json({message:"New vendor is created"})
})



vendorRoute.delete("/vendors/:name",async(req,res)=>{
      const vendorscollection=req.app.get("vendorscollection")
    let vendorname=req.params.name
let vendor=await vendorscollection.deleteOne({name:vendorname})
    if(vendor.deletedCount==0){
    return res.json({message:"vendor not found"})
 }
 res.json({message:"vendor deleted",payload:vendor})
 
})
vendorRoute.post("/vendors/:name/rating",async(req,res)=>{
     const vendorscollection=req.app.get("vendorscollection")
    let {hygienerating,newrating}=req.body
    let vendorname=req.params.name
    if(newrating<1 || newrating>5||hygienerating<1||hygienerating>5)
        return res.json({message:"rating invalid"})
        const vendorexists=await vendorscollection.findOne({name:vendorname})
  if(!vendorexists)
    return res.json({message:"vendor not found"})
  await vendorscollection.updateOne({name:vendorname},{$inc:{
    "hygiene.total":hygienerating,
    "hygiene.count":1,
    "overall.total":newrating,
    "overall.count":1
  }})
 
     const vendor=await vendorscollection.findOne({name:vendorname})
      const hygieneavg=Number((vendor.hygiene.total/vendor.hygiene.count).toFixed(1))
      const overallavg=Number((vendor.overall.total/vendor.overall.count).toFixed(1))
     const final=(Number((hygieneavg+overallavg)/2).toFixed(1))
     await vendorscollection.updateOne({name:vendorname},{$set:{
        "hygiene.avg":hygieneavg,
        "overall.avg":overallavg,
        finalrating:final
     }})
     const updatedvendor=await vendorscollection.findOne({name:vendorname})
     res.json({message:"Vendor updated",payload:updatedvendor})
})