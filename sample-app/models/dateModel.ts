import mongoose, { Document, Schema } from "mongoose";

interface IPost extends Document {
    date: String;
    userId:String;
}
 
const dateSchema = new Schema<any>({
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
const DateModel = mongoose.model<any>("date", dateSchema);
export default DateModel;
