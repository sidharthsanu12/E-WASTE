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
export const useredit = async (req: any, res: any) => {
    // const userId = req.params.id;
    // if (!userId) {
    //     return res.status(400).json({ error: "User ID is missing from request parameters" });
    // }
    // const updates = req.body;
    // const user = await loginModel.findById(req.user._id);
    // if (!user) {
    //     return res.status(404).json({ error: "User not found" });
    // }
    // // Update user fields
    // Object.keys(updates).forEach(key => {
    //     user[key] = updates[key];
    // });
    // await user.save();
    // res.status(200).json({ message: "User profile updated successfully" });
}

export const viewusers= async(req,res)=>{
    let input = req.body
    let result = await loginModel.find(input)
    res.json(result)
}


