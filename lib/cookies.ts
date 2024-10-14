'use server';
import { cookies } from 'next/headers';

// Get a cookie value
export async function getCookie(name: string) {
  const cookie = (await cookies()).get(name);
  if (!cookie) {
    return undefined;
  }

  return cookie.value;
}

// Set a cookie value
export default async function setCookie(name: string, value: string) {
  return (await cookies()).set(name, JSON.stringify(value), { expires: 7 });
}
