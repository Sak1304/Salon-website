import Link from 'next/link'
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastscrollY, setLastscrollY] = useState(0);

  const controlNavBar = ()=>{
    if(typeof window!=="undefined"){
      if(window.scrollY > lastscrollY){
        setShowNavbar(false)
      }
      else{
        setShowNavbar(true)
      }
      setLastscrollY(window.scrollY)
    }
  };

  useEffect(() =>{
    if(typeof window!=="undefined"){
      window.addEventListener("scroll",controlNavBar);
    }
    return ()=>{
      window.removeEventListener("scroll",controlNavBar)
    }
  });
  return (
    <header className={`fixed w-full h-20 bg-zinc-900 bg-opacity-50 z-10 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="w-full h-1/2  flex justify-between items-center ">
          <div className="flex mx-12 text-sm text-white ">
            <img src="/assets/telephone.png"></img>
            <p>+123456789</p>
            <img  src="/assets/mail.png"></img>
            <p>barberz.123@info.com</p>
          </div>
          <div className="flex mx-12 gap-8 ">
            <img src="/assets/facebook.png"></img>
            <img src="/assets/twitter.png"></img>
            <img src="/assets/website.png"></img>
            <img src="/assets/youtube.png"></img>
          </div>
        </div>
        <div className="w-full h-1/2  flex justify-around items-center px-28 text-xl">
          <Link href="/" className="text-white">Home</Link>
          <Link href="#services" className="text-white">Services</Link>
          <Link href="#about-us" className="text-white">About Us</Link>
          <img src="/assets/overlay.png"></img>
          <Link href="#team" className="text-white">Team</Link>
          <Link href="#booking" className="text-white">Booking</Link>
          <Link href="#contact" className="text-white">Contact Us</Link>
        </div>
        <div>
          
        </div>
    </header>
  )
}

export default Navbar