function Automobile() {
  return (
    <div className="">
      <h1 className="font-normal leading-7 text-[20px] text-center mx-auto md:max-w-[50vw] lg:max-w-[40vw] 2xl:max-w-[35vw] sm:max-w-[30w] ">
        Our products and services are thoughtfully curated to meet the refined
        tastes of our elite clientele.
      </h1>
      <div className="flex justify-center items-center">
        <div className="sm:max-w-[60%] md:max-w-[95%] max-w-[90%] mx-auto md:grid md:grid-cols-2 md:mx-0 md:gap-5 md:w-full md:justify-between items-center lg:max-w-[75%] xl:max-w-[65%] 2xl:max-w-[55%]">
          <div className=" text-[18px] py-10 md:py-24 space-y-3">
            <div className="flex flex-1 items-center gap-2.5 ">
              <div className="h-[20px] w-[20px] rounded-full bg-[rgb(4,11,113)]"></div>
              <p>Acquisition of luxury vehicles</p>
            </div>
            <div className="flex flex-1 items-center gap-2.5 ">
              <div className="h-[20px] w-[20px] rounded-full bg-[rgb(4,11,113)]"></div>
              <p>Sourcing of special or custom vehicles</p>
            </div>
            <div className="flex-1 flex items-center gap-2.5">
              <div className="h-[20px] w-[20px] rounded-full bg-[rgb(4,11,113)]"></div>
              <p>Fleet procurement and management</p>
            </div>
          </div>
          <div className="h-[210px]">
            <img
              className="rounded-3xl pt-2.5 h-full"
              src="/assets/car1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Automobile;
