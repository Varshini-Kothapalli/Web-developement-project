import exp from 'express'
export const budgetRoute=exp.Router()
budgetRoute.post("/budgetplanner",async(req,res)=>{
    const budgetcollection=req.app.get("budgetcollection")
   
    const {plan}=req.body
    if(!plan || plan.length==0)
        return res.json({message:"plan is empty"})
    let total=0;
    let breakdown=[]
    //for each place take a loop and store its each cost 
    for(let dayplan of plan){ 
   const { day,places }=dayplan
   if(!places || places.length==0)
    continue
    const dbplace=placesarray.find(p=>p.place_name==userplace.place_name)
     //find the placenams in data base according the placenames
    const placesarray=await budgetcollection.find({place_name:{$in:placenames}}).toArray()
    let daytotal=0;
    let entrytotal=0;
    let maxfood=0;
    let maxstay=0;
    let maxmic=0;
    let maxtravel=0;
 for(let dbplaces of placesarray){
    entrytotal+=dbplaces.entry_fee
    if(dbplace.food_per_day>maxfood)
        maxfood=dbplace.food_per_day
         if(dbplace.stay_per_day>maxstay)
         maxstay=dbplace.stay_per_day
         if(dbplace.miscellaneous>maxmic)
         maxmic=dbplace.miscellaneous
         if(dbplace.travel_cost>maxtravel)
         maxtravel=dbplace.travel_cost
 }
 daytotal=entrytotal+maxfood+maxstay+maxmic+maxtravel
 
    total+=daytotal
    breakdown.push({ 
      day,places,total_cost: daytotal
    }
    )
}
    // save budget doc
const doc={
    plan,
    breakdown,
    total,
    createdAt: new Date()
}
    
await budgetcollection.insertOne(doc)
res.json({message:"Budget calculated",payload:total,breakdown})

})