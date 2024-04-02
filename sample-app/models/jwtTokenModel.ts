import mongoose from "mongoose";

const user = new mongoose.Schema({    
userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'login'
    },
token:String
 });
const jwtModel = mongoose.model('tokens', user);
export default jwtModel;