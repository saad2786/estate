import React from "react";

export default function Offer() {
  return (
    <section
      id="offer"
      className="h-screen max-md:h-[80vh] flex flex-col items-center  backdrop-blur-[3px] max-md:bg-transparent bg-no-repeat bg-cover max-md:justify-start justify-center gap-10 max-md:gap-2 md:flex-row bg-slate-100 max-md:py-2 py-12 "
    >
      <div className="w-1/3 max-md:w-full max-md:h-[40%] max-md:pt-20 max-md:text-center max-md:px-2 space-y-2 ">
        <p className="text-sm">Offers and Discounts</p>
        <p className="text-3xl uppercase font-extrabold">Lorem ipsum dolor sit amet.</p>
        <p className="text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ipsam,
          iste sunt veniam molestiae amet laboriosam quam quos, qui enim velit
          dicta praesentium soluta commodi consequuntur esse vero accusantium
          quaerat!
        </p>
      </div>
      <div className="w-[400px] ml-10 max-md:m-auto max-md:h-[60%]">
        <div className="grid grid-cols-4 grid-rows-4 gap-0">
          <div className="p-5 flex items-center justify-center gap-1 flex-col col-span-2 row-span-2 border-b border-black">
            <p className="p-2 border-4 rounded-full text-center font-bold text-lg border-red-400 flex items-center
             justify-center w-20 h-20 "> &#8377;12L</p>
            <p className="text-center text-xs">Lorem ipsum dolor sit.</p>
          </div>
          <div className="p-5 flex items-center justify-center gap-1 flex-col col-span-2 row-span-2 col-start-3  border-l border-b border-black">
          <p className="p-2 border-4 rounded-full text-center font-bold text-lg border-red-400 flex items-center
             justify-center w-20 h-20 "> &#8377;12L</p>
            <p className="text-center text-xs">Lorem ipsum dolor sit.</p>
          </div>
          <div className="p-5 flex items-center justify-center gap-1 flex-col col-span-2 row-span-2 row-start-3  border-black">
          <p className="p-2 border-4 rounded-full text-center font-bold text-lg border-red-400 flex items-center
             justify-center w-20 h-20 "> &#8377;12L</p>
            <p className="text-center text-xs">Lorem ipsum dolor sit.</p>
          </div>
          <div className="p-5 flex items-center justify-center gap-1 flex-col col-span-2 row-span-2 col-start-3 row-start-3  border-l  border-black">
          <p className="p-2 border-4 rounded-full text-center font-bold text-lg border-red-400 flex items-center
             justify-center w-20 h-20 "> &#8377;12L</p>
            <p className="text-center text-xs">Lorem ipsum dolor sit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
