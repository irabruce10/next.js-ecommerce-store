'use server';
import { cookies } from 'next/headers';

// Get a cookie value
export async function getCookie(name) {
  const cookie = (await cookies()).get(name);
  if (!cookie) {
    return undefined;
  }
  // console.log('cookieType', Array.isArray(JSON.parse(cookie.value)));
  // console.log('sookievalue', cookie.value);
  return cookie.value;
}

// Set a cookie value
export default async function setCookie(name, value) {
  return (await cookies()).set(name, JSON.stringify(value), { expires: 7 });
}
