import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import connectDB from '@/config/connectDB';
import bcrypt from 'bcryptjs';
import User from '@/models/user';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},

      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectDB();

          const user = await User.findOne({ email });

          if (!user) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          if (!passwordMatch) return null;

          return user;
        } catch (error) {
          console.error(error);
        }
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
