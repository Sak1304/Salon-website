import React from 'react'

const Cards = ({image,title}) => {
  return (
    <div className="w-64 h-[380px] bg-white relative rounded-md">
        <div className="h-[40%]  relative">
            <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
            <img className="h-20 mb-2" src={image}></img>
            <h1 className="text-xl font-semibold">{title}</h1>
            </div>
        </div>
        <div className="h-[60%] relative">
            <p className="text-sm leading-none text-center mx-2 my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing. Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.</p>
            <button className="absolute left-[28%] px-3 py-2 rounded-lg border-4 text-[#D9A536] border-[#D9A536]">READ MORE</button>
        </div>
        
    </div>
  )
}

export default Cards