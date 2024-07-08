let express=require("express")
let bodyParser=require("body-parser")
let cors=require("cors")
let mongoose=require("mongoose")
let registerData=require("./models/registerSchema")
let app=express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// mongoose.connect("mongodb://127.0.0.1:27017/octopi")
let uri="mongodb+srv://anjuap656:9NQRWN6GquVOhaFj@cluster0.vfmzc9m.mongodb.net/"
mongoose.connect(uri)

mongoose.connection
.once("open",()=>{console.log("db is connected");})
.on("error",()=>{console.log("db not connected");})

app.post("/register",(req,res)=>{
    registerData.findOne({name:req.body.name})
    .then((user)=>{
        if(user!==null){
            res.json("user already is there")
        }
        else{
            let details=new registerData(req.body)
            details.save()
            .then((data)=>{res.json(data)})
            .catch((error)=>{res.json(error)})
        }
    })
    .catch(()=>{
        
    })
})
app.post("/login",(req,res)=>{
    // console.log(req.body);
    registerData.findOne({name:req.body.name})
    .then((user)=>{
        if(user.Password==req.body.password){
            // res.json("success")
            res.json({ status: "success", userId: user._id });
        }
        else{
            res.json("failure")
        }
    })
    .catch(()=>{res.json("wrong userName")})
})


app.get("/user/:id",(req,res)=>{
    let id=req.params.id
    registerData.findOne({_id:id})
    .then((x)=>{res.json(x)})
    .catch((err)=>{res.json(err)
        console.log(res.json(err));
    })

})


app.listen("333",()=>{
    console.log("server started");
})
