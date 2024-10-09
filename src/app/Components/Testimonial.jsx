import React from 'react'
import Testcard from './Testcard'

const Testimonial = () => {
  return (
    <div className="bg-[url('/assets/testbg.png')] w-full h-screen bg-cover bg-center">
        <div className="w-full h-full bg-zinc-950 bg-opacity-50">
            <div className="h-[30%] relative  ">
                <div className="absolute mt-5 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                    <h1 className="text-[#D9A536] text-3xl  mx-[38%] ">TESTIMONIALS</h1>
                    <h1 className="mx-[5%] font-semibold text-white text-5xl mt-3 text-nowrap">Hear From Our Customers</h1>
                    <img className="mx-[20%]" src="/assets/moustache.png"></img>
                </div>
            </div>
            <div className="h-[70%] p-10">
                <div className="flex gap-10 justify-center">
                    <Testcard image={'/assets/testimg1.png'} desc="“Just came back to home and should say that it is definitely a great experience. I would recommend it for everyone who needs a bike for a short term or want to t...”" name="Robert Fox" position="Writer"/>
                    <Testcard image={'/assets/testimg2.png'} desc="“Amazing service! Claire helped me to reduce the shipping price a little and shipped it immediately after purchasing. The amethyst cave I got is a beauty and I c...”" name="Marvin Mckinney" position="Businessman"/>
          
                 </div>   
            </div>
        </div>
   </div> 
  )
}

export default Testimonial