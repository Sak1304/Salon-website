const Hero = () => {
  return (
    <div className="w-full h-screen bg-[url('/assets/hero.png')] bg-cover bg-center ">
      <div className="top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center px-4 relative">
        <h1 className="text-white text-[5vw] sm:text-[6vw] lg:text-nowrap md:text-[5vw] text-wrap lg:text-6xl font-semibold leading-tight">
          Our Hairstyle Enhances Your Style !!
        </h1>
        <p className="text-white text-[3vw] sm:text-[4vw] md:text-[2.5vw] lg:text-[27px] leading-none mt-4">
          Our barbershop is the territory created purely for males who <br />
          appreciate premium quality, time, and a flawless look.
        </p>
      </div>
      <button className="absolute top-[65%] left-[50%] -translate-x-1/2 -translate-y-1/2 mt-1 bg-[#CCA34C] px-5 py-2 sm:px-12 sm:py-4 md:px-16 md:py-5 capitalize text-white text-[3vw] sm:text-[3vw] md:text-lg">
        Make An Appointment
      </button>
    </div>
  );
};

export default Hero;
//text-white text-6xl text-nowrap font-semibold