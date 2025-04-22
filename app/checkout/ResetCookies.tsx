'use client';

import { useRouter } from 'next/navigation';
import { removeAllCookies } from '../cart/action';

export default function ResetCookies({ item }: { item: number }) {
  const router = useRouter();

  const handleClick = async () => {
    await removeAllCookies(item);
    router.push('/success');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      data-test-id="checkout-confirm-order"
      className="w-full px-4 py-3 rounded-lg text-base sm:text-lg md:text-xl font-medium text-white bg-[#F35C7A] hover:bg-[#e3546f] focus:ring-2 focus:ring-[#F35C7A] transition"
    >
      Confirm Order
    </button>
  );
}
