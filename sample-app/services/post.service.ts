import { json } from "body-parser";
import ComplaintModel from "../models/complaintModel";
import DateModel from "../models/dateModel";
import PostModel from "../models/postModel";
import ApproveDateModel from "../models/approveDateModel";

export const post = async(req,res)=>{
    let data = req.body
    let blogPost = new PostModel(data)
    let result = await blogPost.save()
    res.json({
        status:"success"
    })
}
export const view = async(req,res)=>{
    let input = req.body
    let result = await PostModel.find(input)
    res.json(result)
}
export const deletepost = async(req,res)=>{
    let input =req.body
    let response= await PostModel.deleteOne(input)
    res.json({
        status:"success"
    })
}

export const addcom = async(req,res)=>{
    let data = req.body
    let comPost = new ComplaintModel({
        userId:req?.user?.id,
        post : req.body.post
    }).save()
    res.json({
        status:"success"
    })
}
export const viewcom = async(req,res)=>{
    let data = await ComplaintModel.find().populate('userId').exec();
    // console.log(data)
    res.json(data)
}

export const adddate = async(req,res)=>{
    let data = req.body
    console.log(req.body)
    let datePost = new DateModel({
        userId:req?.user?.id,
        date : req.body.date
    }).save()
    res.json({
        status:"success"
    })
}
export const viewdate = async(req,res)=>{
    let data = await DateModel.find().populate('userId').exec()
    res.json(data)
}
export const approvedate= async(req,res)=>{
    let data = req.body
    let result = new ApproveDateModel({
        userId:req?.user?.id,
        date : req.body.date
    }).save()
    res.json({
        status:"success"
    })}