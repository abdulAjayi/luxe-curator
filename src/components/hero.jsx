function Hero() {
  return (
    <div className="text-center ">
      <div className="leading-12 py-10">
        <h1 className="uppercase text-5xl font-light md:text-6xl md:leading-[60px]">
          elevate <span className="text-[#1E2D6B] font-medium">everyday</span>
        </h1>
        <p className="text-3xl font-light">with</p>
        <h1 className="uppercase text-5xl font-light md:text-6xl md:leading-[60px]">
          timeless <span className="text-[#1E2D6B] font-medium">luxury</span>
        </h1>
      </div>
      <div className="flex justify-center">
        <p className="leading-[28px] font-medium text-[20px] text-center max-w-[90vw] lg:max-w-[83vw] xl:max-w-[75vw] 2xl:max-w-[65vw]">
          We are a{" "}
          <span className="font-bold text-[20px] leading-7 text-[#1E2D6B]">
            premium lifestyle brand dedicated
          </span>{" "}
          to delivering luxury goods and services with exceptional quality and
          value. Our offerings are thoughtfully curated to meet the refined
          tastes of our elite clientele.
        </p>
      </div>
    </div>
  );
}

export default Hero;
