import React from 'react'

function Cards() {
  return (
    <div className='w-full flex items-center px-32  gap-5 h-screen bg-zinc-100'>
      <div className='cardcontainer w-1/2 h-[70vh]'>
        <div className=' relative flex items-center justify-center icard rounded-xl w-full h-full bg-[#004D43]'>
            <img className='2-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
            <button className='absolute px-5 py-1 border-2 left-7 bottom-1 rounded-full'>&copy;2019-2022</button>
        </div>
      </div>
      <div className='cardcontainer flex gap-5 w-1/2 h-[70vh]'>
      <div className='card flex items-center justify-center relative rounded-xl w-1/2 h-full bg-[#192826]'>
      <img className='2-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg'></img>
            <button className='absolute px-2 py-0.5 border-2 left-2 bottom-1 rounded-full'>RATING 5.0 ON CLUTCH</button>
      </div>
      <div className=' flex relative items-center justify-center card w-1/2 rounded-xl h-full bg-[#192826]'>
      <img className='2-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
            <button className='absolute px-2 py-0.5 border-2 left-1 bottom-1 rounded-full'>BUSINESS BOOTCAMP ALUMINI</button>
      </div>
      </div>
    </div>
  )
}

export default Cards