import mongoose, { Document, Model } from "mongoose";

interface ILogin {
    firstname:String,
    lastname:String,
    email:String,
    mobile:String,
    housename:String,
    locality:String,
    pincode:String,
    district:String,
    taluk:String,
    village:String,
    wardno:String,
    houseno:String,
    password:String
}

interface ILoginDocument extends ILogin, Document {}

const loginSchema = new mongoose.Schema<ILogin>(
    {
        firstname:String,
        lastname:String,
        email:String,
        mobile:String,
        housename:String,
        locality:String,
        pincode:String,
        district:String,
        taluk:String,
        village:String,
        wardno:String,
        houseno:String,
        password:String
    }
);

const LoginModel: Model<ILoginDocument> = mongoose.model<ILoginDocument>("login", loginSchema);

export default LoginModel;
