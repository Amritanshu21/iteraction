import React from 'react'

function About() {
  return (
    <div className='w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className="font-['Neue Montreal'] text-[3vw] leading-[3.2vw] tracking-tight ">Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
        <div className=' flex gap-5 w-full border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
        <div className='w-1/2'>
            <h1 className='text-6xl'>Our approach:</h1>
            <button className='flex gap-10 items-center px-8 mt-8 py-4 bg-zinc-900 rounded-full text-white'>Read More
            <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
            </button>
            </div>
          <div className='w-1/2 h-[70vh] rounded-3xl '>
            <img className='object-center h-[70vh] rounded-3xl object-cover' src='https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg'></img>
          </div>
        </div>
       
    </div>
  )
}

export default About