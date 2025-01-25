import Image from '../node_modules/next/image';
import bg1 from '../public/images/bg1.jpg';

export default function Home() {
  return (
    <div className="homePage">
      <h1 className="title">Welcome to our E-soko yacu difsdofds] [fvsd</h1>
      <Image className="img" src={bg1} quality={80} alt="E-soko" />
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec velit
        nunc. Sed non enim neque. Aliquam et urna vel velit tincidunt gravida.
        Nulla facilisi.
      </p>
    </div>
  );
}
