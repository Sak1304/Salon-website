import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#1c1c1c] text-white py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
    
        <div className="footer-logo text-center sm:text-left ">
         <div className="relative translate-y-10 translate-x-14 w-40">
            <img  src="/assets/logo.png" alt="Barberz" className="mx-auto sm:mx-0 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" />
            <img  src="/assets/overlay.png" alt="Barberz" className="mx-auto sm:mx-0 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" />
         </div>

          <p className="mt-32 text-xs text-center">
            There Are Many Variations Of Passages Of Lorem Ipsum Available, But The
            Majority Have Suffered Alteration In Some Form.
          </p>
          <div className=" flex flex-col gap-4 justify-center items-center mt-10">
            <input
              type="email"
              placeholder="Email*"
              className="px-4 py-2 bg-white text-black rounded-sm"
            />
            <button className="w-28  bg-[#CCA34C]   rounded-full border-2 border-white text-white">
              Subscribe
            </button>
          </div>
        </div>

    
        <div className="footer-links text-center ml-14 sm:text-left">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <img className="w-36" src="/assets/moustache.png"></img>
          <ul className="space-y-2">
            <li className="flex gap-8 p-1"><img className="w-4 rotate-90" src="/assets/scissor.png"></img> HOME</li>
            <li className="flex gap-8 p-1"><img className="w-4 rotate-90" src="/assets/scissor.png"></img> ABOUT US</li>
            <li className="flex gap-8 p-1"><img className="w-4 rotate-90" src="/assets/scissor.png"></img> GALLERY</li>
            <li className="flex gap-8 p-1"><img className="w-4 rotate-90" src="/assets/scissor.png"></img> CONTACT US</li>
          </ul>
        </div>

      
        <div className="footer-services text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <img className="w-36" src="/assets/moustache.png"></img>
          <ul className="space-y-2">
          <li className="flex gap-8 p-1"><img className="w-4 rotate-90" src="/assets/scissor.png"></img> HAIR</li>
            <li className="flex gap-8 p-1"><img className="w-4 rotate-90" src="/assets/scissor.png"></img> BEAUTY</li>
            <li className="flex gap-8 p-1"><img className="w-4 rotate-90" src="/assets/scissor.png"></img> SPA</li>
            <li className="flex gap-8 p-1"><img className="w-4 rotate-90" src="/assets/scissor.png"></img> MASSAGE</li>
          </ul>
        </div>

     
        <div className="footer-contact text-center sm:text-left">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <img className="w-36" src="/assets/moustache.png"></img>
          <ul className="space-y-2">
            <li className="flex gap-5 p-1"><img className="w-4 " src="/assets/call.png"></img> +4125987645</li>
            <li className="flex gap-5 p-1"><img className="w-5 " src="/assets/yellowmail.png"></img> barberz.123@info.com</li>
            <li className="flex gap-5 p-1"><img className="w-5 h-5" src="/assets/location.png"></img> Golden Street, Chinatown, San Francisco</li>
          </ul>
          <div className="mt-4 flex justify-center sm:justify-start space-x-4">
            <a href="#" className="bg-[#CCA34C] p-2 rounded"><img className="w-5 h-5" src="/assets/yfacebook.png"></img></a>
            <a href="#" className="bg-[#CCA34C] p-2 rounded"><img className="w-5 h-5" src="/assets/ytwitter.png"></img></a>
            <a href="#" className="bg-[#CCA34C] p-2 rounded"><img className="w-5 h-5" src="/assets/yyoutube.png"></img></a>
            <a href="#" className="bg-[#CCA34C] p-2 rounded"><img className="w-5 h-5" src="/assets/yinstagram.png"></img></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <p className="text-sm">Copyright© 2021 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
