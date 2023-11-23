import connectDB from '@/config/connectDB';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import User from '@/models/user';

// create a new user
export async function POST(request) {
  try {
    await connectDB();

    const reqBody = await request.json();
    const { username, name, email, password, image } = reqBody;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const createdUser = await User.create({
      username,
      name,
      email,
      password: hashedPassword,
      image,
    });

    return NextResponse.json(
      {
        message: 'Registration successful',
        success: true,
        createdUser,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
