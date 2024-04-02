import ComplaintModel from "../models/complaintModel";
import jwtModel from "../models/jwtTokenModel";
import loginModel from "../models/loginModel";

const bcrypt=require("bcryptjs")
const hashPasswordgenerator=async(pass:any)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

export const login = (async(req:any,res:any) =>{
try {
    const {data} = {data:req.body};
    let emailExist:any=await loginModel.findOne({email:req?.body?.email});
    if(emailExist){
       return res.status(400).json({
            error: "email already exist"
        });
    }
    let password =data.password;
    const hashedPassword=await hashPasswordgenerator(password)
    data.password=hashedPassword;
    console.log(data)
    let login = await new loginModel(data).save()
    console.log("login",login)
    return res.status(200).json({
        message: "success"
    });
} catch (error:any) {
    console.log(error)
    res.status(500).json({
        error: "error"+error
    });
}
})

export const userprofile = async(req,res)=>{
    let result = await loginModel.find({_id:req.user._id})
    console.log(result)
    res.json(result)
}

export const useredit=async(req:any,res:any)=>{
    // const userId=req.user.id
    // const updatedData=req.body
    // await loginModel.findByIdAndUpdate(userId,updatedData)
    // res.status(200).json({
    //     message:"User profile updated successfully"
    // })
}

export const viewusers= async(req,res)=>{
    let input = req.body
    let result = await loginModel.find(input)
    res.json(result)
}


