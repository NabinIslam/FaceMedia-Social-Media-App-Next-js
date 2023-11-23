import connectDB from '@/config/connectDB';
import User from '@/models/user';
import { NextResponse } from 'next/server';

// get all users
export async function GET() {
  try {
    connectDB();

    const users = await User.find({});

    return NextResponse.json(
      {
        message: `All users fetched successfully`,
        success: true,
        users,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ status: 500 }, { error: error.message });
  }
}
