import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  password: string;
  shops: string[];
}

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  shops: {
    type: [String],
    validate: {
      validator: (v: string[]) => v.length >= 3,
      message: 'User must have at least 3 shops.',
    },
  },
});

export default model<IUser>('User', UserSchema);
