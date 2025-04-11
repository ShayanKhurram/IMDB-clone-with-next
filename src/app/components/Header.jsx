import React from 'react'
import MenuItem from './MenuItem';
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className='flex gap-4'>
            <MenuItem title="Home" address="/home" Icon={AiFillHome}/>
            <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className=' flex items-center gap-4'>
          
            <Link href={'/'} className='flex gap-1 items-center'>
               <div className='flex gap-1 items-center'>
                    <span className='text-2xl font-bold bg-amber-500 rounded-lg'>IMDB</span>
                    <span className='hidden sm:inline text:2xlf'>clone</span>

               </div>
            </Link>
        </div>
        
    </div>
  )
}
 