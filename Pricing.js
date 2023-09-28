import React from 'react';
import {AiOutlineCheck} from 'react-icons/ai'

const Pricing = () => {
    return (
        <div name='pricing' className='bg-blue-100 mt-5 text-center p-8 flex justify-center w-full'>
            <div className='shadow-md shadow-gray-700 w-full h-full  '>
                <h2 className='font-mono text-3xl font-semibold'>PRICING</h2>
                <h3 className='font-mono text-5xl py-3 font-bold'>The right price for your needs.</h3>
                <p className='font-mono text-3xl py-3'>Proident veniam duis eu fugiat non est laboris dolore pariatur.Officia et irure mollit et est sint aliqua et anim sit veniam quis pariatur.</p>
                <div className='flex flex-col mt-[60px] gap-[70px] items-center md:flex-row justify-center mb-8  '>
                    <div className='bg-blue-300  rounded-[20px] shadow-md shadow-indigo-700'>
                        <h3 className='font-mono bg-white text-start w-[12vh] font-bold p-2 rounded-[20px] m-2 text-indigo-700'>STANDARD</h3>
                        <div className='flex items-end justify-center'>
                            <h2 className='text-7xl font-bold'>$49</h2>
                            <p className='font-mono text-3xl'>/mo</p>
                        </div>

                        <p className='p-5 font-mono text-xl'>Tempor esse exercitation mollit sint nisi ea elit esse fugiat sunt nisi ex adipisicing in.</p>
                        <div className='flex gap-3 p-3 justify-center'>
                            <p className='text-green-800 text-2xl'> <AiOutlineCheck/></p>
                            <p className='font-mono text-xl text-gray-600'> Nisi proident consequat ea non .</p>
                        
                        
                        
                        </div>
                        <div className='flex gap-3 p-3 justify-center'>
                               <p className='text-green-800 text-2xl'> <AiOutlineCheck/></p>
                            <p className='font-mono text-xl text-gray-600'> Nisi proident consequat ea non .</p>
                        
                        
                        </div>


                        <div className='flex gap-3 p-3 justify-center'>
                               <p className='text-green-800 text-2xl'> <AiOutlineCheck/></p>
                            <p className='font-mono text-xl text-gray-600'> Nisi proident consequat ea non .</p>
                        
                        
                        </div>
                        <div className='flex justify-center p-1 '>
                            <div className='bg-indigo-700 p-2 font-mono text-2xl w-[30vh] rounded-[20px] hover:text-white '> 
                                <button>Get Started</button>
                            </div>
                        </div>
                        
                        
                    </div>


                     <div className='bg-blue-300  rounded-[20px] shadow-md shadow-indigo-7  00'>
                        <h3 className='font-mono bg-white text-start w-[15vh] font-bold p-2 rounded-[20px] m-2 text-indigo-700'>ENTERPRISE</h3>
                        <div className='flex items-end justify-center'>
                            <h2 className='text-7xl font-bold'>$89</h2>
                            <p className='font-mono text-3xl'>/mo</p>
                        </div>

                        <p className='p-5 font-mono text-xl'>Tempor esse exercitation mollit sint nisi ea elit esse fugiat sunt nisi ex adipisicing in.</p>
                        <div className='flex gap-3 p-3 justify-center'>
                            <p className='text-green-800 text-2xl'> <AiOutlineCheck/></p>
                            <p className='font-mono text-xl text-gray-600'> Nisi proident consequat ea non .</p>
                        
                        
                        
                        </div>
                        <div className='flex gap-3 p-3 justify-center'>
                               <p className='text-green-800 text-2xl'> <AiOutlineCheck/></p>
                            <p className='font-mono text-xl text-gray-600'> Nisi proident consequat ea non .</p>
                        
                        
                        </div>


                        <div className='flex gap-3 p-3 justify-center'>
                               <p className='text-green-800 text-2xl'> <AiOutlineCheck/></p>
                            <p className='font-mono text-xl text-gray-600'> Nisi proident consequat ea non .</p>
                        
                        
                        </div>

                         <div className='flex justify-center p-1 '>
                            <div className='bg-indigo-700 p-2 font-mono text-2xl w-[30vh] rounded-[20px] hover:text-white '> 
                                <button>Get Started</button>
                            </div>
                        </div>
                        
                        
                    </div>








                 </div>
            </div>

            
        </div>
    );
};

export default Pricing;