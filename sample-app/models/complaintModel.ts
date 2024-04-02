import mongoose, { Document, Schema } from "mongoose";

interface IPost extends Document {
    post: string;
    postedDate: Date;
    userId:String;
}
 
const comSchema = new Schema<any>({
    userId : {
        type:mongoose.Schema.Types.ObjectId,
        required : true,
        ref:"login"
    },
    post: {
        type: String,
        required: true
    },
    postedDate: {
        type: Date,
        default: Date.now
    }
});


const ComplaintModel = mongoose.model<any>("coms", comSchema);

export default ComplaintModel;
