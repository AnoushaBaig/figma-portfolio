import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <>
      <div className=' flex justify-between  bg-[#F3F3F3]'>
        <div className='w-1/2 mx-16'>
          <div className='flex flex-col gap-4 mt-[100px]'>
            <h1 className='font-dm-sans text-6xl font-medium leading-[58.32px] tracking[-0.03em] text-left'>
              Hi I’m Mehmet Akif Karasu, 3D artist & sculptor.
            </h1>
            <p className='leading-normal text-grey mt-5'>
              My work is mainly focused on third-dimension modeling, texturing and rendering. I like exploring the creatures with a touch of dark surrealism for characters and production.
            </p>
            <p>
              Now I’m an interactive media design student in Istanbul ⏤ currently freelancing and seeking internship opportunities.
            </p>

            <div className="flex flex-col justify-start mt-10">
              <div className="flex items-center">
                <h2 className="text-black"><ins>Main Software</ins></h2>
                <div className="h3p w-auto ml-4">
                  Pixologic ZBrush, Autodesk Maya, The Foundry Mari, Arnold Renderer, Blender, Forger
                </div>
              </div>
              <div className="h3p w-auto mt-8 ml-20">
                Adobe CC, Figma, Ableton
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-start mt-10 mb-9'>
            <h2 className='text-black '><ins>Main Skills</ins></h2>
            <div className='flex items-center w-auto ml-24 gap-7'>
              Organic and Polygonal Modeling, UV Layout, Texturing, Retopology, Illustration, Sound Design
            </div>
          </div>
        </div>
    
      <div className='w-1/2 mx-auto '>
              <Image
                src="/Profile Photo.png"
                alt="profile"
                width={350}
                height={350}
                className='ml-40 mt-32' 
              />
            </div>
            </div>

      <div className=' bg-[#F3F3F3]'>
        <hr className="mt-10   bg-black" style={{ height: '2px' }} />
      </div>

      <div className="font-poppins flex flex-col lg:flex-row justify-between mx-auto w-screen max-w-[140vmin]  bg-[#F3F3F3]">
        <div className="ls w-screen lg:w-96 mt-[8vmin] text-center lg:text-left">I am thrilled to answer to your next project   ➜</div>
        <div>
          <div className="ls text-center text-3xl w-screen lg:w-96 mt-[8vmin] mr-[5vmin] lg:text-left">makifkarasu@outlook.com</div>
          <div className="text-sm text-center w-screen lg:w-96 mt-[2vmin] lg:mr-[5vmin] lg:text-left">View Resume</div>
        </div>
    
      
              </div>
    </>
  );
}

export default Hero;
