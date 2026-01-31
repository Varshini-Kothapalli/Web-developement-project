import exp from 'express'
export const budgetRoute=exp.Router()
budgetRoute.post("/budgetplanner/:name",async(req,res)=>{
    const budgetcollection=req.app.get("budgetcollection")
    const {plan}=req.body
    if(!plan || plan.length==0)
        return res.json({message:"plan is empty"})
    const placenames=plan.map(obj=>obj.place_name)
    const placesarray=await placescollection.find({place_name:{$in:placenames}}).toArray()
    let total=0;
    let breakdown=[]
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
})