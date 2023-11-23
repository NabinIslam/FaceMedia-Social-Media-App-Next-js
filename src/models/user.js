import { Schema, model, models } from 'mongoose';

const userSchema = new Schema(
  {
    username: {
      type: 'string',
      required: [true, 'Username is required'],
      unique: true,
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    image: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
);

const User = models.User || model('User', userSchema);

export default User;
