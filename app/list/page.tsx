import Image from 'next/image';

export default function page() {
  return (
    <div className=" px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* campaign*/}
      <div className="">
        <div className=""></div>
        <div className="relative">
          <Image src="/woman.png" fill alt="" className=" object-contain" />
        </div>
      </div>
    </div>
  );
}
