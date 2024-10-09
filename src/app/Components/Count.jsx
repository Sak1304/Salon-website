import React from 'react'

const Count = () => {
  return (
    <div className="bg-[#f8f5eb] py-10 px-5">
  <div className="container mx-auto flex justify-around items-center">
    {/* First Item */}
    <div className="text-center">
      <div className="flex gap-10">
        <h2 className="text-6xl font-bold text-black">2000+</h2>
        <img src="/assets/scissor.png" alt="Scissors" className="mx-auto my-2 w-16 h-16" />
      </div>
      <p className="text-lg font-medium text-gray-600">HAPPY CLIENTS</p>
    </div>
    
    {/* Second Item */}
    <div className="text-center">
      <div className="flex gap-14">
        <h2 className="text-6xl font-bold text-black">500</h2>
        <img src="/assets/scissor.png" alt="Scissors" className="mx-auto my-2 w-16 h-16" />
      </div>
      <p className="text-lg font-medium text-gray-600">HAIR CUTS</p>
    </div>
    
    {/* Third Item */}
    <div className="text-center mx-3">
    <div className="flex gap-14 bottom-8">
        <h2 className="text-6xl font-bold text-black">150</h2>
        <img src="/assets/scissor.png" alt="Scissors" className="mx-auto my-2 w-16 h-16" />
      </div>
      <p className="text-lg font-medium text-gray-600">STYLERS</p>
    </div>

    {/* Fourth Item */}
    <div className="text-center">
    <div className="flex gap-10">
        <h2 className="text-6xl font-bold text-black">35</h2>
        <img src="/assets/scissor.png" alt="Scissors" className="mx-auto my-2 w-16 h-16 hidden" />
      </div>
      <p className="text-lg font-medium mt-5 text-gray-600">BRANCHES</p>
    </div>
  </div>
</div>
  )
}

export default Count