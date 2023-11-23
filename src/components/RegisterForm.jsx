'use client';

import Loading from '@/app/loading';
import { Button, Label, TextInput } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const RegisterForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegisterForm = async data => {
    try {
      setLoading(true);

      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log(res);

      if (res.ok) {
        reset;
        router.push('/');
        toast.success(`Registration successful`);
      } else {
        toast.error(`Something went wrong. Couldn't register`);
        setLoading(false);
      }
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  if (loading) return <Loading />;

  return (
    <form
      className="flex max-w-md flex-col gap-4 mx-auto"
      onSubmit={handleSubmit(handleRegisterForm)}
    >
      <div>
        <div className="mb-2 block">
          <Label htmlFor="username" value="Username" />
        </div>
        <TextInput
          {...register('username')}
          id="username"
          type="text"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Full name" />
        </div>
        <TextInput {...register('name')} id="name" type="text" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email address" />
        </div>
        <TextInput
          {...register('email')}
          id="email"
          type="email"
          placeholder="example@example.com"
          required
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Password" />
        </div>
        <TextInput
          {...register('password')}
          id="password"
          type="password"
          required
        />
      </div>
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;
