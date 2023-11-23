'use client';
import { Spinner } from 'flowbite-react';

const Loading = () => {
  return (
    <main className="h-screen flex items-center justify-center">
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </main>
  );
};

export default Loading;
