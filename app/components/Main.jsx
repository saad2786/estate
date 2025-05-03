import { Boxes } from "./BackgrounBox";
import Form from "./Form";

export default function Main() {
  return (
    <section
      id="home"
      className="h-[100vh] relative w-full overflow-hidden max-md:pt-10  bg-slate-200 md:flex  items-center justify-center "
    >
      {/* <div className="absolute inset-0 w-full h-full  bg-slate-700 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" /> */}

      <Boxes />
      
      <div className=" flex-1/3 ml-5 max-md:m-auto max-md:w-4/5  w-fit px-5 py-4 backdrop-blur-[2px] bg-transparent rounded-2xl md:flex text-center md:text-left text-gray-800 flex-col justify-center items-start   z-50">
        <p className="text-2xl font-bold">Lorem ipsum dolor sit amet.</p>
        <p className="text-sm font-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus excepturi cum ratione dolores, dolorem inventore autem.
          Temporibus corporis earum ratione?
        </p>
      </div>
      <div className=" flex-1/2 max-md:w-full pt-10 z-20 ">
      
        <Form />
      </div>
    </section>
  );
}
