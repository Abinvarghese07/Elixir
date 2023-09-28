import React from 'react';
import {FaBars} from 'react-icons/fa'
import { useState } from 'react';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

import { Link} from 'react-scroll'





const Navbar = () => {

    const[nav,setNav] = useState(false)


    const handleClick = () => {
        setNav(!nav)
    }

    const closeClick = () => {
        setNav(!nav)
    }
    




    return (
        <div>
            <nav className='flex justify-around bg-blue-100 text-black p-6 mb-12 shadow-md shadow-red-100'>
        <h1 className='text-4xl font-bold font-burtons'>Elixir.</h1>
            <ul className=' gap-10  items-center text-2xl font-bond hidden md:flex cursor-pointer '>
                <li className='hover:text-indigo-700'><Link  to="home"  smooth={true} offset={50} duration={500} > Home</Link></li>
                <li className='hover:text-indigo-700'><Link to="about" smooth={true} offset={50} duration={500}>Services</Link></li>
                <li className='hover:text-indigo-700'><Link  to="pricing"  smooth={true} offset={50} duration={500} >Pricing</Link></li>
                <li className='hover:text-indigo-700'><Link to="support" smooth={true} offset={50} duration={500}>Support</Link></li>


                

            </ul>

            <div className='hidden md:flex gap-4 text-white font-mono'>
               
            

     

                <Link to="login" smooth={true} offset={50} duration={500}>
                     <button className='bg-indigo-500 p-2 font-burtons text-2xl rounded-lg'>Login</button>
                    

                </Link>
                <Link to="login" smooth={true} offset={50} duration={500}>
                     <button className='bg-indigo-500 p-2 font-burtons text-2xl rounded-lg'>Signup</button>
                    

                </Link>


                
            </div>


            <div className='flex justify-between  md:hidden mt-3 ' onClick={handleClick}>
                {!nav ?  <FaBars/> : <AiOutlineCloseCircle /> }
               
            </div>

                 

            </nav>
              <ul className={!nav? 'hidden' : ' relative px-8 bg-blue-100 h-screen w-full font-burtons text-2xl'} >
                <li className='border-b-2 border-gray-600 p-4'><Link onClick={closeClick}  to="home"  smooth={true} offset={50} duration={500} > Home</Link></li>
                <li className='border-b-2 border-gray-600 p-4'><Link onClick={closeClick} to="about" smooth={true} offset={50} duration={500}>Services</Link></li>
                <li className='border-b-2 border-gray-600 p-4'><Link onClick={closeClick} to="pricing"  smooth={true} offset={50} duration={500} >Pricing</Link></li>
                <li className='border-b-2 border-gray-600 p-4'><Link onClick={closeClick} to="support" smooth={true} offset={50} duration={500}>Support</Link></li>
                <div className='flex justify-center flex-col p-5 gap-5'>
                    <button className='bg-blue-200 p-2 rounded-[20px] hover:bg-blue-300'>Sign In</button>
                    <button  className='bg-blue-200 p-2 rounded-[20px] hover:bg-blue-300 '>Sign up</button>

                </div>


                
            </ul>

     
          





        </div>
     
    );  
}   

export default Navbar;