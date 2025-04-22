'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { RegisterResponseBody } from '../api/register/route';
import { getSafeReturnToPath } from '../../../util/validation';

type Props = { returnTo?: string | string[] };

export default function RegisterForm(props: Props) {
  const [username, setUsername] = useState('bruce');
  const [email, setEmail] = useState('irabruce20@gmail.com');
  const [password, setPassword] = useState('123456');
  const [errors, setErrors] = useState<{ message: string }[]>();

  const router = useRouter();

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('response', username);

    const data: RegisterResponseBody = await response.json();
    console.log('data', data);

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
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Username</label>
          <input
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded"
        >
          Register
        </button>

        {errors?.map((error) => (
          <div key={`error-${error.message}`} className="text-red-600 text-sm">
            {error.message}
          </div>
        ))}
      </form>
    </div>
  );
}
