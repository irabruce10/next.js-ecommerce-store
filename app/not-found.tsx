import Link from 'next/link';
import React from 'react';

export default function RootNotFound() {
  return (
    <div>
      <h1>
        Sorry this page was not found make sure you visit a page that exists
      </h1>

      <Link href="/">Return Home</Link>
    </div>
  );
}
