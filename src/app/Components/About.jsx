

const About = () => {
  return (
    <div id="about-us" className=" w-full h-screen flex gap-4 flex-col lg:flex-row">
        <div className="lg:w-[60%] h-full w-full relative">
           <div className="absolute top-[24%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-2xl text-[#D9A536] text-center">INTRODUCING</h1>
            <p className="mt-2 text-4xl text-center text-nowrap font-semibold text-[#4A4845] leading-relaxed">BARBERZ..The Barbershop <br/> Since 1990</p>
            <img className="absolute mt-6 left-[35%] " src="/assets/barber.png"></img>
           </div>
           <div className="absolute top-[70%] left-[50%] -translate-x-1/2 -translate-y-1/2">
            <p className=" text-lg text-nowrap text-center leading-none">Barber is a person whose occupation is mainly to cut dress groom <br/> style and shave men&apos;s and boys&apos; hair. A barber &apos;s place of work is <br/> known as a &quot; barbershop &quot; or a &quot;barber&apos;s&quot;. Barbershops are also places <br/> of social interaction and public discourse. In some instances,<br/> barbershops are also public forums.</p>
           </div>
           <button className="absolute top-[85%] bg-[#D9A536] px-14 py-3 rounded-md mt-5 left-[50%] -translate-x-1/2 -translate-y-1/2">MORE ABOUT US</button>
        </div>
        <div className="w-[40%] h-full  relative">
            <img className="absolute top-[50px] right-[50px] w-60" src="/assets/collage1.png"></img>
            <img className="absolute top-[200px] right-[191px] w-64 h-72" src="/assets/collage2.png"></img>
            <img className="absolute top-[370px] right-[50px] w-52 h-40" src="/assets/collage3.png"></img>
        </div>
    </div>
  )
}

export default About