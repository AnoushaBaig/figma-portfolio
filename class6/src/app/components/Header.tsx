import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
  return (
    <div className='flex justify-between bg-[#F3F3F3] text-[24px] px-10 '>
        <div className='text-[40px] mt-10px my-4'>
       <Image
       src="/Site-logo (2).png"
       alt="logo"
       width={80}
       height={23}
    ></Image>
        </div>
        <div className="flex gap-6 items-center text-black">
        <Link href="/about"><div>Playground</div></Link>
       <Link href="/work"> <div>Work</div></Link>
        <div>Contact</div>
        <div>About</div>
      </div>
      
    </div>
  )
}

export default Header
