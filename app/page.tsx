import Image from '../node_modules/next/image';
import bg1 from '../public/images/bg1.jpg';

export default function Home() {
  return (
    <div className="homePage">
      <h1 className="title">Welcome to our E-soko yacu</h1>
      <Image className="img" src={bg1} quality={80} alt="E-soko" />
    </div>
  );
}
