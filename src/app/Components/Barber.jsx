import React from 'react';

const Barber = ({ image, title, desc}) => {
  return (
    <div
      className="w-64 h-[380px] bg-cover bg-center relative rounded-md"
      style={{ backgroundImage: `url(${image})` }} 
    >
      <div className="absolute bottom-0 bg-[#D9A536] w-full py-3 text-center">
        <h1 className="text-white font-semibold text-3xl">{title}</h1>
        <p className="text-white text-lg">{desc}</p>
      </div>
    </div>
  );
}

export default Barber;