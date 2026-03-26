function Services() {
  return (
    <div className="relative bg-[url('/assets/interior2.webp')] bg-cover bg-center bg-no-repeat py-7 md:py-[55px] ">
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="items-center relative z-50">
        <h1 className="leading-12 text-[rgb(255,255,255)] text-5xl font-bold py-9 w-[80vw] min-[1513px]:py-20 mx-auto text-center">
          we offer{" "}
          <span className="bg-gradient-to-r from-[#2B5CE6] to-[#1E3A8A] bg-clip-text text-transparent">
            curated
          </span>{" "}
          selection of{" "}
          <span className="bg-gradient-to-r from-[#2B5CE6] to-[#1E3A8A] bg-clip-text text-transparent">
            luxury
          </span>{" "}
          experiences
        </h1>
        <p className="text-[rgb(255,255,255)] max-w-[55vw] mx-auto text-center font-normal leading-7 pb-16 text-xl min-[1275px]:max-w-[50vw] min-[1403px]:max-w-[45vw] min-[1559px]:max-w-[40vw] min-[1753px]:max-w-[35vw]">
          we give not only value but{" "}
          <span className="font-bold ">quality, elegance</span> and{" "}
          <span className="font-bold">thoughtful curation</span> regardless of
          status
        </p>
      </div>
    </div>
  );
}

export default Services;
