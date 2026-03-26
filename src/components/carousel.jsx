function Carousel() {
  const images = [
    "/assets/car.webp",
    "/assets/car1.jpg",
    "/assets/house3.jpg",
    "/assets/interior2.webp",
  ];
  return (
    <div className="py-10 w-full overflow-hidden">
      <div className="flex gap-2 animate-carousel">
        {[...images, ...images].map((img, i) => {
          return (
            <img
              src={img}
              key={i}
              className=" rounded-3xl shrink-0 h-[260px] w-auto"
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
