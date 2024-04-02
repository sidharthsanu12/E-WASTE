import loginModel from "../models/loginModel";
import jwtModel from "../models/jwtTokenModel";
import adminModel from "../models/adminModel";

const jwt=require('jsonwebtoken')

const bcrypt=require("bcryptjs")
const hashPasswordgenerator=async(pass:any)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

const createtoken =(id,email,firstname)=>{return jwt.sign({id,email,firstname},"adsadsadsasd",{
    expiresIn:'1d'
})
}
const createtokenadmin =(id,email,name)=>{return jwt.sign({id,email,name},"adsadsadsasd",{
    expiresIn:'1d'
})
}

export const signin = async (req: any, res: any) => {
    try {
        const { email, password } = req.body;
        const user = await loginModel.findOne({ email });
        if (!user) {
            return res.json({
                status: "Invalid email"
            });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.json({
                status: "Invalid password"
            });
        }
        const token=createtoken(user._id,user.email,user.firstname)
        console.log(token)

        await new  jwtModel({
            userId:user._id,
            token:token
        }).save()

        return res.json({
            status: "Success",
            token : token
        });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            error: "Error: " + error.message
        });
    }
}

export const adminsignup = (async(req:any,res:any) =>{
    try {
        const {data} = {data:req.body};
    
        let password =data.password;
        const hashedPassword=await hashPasswordgenerator(password)
        data.password=hashedPassword;
        console.log(data)
        let login = await new adminModel(data).save()
        console.log("admin",data)
        return res.status(200).json({
            message: "success"
        });
    } catch (error:any) {
        res.status(500).json({
            error: "error"+error
        });
    }
    })


export const adminlogin = async(req:any, res:any) => {
    try {
        const { email, password } = req.body;
        const user = await adminModel.findOne({ email });
        if (!user) {
            return res.json({
                status: "Invalid email"
            });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.json({
                status: "Invalid password"
            });
        }
        const token=createtokenadmin(user._id,user.email,user.name)
        console.log(token)

        await new  jwtModel({
            userId:user._id,
            token:token
        }).save()

        return res.json({
            status: "Success",
            "userData":user
        });
    } catch (error: any) {
        console.log(error);
        res.status(500).json({
            error: "Error: " + error.message
        });
    }
}