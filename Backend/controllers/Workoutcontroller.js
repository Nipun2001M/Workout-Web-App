const Workout=require('../models/workouts')
const mongoose=require('mongoose')

 const createWorkout =async(req,res)=>{
    const {title,load,reps}=req.body;
    try{
        const user_id=req.user._id
        const workout=await Workout.create({title,load,reps,user_id})
        res.status(200).json(workout)

    }catch(error){
     res.status(400).json({error:error.message})



    }
}

const getWorkouts=async(req,res)=>{
    const user_id=req.user._id
    const workouts=await Workout.find({user_id}).sort({createdAt:-1})
    res.status(200).json({workouts});

}


const getWorkout =async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such workout"})
    }
    const workout=await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error:"workout cant find"});

    }
    res.status(200).json(workout)
}

const deleteWorkout=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"no such workout"})
    }

    const workout=await Workout.findOneAndDelete({_id:id})
    if(!workout){
        res.status(400).json({error:'no such workout'});
    }
    res.status(200).json(workout)


}


const updateWorkout=async(req,res)=>{
    const {id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'no such workout '})
    }
    const workout=await Workout.findOneAndUpdate({_id:id},{
        ...req.body
    })
    if(!workout){
        res.status(400).json({error:'no such workout'});
    }
    res.status(200).json({message:'sucessfully workout updated'})
}
module.exports={
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}