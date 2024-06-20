import { motion, useAnimation } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from 'gsap';

function Featured() {
 const cards =[useAnimation(),useAnimation()];
 const handleHover=(index)=>{
  cards[index].start({y:"0"});
 };
 const handleHoverEnd=(index)=>{
  cards[index].start({y:"100%"});
 };
  return (
    <div className='w-full py-20'>
          <div className='w-full border-b-[1px] border-zinc-500 pb-20 px-10'>
              <h1 className="font-['Neue Montreal'] tracking-tighter text-7xl">Featured Projects.</h1>
            
          </div>
          <div className='px-20'>
          <div className="cards w-full flex  gap-10 mt-10">

                <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="cardcontainer relative w-1/2 h-[75vh]  "> 
                <h1 className='absolute flex overflow-hidden left-full -translate-x-[50%] top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] leading-none -pb-[10] tracking-tighter text-7xl'>
                {"FYDE".split('').map((item,index)=>
                <motion.span initial={{y:"100%"}} animate={cards[0]} transition={{ease:[0.22,1,0.36,1],delay:index*0.05}}  className='inline-block '>{item}</motion.span>
                )}
                </h1>
              
                <div className='w-full h-full rounded-xl overflow-hidden'>


                    <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png'></img>
                    </div> 
                 </motion.div>
                 <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="cardcontainer w-1/2 h-[75vh] relative  "> 
                 
                <div className='w-full h-full  rounded-xl overflow-hidden'>
                <h1 className='absolute flex overflow-hidden right-full translate-x-[50%] top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] leading-none -pb-[10] tracking-tighter text-7xl'>
                  {"VISE".split('').map((item,index)=>
                                    <motion.span initial={{y:"100%"}} animate={cards[1]} transition={{ease:[0.22,1,0.36,1],delay:index*0.05}}  className='inline-block '>{item}</motion.span>
                  )}
                </h1>
                    <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                    </div> 
                 </motion.div>
              </div>
          </div>
    </div>
  )
}

export default Featured