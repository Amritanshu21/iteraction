import { motion } from 'framer-motion';
import React from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";

function Landinpage() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-2'>
         <div className='textstructure mt-32 px-20'>
            {/* <div className='mask'>
                <h1 className="uppercase leading-[5vw] tracking-tighter text-9xl font-['Founders Grotesk'] font-light">We Create</h1>
            </div>
            <div className='mask'>
                <h1 className="uppercase leading-[11vw] tracking-tighter text-9xl font-['Founders Grotesk'] font-light">Eye Opening</h1>
            </div>
            <div className='mask'>
                <h1 className="uppercase leading-[5vw] tracking-tighter text-9xl font-['Founders Grotesk'] font-light">Presentations</h1>
            </div> */}

            {/* we can also do */}
            {["We Create","Eye Opening","Presentations"].map((item,index)=>{
                return  (<div className='mask'>
               <div className='w-fit flex items-center '>
                {index===1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className='mr-[1vw] rounded-md w-[7.5vw] h-[5.5vw]  relative top-[0.4vw]'>
                  <motion.img  initial={{width:0}} animate={{width:"10vw"}} transition={{ease:[0.76,0,0.24,1],duration:1}} className='rounded-md bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                </motion.div>)}
               <h1 className="uppercase leading-[7vw] tracking-tighter text-[7.5vw] font-['Founders Grotesk'] font-md">{item}</h1>
               </div>
            </div>
                );
            })}
         </div>
         <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20'>
           {["For public and private companies","From the first pitch to ITO"].map((item,index) =>(
            <p className='text-md font-light tracking-tighter leading-none'>
                {item}
            </p>

           ))}
          <div className='start flex items-center gap-5'>
            <div className='px-5 py-2 border-[2px] border-zinc-800 rounded-full font-light text-md uppercase'>start the project</div>
            <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-800 rounded-full'>
            <span className='rotate-[45deg]'>
            <FaLongArrowAltUp />
            </span>
            </div>
          </div>
         </div>

    </div>
  );
}

export default Landinpage