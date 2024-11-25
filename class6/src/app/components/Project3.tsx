import React from 'react'

function Project1() {
  return (
    // left column
    <div className='mx-auto pb-[4vmin] pt-[10vmin] bg-[#F3F3F3]'>
      <div className=' flex flex-col lg:flex-row items-center'>
        <div className=' w-full lg-w-1/2   ml-0 lg:ml-[35vmin] text-center lg:text-left px-4 lg:mr-8'>
       <h1 className='text-sm lg:text-left'>03 /PROJECT NAME</h1>
       <p className='text-sm lg:w-[33vmin] lg:mt-[3vmin]'>Experimental creature modeling for school project.</p>
       <p className='text-[#606060] text-xs lg:w-[33vmin] lg:mt-[4vmin]'></p>
       <h2 className='text-sm mt-[15vmin]'><ins>Project WIP</ins></h2>
        </div>
   {/* right column */}
       <div className='w-full lg:w-1/2 mr-0 lg:mr-[35vmin] mt-[5vmin] lg:mt-0 px-4 lg:ml-8'>
          <div className='w-[65vmin] h-[36vmin] bg-[#606060] mx-auto'></div>        
        </div>       
        </div>
        <div className='mt-[10vmin] mx-[35vmin]'>
        <hr className='border-t border-[#606060]' />
    </div>
    </div>
  )
}

export default Project1
