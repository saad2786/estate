import React from "react";
import { IoMdBonfire } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { FaMoneyBill } from "react-icons/fa";
import { PiPlant } from "react-icons/pi";


export default function Facility() {
  return (
    <section id="facility" className="h-screen flex flex-col gap-2 bg-slate-300 py-12 ">
      <div className="flex h-1/2 flex-col items-center justify-center gap-8 max-md:px-1 px-28 ">
        <p className="text-3xl max-md:px-2 uppercase text-center  font-bold">Lorem ipsum dolor sit amet.</p>
        <div className="flex items-center max-md:flex-wrap  justify-center">
          <div className='flex items-center flex-col min-w-[200px] max-md:w-[200px] text-center text-xs font-normal max-md:px-2 border-r border-black px-10 '>
            <IoMdBonfire size={50} />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex items-center flex-col min-w-[200px] max-md:w-[200px] text-center text-xs font-normal max-md:px-2 md:border-r md:border-black px-10'>
            <IoHomeOutline size={50} />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex items-center flex-col min-w-[200px] max-md:w-[200px] text-center text-xs font-normal max-md:px-2 border-r border-black px-10'>
            <FaMoneyBill size={50} />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex items-center flex-col min-w-[200px] max-md:w-[200px] text-center text-xs font-normal max-md:px-2  px-10'>
            <PiPlant size={50} />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
      <div className="flex h-1/2 flex-col items-center justify-center gap-8 max-md:px-1 px-28 ">
        <p className="text-3xl max-md:px-2 uppercase text-center  font-bold">Lorem ipsum dolor sit amet.</p>
        <div className="flex items-center max-md:flex-wrap  justify-center">
          <div className='flex items-center flex-col min-w-[200px] max-md:w-[200px] text-center text-xs font-normal max-md:px-2 border-r border-black px-10 '>
            <IoMdBonfire size={50} />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex items-center flex-col min-w-[200px] max-md:w-[200px] text-center text-xs font-normal max-md:px-2 md:border-r md:border-black px-10'>
            <IoHomeOutline size={50} />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex items-center flex-col min-w-[200px] max-md:w-[200px] text-center text-xs font-normal max-md:px-2 border-r border-black px-10'>
            <FaMoneyBill size={50} />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex items-center flex-col min-w-[200px] max-md:w-[200px] text-center text-xs font-normal max-md:px-2  px-10'>
            <PiPlant size={50} />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
     
    </section>
  );
}
