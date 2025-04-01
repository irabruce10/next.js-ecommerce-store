'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function SearchBar() {
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;

    if (name) {
      router.push(`/list?name=${name}`);
    }
    e.currentTarget.reset();
  };
  return (
    <form
      className=" flex ic justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1 "
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search products..."
        className=" flex-1 bg-transparent outline-none  "
      />
      <button type="submit" className=" cursor-pointer">
        <Image src="/search.png" alt="search logo" width={16} height={16} />
      </button>
    </form>
  );
}
