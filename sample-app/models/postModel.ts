import mongoose, { Document, Schema } from "mongoose";

interface IPost extends Document {
    post: string;
    postedDate: Date;
}
 
const postSchema = new Schema<IPost>({
    post: {
        type: String,
        required: true
    },
    postedDate: {
        type: Date,
        default: Date.now
    }
});


const PostModel = mongoose.model<IPost>("posts", postSchema);

export default PostModel;
