function navbar() {
  return (
    <nav className="px-5 py-7">
      <div className="flex justify-between items-center gap-6">
        <div className="w-[170px] md:w-[250px]">
          <img src="/assets/websitelogo.svg" alt="" />
        </div>
        <a
          href="/"
          className=" py-4 px-3 bg-[#1E2D6B] text-[#ffffff] uppercase font-[400px] leading-[20px] rounded-xl"
        >
          contact us
        </a>
      </div>
    </nav>
  );
}

export default navbar;
