function Contact() {
  return (
    <div
      id="services"
      className="md:flex md:justify-between items-center md:gap-5 lg:px-24 xl:px-32 min-[1400px]:px-36 2xl:px-40 min-[1747px]:px-56 md:px-20"
    >
      <div className="py-8 sm:w-[50vw] w-[70vw] mx-auto md:mx-0 min-[1600px]:py-12">
        <h1 className="font-bold leading-12 text-5xl">Contact Us</h1>
        <p className="font-normal leading-6 text-[16px] py-6">
          For inquires, please contact us through any of the following channels:
        </p>
        <div className="py-5 flex flex-col space-y-6">
          <div className="flex items-center gap-2.5">
            <img src="/assets/phone.svg" alt="" className="w-[48px]" />
            <div className="leading-7">
              <p className="font-bold text-[20px]">Phone Number</p>
              <p>+234 9033147109</p>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <img src="/assets/whatsapp.svg" alt="" className="w-[48px]" />
            <div className="leading-7">
              <p className="font-bold text-[20px]">Phone Number</p>
              <a className="border-b cursor-pointer">Chat with us</a>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <img src="/assets/message.svg" alt="" className="w-[48px]" />
            <div className="leading-7">
              <p className="font-bold text-[20px]">Phone Number</p>
              <p>info@cedarandmyrrhlimited.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[80vw] min-[1600px]:h-[500px] md:w-[45vw] mx-auto md:mx-0 min-[1600px]:py-12 py-10">
        <img
          src="/assets/customerservice.webp"
          className=" rounded-3xl w-full"
          alt=""
        />
      </div>
    </div>
  );
}

export default Contact;
