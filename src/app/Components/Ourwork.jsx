import React from 'react';

const Ourwork = () => {
  const images = [
    "/assets/photo1.png", 
    "/assets/photo2.png",
    "/assets/collage2.png",
    "/assets/photo4.png",
    "/assets/photo5.png",
    "/assets/photo6.png",
  ];

  return (
    <div className="container px-5 my-10">
      <h2 className="text-3xl text-center font-semibold mb-5">Our Work</h2>
      <img className="ml-[35%]" src="/assets/moustache.png"></img>
      <div className="grid grid-cols-3 gap-2">
        {images.map((image, index) => (
          <div key={index} className="relative transform scale-75">
            <img
              src={image}
              alt={`Barbershop image ${index + 1}`}
              className="w-full h-auto object-cover"
            />
            {index === 0 && (
              <div className="absolute inset-0 border-4 border-[#D9A536]"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ourwork;