'use client';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useState } from 'react';

enum MODE {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  RESET_PASSWORD = 'RESET_PASSWORD',
  EMAIL_VERIFICATION = 'EMAIL_VERIFICATION',
}

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailCode, setEmailCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center">
      <form className="flex flex-col gap-8">
        <h1 className="text-2xl font-semibold">Login</h1>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            placeholder="john"
            className="ring-2 ring-gray-300 rounded-md p-4"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="john@gmail.com"
            className="ring-2 ring-gray-300 rounded-md p-4"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/*
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Verification Code</label>
          <input
            type="text"
            name="emailCode"
            placeholder="Code"
            className="ring-2 ring-gray-300 rounded-md p-4"
            onChange={(e) => setEmailCode(e.target.value)}
          />
        </div> */}

        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="ring-2 ring-gray-300 rounded-md p-4"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* <div className="text-sm underline cursor-pointer">Forgot Password?</div> */}

        <button
          className="bg-lama text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed"
          disabled={isLoading}
        ></button>

        <div className="text-sm underline cursor-pointer">
          {"Don't"} have an account?
        </div>

        <div className="text-sm underline cursor-pointer">
          Have and account?
        </div>

        {/* <div className="text-sm underline cursor-pointer">Go back to Login</div> */}

        {message && <div className="text-green-600 text-sm">{message}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
