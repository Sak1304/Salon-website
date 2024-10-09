import React from 'react'
import Barber from './Barber'

const Specialist = () => {
  return (
    <div id="team" className="w-full h-screen bg-white ">
       <div className="h-[30%] relative  ">
        <div className="absolute mt-5 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
            <h1 className="text-[#D9A536] text-3xl  mx-[30%] ">SPECIALISTS</h1>
            <h1 className="mx-[23%] font-semibold text-[#4A4845] text-5xl text-nowrap">Our Team</h1>
            <img src="/assets/moustache.png"></img>
        </div>
       </div>
       <div className="h-[70%]">
         <div className="flex gap-20 justify-center">
           <Barber  image={'/assets/Barber1.png'} title="DAVID" desc="Hair Cut Specialist"/>
           <Barber image={'/assets/Barber2.png'} title="PAUL" desc="Beard & Trimming" />
           <Barber image={'/assets/Barber3.png'} title="CHARLIE" desc="Hair Color Specialist"/>
          
         </div>        
        </div> 
    </div>
  )
}

export default Specialist