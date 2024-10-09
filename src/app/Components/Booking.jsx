import React from 'react'

const Booking = () => {
  return (
    <div id="booking" className="w-full h-screen bg-[url('/assets/booking.png')] bg-cover bg-center">
        <div className="flex flex-col items-center justify-evenly h-full">
            <h1 className="text-[#D9A536] text-3xl">BEST BARBERSHOP IN THE CITY</h1>
            <h1 className="text-white text-center text-6xl font-semibold">Making You Look Good<br/> Is In Our Heritage.</h1>

            <p className="text-3xl text-center text-white">Barber is a person whose occupation is mainly to cut dress groome style <br/>
            and shave men&apos;s and boy&apos;s hair</p>

            <button className="px-3 py-3 bg-[#D9A536] text-white">MAKE AN APPOINTMENT</button>
        </div>
    </div>
  )
}

export default Booking