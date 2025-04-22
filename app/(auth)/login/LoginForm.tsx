'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { LoginResponseBody } from '../api/login/route';

type Props = { returnTo?: string | string[] };

export default function LoginForm(props: Props) {
  const [email, setEmail] = useState('irabruce20@gmail.com');
  const [password, setPassword] = useState('123456');
  const [errors, setErrors] = useState<{ message: string }[]>();

  const router = useRouter();

  async function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data: LoginResponseBody = await response.json();

    if ('errors' in data) {
      setErrors(data.errors);
      return;
    }

    // router.push(
    //   getSafeReturnToPath(props.returnTo) || `/profile/${data.user.username}`,
    // );
    router.refresh();
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-semibold text-center">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#F35C7A] focus:border-[#F35C7A]"
              required
            />
          </label>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-[#F35C7A] focus:border-[#F35C7A]"
              required
            />
          </label>
        </div>

        <p className="text-center text-sm text-gray-600">
          Don’t have an account?{' '}
          <a
            href="/register"
            className="text-[#F35C7A] hover:underline font-medium"
          >
            Register
          </a>
        </p>

        {errors?.map((error) => (
          <div key={`error-${error.message}`} className="text-red-600 text-sm">
            {error.message}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-[#F35C7A] text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
