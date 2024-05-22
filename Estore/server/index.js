const express = require ('express')
const cors = require ('cors')
const mongoose = require ('mongoose')
const PORT = 2121 ;
 

const app = express();
app.use(cors());
app.use(express.json());

const estoreSchema = new mongoose.Schema({
    img:String,
    name:String,
    price:Number,
    oldprice:Number,
},{timestamps:true})

const estoreModel = mongoose.model("ESTORE",estoreSchema)

app.get('/api/estore', async(req,res)=>{
const estore = await estoreModel.find()
try {
    res.send({
        message:"data succes",
        data:estore
    })
} catch (error) {
    res.send({
        message:"data not succes",
        error:error
    })
}
})

app.get('/api/estore/:id',async(req,res)=>{
    const {id} = req.params
    let response;
    try {
        response = await estoreModel.findById(id);
        if(response){
            res.send({
                message:"data by id",
                data:response
            })
        }else{
            res.send({
                message:"data not fount",
                data:null
            })
        }
    } catch (error) {
        res.send({
            message:"error",
            error:error.message
        })
    }
})

app.post('/api/estore',async(req,res)=>{
  
    try {
        const newEstore = new estoreModel(req.body);
      await  newEstore.save();
        res.json({
            message:"data posted",
            data:newEstore,
        })
    } catch (error) {
        res.json({
            message:"error",
            error:error.message,
        })
    }
})


app.delete('/api/estore/:id',async(req,res)=>{

try {
    const {id} = req.params;
const deleteestore = await estoreModel.findByIdAndDelete(id);
res.json({
    message:"delete",
    data:deleteestore,
})
} catch (error) {
    res.json({
        message:"error",
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
app.listen(PORT ,()=>
{
    console.log("PORT LISTENING",`${PORT}`);
})