import React from 'react'
import Cards from './Cards'

const Services = () => {
  return (
    <div id="services" className="w-full h-screen bg-[#FDF8E9]">
       <div className="h-[30%] relative ">
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
            <h1 className="text-[#D9A536] text-3xl  mx-[35%] ">SERVICES</h1>
            <h1 className="mx-[14%] font-semibold text-[#4A4845] text-5xl text-nowrap">Our Services</h1>
            <img src="/assets/moustache.png"></img>
        </div>
       </div>
       <div className="h-[70%]">
         <div className="flex gap-8 justify-center">
            <Cards image={'/assets/scissor.png'} title="Hair Cut"/>
            <Cards image={'/assets/shaveing.png'} title="Shaving"/>
            <Cards image={'/assets/haircolor.png'} title="Hair Color"/>
            <Cards image={'/assets/trim.png'} title="Beard Trim"/>
         </div>        
        </div> 
    </div>
  )
}

export default Services