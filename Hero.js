import React from 'react';
import Typed from 'react-typed'
import heroimg from '../src/assets/cyber-bg.png'
const Hero = () => {
    return (
      <div name='home' className='flex justify-center bg-blue-100 w-full h-full p-10  '>
        <div className='  shadow-md shadow-slate-950 p-7 h-full w-full  '>
            <h1 className='text-3xl font-mono sm:text-6xl'>Engineering solutions for all.</h1>
              <div className='text-xl font-mono font-light py-14 px-5 shadow-sm shadow-blue-300 text-indigo-700  sm:text-5xl'>
            <Typed strings={['Cloud Management', 'SaaS Solutions' ,'B2B services' ,]} typeSpeed={100} backSpeed={100} loop   />

        </div>
            <div className='p-3 py-12    relative max-w-full max-h-full overflow-hidden '>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <div className='  '>
                <img className=' w-[200px]  absolute top-[50%] left-[80%] translate-x-[-50%] translate-y-[10%]' src={heroimg} alt=''></img> 

                </div>
            
            </div>


        </div>
      
            


      </div>
      
      
      
     
        
         

    );
};

export default Hero;