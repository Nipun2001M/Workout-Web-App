require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const WorkoutRoutes=require('./routes/workouts')
const UserRoutes=require('./routes/user')
const app=express();
const cors=require('cors')

app.use(express.json())
app.use(cors())



app.use('/api/workouts',WorkoutRoutes)
app.use('/api/user',UserRoutes)



mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log('Connected to DB and Listning to port 4000!!')
    })

}).catch((error)=>{
    console.log(error)
})