import Add from '../components/Add';
import CustomizeProduct from '../components/CustomizeProduct';
import ProductImages from '../components/ProductImages';

function page() {
  return (
    <div className=" text-left px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Image  */}
      <div className=" w-full  lg:w-1/2 lg:sticky top-20 h-max ">
        <ProductImages />
      </div>
      {/* text */}
      <div className=" w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className=" text-4xl font-medium ">Product Name</h1>
        <p className=" text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fuga,
          cum ex quidem hic dignissimos tempore. Fuga velit, impedit modi ipsum
          autem ut voluptatum voluptatibus explicabo quam quasi eum corporis.
        </p>
        <div className=" h-[2px] bg-gray-100" />
        <div className=" flex items-center gap-4">
          <h3 className=" text-xl text-gray-500 line-through">€59</h3>
          <h2 className=" font-medium text-2xl">€49</h2>
        </div>
        <div className=" h-[2px] bg-gray-100" />

        <CustomizeProduct />
        <Add />

        <div className=" h-[2px] bg-gray-100" />
        <div className=" text-sm  ">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            tempore corporis expedita quas laborum voluptatem natus incidunt
            quisquam sint obcaecati illum est minus voluptatibus quasi molestias
            reprehenderit error saepe consectetur!
          </p>
        </div>

        <div className=" text-sm  ">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            tempore corporis expedita quas laborum voluptatem natus incidunt
            quisquam sint obcaecati illum est minus voluptatibus quasi molestias
            reprehenderit error saepe consectetur!
          </p>
        </div>

        <div className=" text-sm  ">
          <h4 className="mb-4 font-medium">Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            tempore corporis expedita quas laborum voluptatem natus incidunt
            quisquam sint obcaecati illum est minus voluptatibus quasi molestias
            reprehenderit error saepe consectetur!
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
