import RegisterForm from '@/components/RegisterForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const RegisterPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect('/');

  return (
    <main>
      <div className="container mx-auto">
        <RegisterForm />
      </div>
    </main>
  );
};

export default RegisterPage;
