import React from 'react'

const Pricingplan = () => {
  return (
    <div className="w-full h-[800px] bg-[#FDF8E9]">
         <div className="h-[30%] relative ">
        <div className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
            <h1 className="mx-[5%] font-semibold text-[#4A4845] text-5xl text-nowrap">BarberShop Pricing Plan</h1>
            <img className="mx-[15%] mt-4" src="/assets/moustache.png"></img>
        </div>
       </div>
       <div className="h-[70%] relative">
         <div className="flex  justify-center">
            <div className="flex gap-96">
                <div className="">
                    <div className="mb-10">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-semibold">Hair Cut</h1>
                            <h1 className="text-[#D9A536]">------------------</h1>
                            <h1 className="text-[#D9A536] text-4xl">$10</h1>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit<br/> aliqua dolor do amet sint.</p>
                    </div>
                    <div className="mb-10">
                        <div className=" flex items-center justify-between">
                            <h1 className="text-2xl font-semibold">Hair Styling</h1>
                            <h1 className="text-[#D9A536]">------------------</h1>
                            <h1 className="text-[#D9A536] text-4xl">$25</h1>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit<br/> aliqua dolor do amet sint.</p>
                    </div>
                    <div className="mb-10">
                    <div className=" flex items-center justify-between">
                            <h1 className="text-2xl font-semibold">Hair Trimming</h1>
                            <h1 className="text-[#D9A536]">------------------</h1>
                            <h1 className="text-[#D9A536] text-4xl">$30</h1>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit <br/>aliqua dolor do amet sint.</p>
                    </div>
                    <div >
                    <div className=" flex items-center justify-between">
                            <h1 className="text-2xl font-semibold">Kids Hair Cut</h1>
                            <h1 className="text-[#D9A536]">------------------</h1>
                            <h1 className="text-[#D9A536] text-4xl">$15</h1>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit <br/>aliqua dolor do amet sint.</p>
                    </div>
                    
                </div>
                <div className="">
                    <div className="mb-10">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-semibold">Shaving</h1>
                            <h1 className="text-[#D9A536]">------------------</h1>
                            <h1 className="text-[#D9A536] text-4xl">$40</h1>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit<br/> aliqua dolor do amet sint.</p>
                    </div>
                    <div className="mb-10">
                        <div className=" flex items-center justify-between">
                            <h1 className="text-2xl font-semibold">Beard Trimming</h1>
                            <h1 className="text-[#D9A536]">------------------</h1>
                            <h1 className="text-[#D9A536] text-4xl">$25</h1>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit<br/> aliqua dolor do amet sint.</p>
                    </div>
                    <div className="mb-10">
                    <div className=" flex items-center justify-between">
                            <h1 className="text-2xl font-semibold">Face Cleaning</h1>
                            <h1 className="text-[#D9A536]">------------------</h1>
                            <h1 className="text-[#D9A536] text-4xl">$60</h1>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit <br/>aliqua dolor do amet sint.</p>
                    </div>
                    <div >
                    <div className=" flex items-center justify-between">
                            <h1 className="text-2xl font-semibold">Moustache Trim</h1>
                            <h1 className="text-[#D9A536]">------------------</h1>
                            <h1 className="text-[#D9A536] text-4xl">$12</h1>
                        </div>
                        <p>Amet minim mollit non deserunt ullamco est sit <br/>aliqua dolor do amet sint.</p>
                    </div>
                    
                </div>
                
                
            </div>
         </div> 
         <button className="bg-[#D9A536] text-white py-2 px-3 rounded-lg absolute bottom-5 left-[48%] ">View More</button>       
        </div> 
    </div>
  )
}

export default Pricingplan