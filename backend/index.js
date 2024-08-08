require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
// bearer token the peson having token is owner of it
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { error } = require('console');
const fs = require("fs");
// const { type } = require("os");
// const { error } = require("console");

app.use(express.json({limit: "16kb"}));
app.use(cors({
    origin: process.env.CORS_ORIGIN,
})); 
// Database connection with mongodb

const connectDB =  async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}`);
        console.log("MONGODB connected!!!");
        app.on("error",()=>{
            console.log("ERROR: ",error);
            throw error;
        })
    } catch (error) {
        console.error("ERROR: ",error);
        throw error;
        process.exit(1);
    }
}

connectDB();

app.get("/",(req,res)=>{
    res.send("Express is running");
})

// starting other

// import userRouter from './user.routes.js';

// app.use("/api/v1/users",userRouter);

// ending

// Image storage Engine
const storage = multer.diskStorage({
    destination: './upload/images', 
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({storage:storage});

// creating upload endpoint for images
app.use('/images',express.static('upload/images'));

app.post("/upload",upload.single('product'),(req,res)=>{
    // res.end("fdsafads")
    // res.set("content-type","application/json")
    res.json({
        success: 1,
        image_url: `http://localhost:${process.env.PORT}/images/${req.file.filename}`
    })
})

const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },  
    catagory:{
        type: String,
        required: true,
    },
    old_price:{
        type: Number,
        required: true,
    },
    new_price:{
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    avilable:{
        type: Boolean,
        default: true,
    }
})

app.post('/addproduct',async(req,res)=>{
    let products = await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else{
        id = 1;
    }
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        catagory:req.body.catagory,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    // console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

// creating api for deleting products

app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

// creating api for getting all products

app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log("All products fecthed");
    res.send(products);
})

// Schema for user model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    Date:{
        type:Date,
        default:Date.now,
    }
})

//  Creating end point for registering user

app.post('/signup',async(req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,error:"Existing user found with same email adress"});
    }
    let cart = {};
    for(let i = 0; i < 300 ; i++){
        cart[i] = 0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();
    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,`${process.env.JWT_KEY}`);
    res.json({success:true,token});
})

// Creating end point for user login

app.post('/login',async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,`${process.env.JWT_KEY}`);
            res.json({success:true,token});
        }
        else{
            res.json({success:false,error:"Wrong Password"})
        }
    }
    else{
        res.json({success:false,error:"Wrong Email Id"});
    }
})
// Api create
app.listen(process.env.PORT,(error)=>{
    if(!error){
        console.log(`Server running at port ${process.env.PORT}`);
    }
    else{
        console.log("Error: "+error);
    }
})

