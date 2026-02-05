import exp from 'express'
export const budgetRoute=exp.Router()
budgetRoute.post("/budgetplanner",async(req,res)=>{
    const budgetcollection=req.app.get("budgetcollection")
   
    const {plan}=req.body
    if(!plan || plan.length==0)
        return res.json({message:"plan is empty"})
    //Find the placename in given req of the body
    const placenames=plan.map(obj=>obj.place_name)
    //find the placenams in data base according the placenames
    const placesarray=await budgetcollection.find({place_name:{$in:placenames}}).toArray()
    let total=0;
    let breakdown=[]
    //for each place take a loop and store its each cost 
    for(let userplace of plan){ 

    const dbplace=placesarray.find(p=>p.place_name==userplace.place_name)
    if(!dbplace)
        continue;
    const days=userplace.days
    const placetotal=(dbplace.entry_fee)+(dbplace.food_per_day+dbplace.stay_per_day+dbplace.miscellaneous)*days
    total+=placetotal
    breakdown.push({ 
        place_name:dbplace.place_name,days,total_cost:placetotal}
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