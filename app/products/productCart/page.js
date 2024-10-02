import Link from 'next/link';

function cartPage() {
  return (
    <div>
      Cart
      <Link href="/products">Go back to products</Link>
    </div>
  );
}

export default cartPage;
