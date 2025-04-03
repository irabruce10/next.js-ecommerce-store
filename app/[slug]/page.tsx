import ProductImages from '../components/ProductImages';

function page() {
  return (
    <div className=" px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Image  */}
      <div className=" w-full  lg:w-1/2 lg:sticky top-20 h-max ">
        <ProductImages />
      </div>
      {/* text */}
      <div className=" w-full lg:w-1/2 flex flex-col gap-6"></div>
    </div>
  );
}

export default page;
