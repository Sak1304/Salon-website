import React from 'react'

const Testcard = ({image,desc,name,position}) => {
  return (
    <div className="h-[350px] w-[550px] bg-[#252424] rounded-md shadow-transparent px-3 py-7 relative">
        <div className="flex items-center justify-between gap-11 ">
            <img className="w-32" src={image}></img>
            <p className="text-white font-semibold text-xl">{desc}</p>
        </div>
        <div className="relative">
            <div className="absolute left-[32%] top-10">
                <h1 className="text-white font-semibold text-3xl">{name}</h1>
                <h1 className="text-white  text-sm mt-3">{position}</h1>
                <div className="flex mt-3">
                    <img src="/assets/star.png"/>
                    <img src="/assets/star.png"/>
                    <img src="/assets/star.png"/>
                    <img src="/assets/star.png"/>
                    <img src="/assets/whitestar.png"/>
            </div>
            </div>
        </div>
        <img src="/assets/quote.png" className="absolute bottom-3 right-3"></img>
    </div>
  )
}

export default Testcard