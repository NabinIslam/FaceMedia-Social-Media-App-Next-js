import connectDB from '@/config/connectDB';
import Post from '@/models/post';
import { NextResponse } from 'next/server';

// create a post
export async function POST(request) {
  try {
    connectDB();

    const post = await Post.create(await request.json());

    return NextResponse.json(
      {
        message: 'Post created successfully',
        success: true,
        post,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// get all posts
export async function GET() {
  try {
    connectDB();

    const posts = await Post.find({}).populate('user');

    return NextResponse.json(
      {
        message: 'All Posts fetched successfully',
        success: true,
        posts,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
