import mongoose, { Document, Schema } from "mongoose";

interface IPost extends Document {
    date: String;
    userId:String;
}
 
const approvedateSchema = new Schema<any>({
    userId : {
        type:mongoose.Schema.Types.ObjectId,
        required : true,
        ref:"login"
    },
    date: {
        type: String,
        // required: true
    }
});
const ApproveDateModel = mongoose.model<any>("approvedate",approvedateSchema);
export default ApproveDateModel;
