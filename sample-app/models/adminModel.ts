import { Document, model, Schema } from 'mongoose';

// Define Admin interface
interface IAdmin extends Document {
  email: string;
  name:string;
  password: string;
}

// Define Admin schema
const adminSchema = new Schema<IAdmin>({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true }
});

// Create and export Admin model
const AdminModel = model<IAdmin>('admin', adminSchema);

export default AdminModel;
