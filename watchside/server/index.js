const express = require('express');
const cors = require ('cors');
const mongoose = require ('mongoose');
const PORT = 9090;
 
const app = express();
app.use(cors());
app.use(express.json());

const watchSchema = new mongoose.Schema({
    img:String,
    watchname:String,
    price:Number
},{timestamps:true})

const watchModel = mongoose.model("WATCHS",watchSchema)

app.get('/api/watchs/', async (req,res)=>{
  
    try {
        const Watch = await watchModel.find()
res.send({
    message:"succes data",
    data:Watch,
})
    } catch (error) {
        res.send({
            message:"error",
            error:error
        })
    }
})


app.get('/api/watchs/:id', async (req,res)=>{
    const {id} = req.params;
    let response;
    try {
        const response = await watchModel.findById(id)
        res.send({
            message:"data id get succes",
            data:response
        })
    } catch (error) {
        if(!response){
            res.send({
                message:"data not found",
             error:message.error
            })
        }else{
            res.send({
                message:"error",
                error:message.error
            })
            
        }
    }
})


app.post('/api/watchs',async(req,res)=>{
    const newModel = new watchModel(req.body);
   await  newModel.save();
    try {
        res.json({
            message:"posted",
            data:newModel
        })
    } catch (error) {
        res.json({
            message:"error",
            error:error
        })
    }
})

app.delete('/api/watchs/:id',async(req,res)=>{
    try {
        const {id} = req.params;
        const deleteWatch = await watchModel.findByIdAndDelete(id)
         if(!deleteWatch){
          return   res.json({
            message:"Error"
            
            })
         }
         res.json({
            message:"deletet",
            data:deleteWatch,
         })
    } catch (error) {
        res.json({
            message:"error delete data",
            error:error.message
        })
    }
})

mongoose.connect('mongodb+srv://Lacin:Lacin123@cluster0.xvlbv2k.mongodb.net/')
.then(()=>{
    console.log("CONNECTED!");
})
.catch((err)=>{
    console.log(err);
})

app.listen(PORT,()=>{
    console.log("This is listening PORT", `${PORT}`);
})