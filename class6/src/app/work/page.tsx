import React from 'react';
import Project1 from '../components/Project1';
import Project2 from '../components/Project2';
import Project3 from '../components/Project3';

function Page() {
  return (
    <div>
        {/* <Header /> */}
    <div className='h-auto w-full bg-[#F3F3F3] flex flex-col items-center '>
        <div className=' flex flex-col lg:flex-row justify-center lg:justify-between mx-auto h-auto w-auto max-w-[140vmin] mt-[21vmin] p-[2vmax] ">'>
        <div className='flex flex-col mx-15 top[360px] text-left '>
           <h2 className='text-black font-dm-sans  w-full h-[129px] text-6xl font-medium leading-[58.32px] size-[90px] tracking-normal'>
            Hello, I’m Mehmet Akif.
           </h2>
           <p className='text-4xl rotate-90 text-center w-screen lg:w-[3vmin] mt-[200px] lg:text-left '>
                            ➔
                            </p>
                            <p className='h2 text-center lg:text-left w-full lg:w-[21rem] mt-5'>
                            </p>
      </div>
        <div className='flex flex-col items-center justify-center mr-[10vmin] w-[580px] h-[111px]'>
        <p className='text-2xl text-center w-[580px] h-[111px]  top-[424px] left-[636px] ml-[19vmin] text-gray-600 size-[32px] leading-9 mx-auto lg:mx-0 mt-5 lg:mt-40'>
          A senior-year design student who is trying to specialize in 3D modeling & texturing.
        </p>
      </div>
      </div>
      <Project1 />
      <Project2 />
      <Project3 />
    </div>
    </div>
   
  );
}

export default Page;
