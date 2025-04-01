'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import CartModal from './CartModal';
export default function NavIcons() {
  const isLoggedIn = false;
  const [isProfile, setIsProfile] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const router = useRouter();

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push('/login');
    }
    setIsProfile((prev) => !prev);
  };

  return (
    <div className="flex gap-4 items-center xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt="profile "
        width={22}
        height={22}
        onClick={handleProfile}
      />
      {isProfile && (
        <div className="absolute p-4 top-12 left-0 text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20 ">
          <Link href="/">Profile</Link>
          <div className=" mt-2 cursor-pointer">Logout</div>
        </div>
      )}
      <Image src="/notification.png" alt="not" width={22} height={22} />
      <Image
        src="/cart.png"
        alt="cart"
        width={22}
        height={22}
        onClick={() => setIsCart((prev) => !prev)}
      />

      {isCart && (
        <div className="">
          <CartModal />
        </div>
      )}
    </div>
  );
}
