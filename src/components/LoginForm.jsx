'use client';

import { Button, Label, TextInput } from 'flowbite-react';
import Loading from '@/app/loading';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';

const LoginForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLoginForm = async data => {
    try {
      setLoading(true);

      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res.ok) {
        reset();
        router.push('/');
        setLoading(false);
        toast.success(`Login successful`);
      } else {
        toast.error(`Something went wrong. Couldn't login. Please try again`);
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  if (loading) return <Loading />;

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={handleSubmit(handleLoginForm)}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput {...register('email')} id="email" type="email" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput
          {...register('password')}
          id="password"
          type="password"
          required
        />
      </div>

      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
