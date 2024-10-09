import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen bg-black">
    <div className="flex h-screen">
    <div className="w-[60%] h-full relative">
 
        <img className="w-full h-full object-cover" src="/assets/chair.png" alt="Chair" />
        <div className="absolute inset-0 bg-zinc-900 opacity-50"></div>
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute top-[25%] left-[10%]">
                <h1 className="text-[#D9A536] text-4xl mb-4">Contact</h1>
                <h1 className="font-semibold text-white text-6xl whitespace-nowrap mb-2">Get In Touch</h1>
                <img src="/assets/moustache.png" alt="Moustache" />
                <p className="w-[90%] text-white text-lg mt-3">Suspendisse pretium felis dolor, sed placerat diam blandit vitae. Sed eu nisl massa. Phasellus vehicula tristique orci ut ultrices. Duis eu libero augue. In vulputate sodales tempus. Phasellus dolor orci, consectetur in tincidunt eget, consectetur non orci. </p>
            </div>
        </div>
    </div>
      <div className="w-[40%] h-full relative">
  
        <div className="bg-zinc-700 h-full z-10"></div>
        <img src="/assets/map.png" className="absolute inset-0 w-full h-full object-cover z-20" alt="Map" />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-30 p-3">
        <h1 className="text-[#D9A536] text-4xl font-semibold mb-8">Make An Appointment</h1>   
        <p className="text-gray-300 text-center text-xl mb-6">
          Barber Is A Person Whose Occupation Is Mainly To Cut Dress Groom
        </p>


    <form className="w-full max-w-md">
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="Name" className="p-2  text-white border bg-zinc-700 bg-opacity-0 rounded" />
        <input type="email" placeholder="Email" className="p-2  text-white border bg-zinc-700 bg-opacity-0 rounded" />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <input type="text" placeholder="Phone" className="p-2  text-white border bg-zinc-700 bg-opacity-0 rounded" />
        <input type="time" className="p-2  text-white border bg-zinc-700 bg-opacity-0 rounded" />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-6">
      <select placeholder="Services" className="p-2 text-white border bg-zinc-700 rounded">
        <option >
        Services
         </option>
            <option>Hair and Cut</option>
                <option>Shaving</option>
                <option>Hair Color</option>
                <option>Beard Trim</option>
    </select>
        <select className="p-2  text-white border bg-zinc-700 bg-opacity-0 rounded">
          <option>Choose Barber</option>
        </select>
      </div>

      <button className="w-full bg-[#D9A536] bg-opacity-80 text-white font-bold py-2 rounded">
        MAKE AN APPOINTMENT
      </button>
    </form>
  </div>
</div>
    </div>
  </div>
  )
}

export default Contact