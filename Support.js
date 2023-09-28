import React from 'react';
import {AiOutlineArrowRight} from 'react-icons/ai'

const Support = () => {
    return (
        <div name='support' className='bg-blue-100 mt-5 flex text-center p-8 justify-center  '>
            <div className='flex flex-col gap-5 font-mono items-center shadow-md shadow-gray-700 w-full h-full p-10 sm:h-screen'>
                <h2 className='text-3xl font-bold'>SUPPORT</h2>
                <h3 className='text-5xl shadow-md shadow-blue-200'>Find the best service</h3>
                <p className='text-2xl'>Ea irure aliquip reprehenderit cillum minim sint labore labore incididunt consequat veniam non deserunt.</p>
                <div className='flex gap-2  ' >
                    <input placeholder='Feel free to write us!' className=' p-2 rounded-md shadow-md shadow-indigo-400 '></input>
                    <button className='bg-indigo-500 font-mono p-2 rounded-xl '>Find Us</button>

                </div>

                <div className='flex flex-col py-5 gap-8 md:flex-row' >
                    <div className='bg-blue-300 p-3 font-mono text-2xl rounded-[20px] '>
                        <h2 className='font-bold text-3xl text-start p-3 text-indigo-700'>Sales</h2>
                        <p className='p-3'>Lorem in cillum reprehenderit sunt laboris pariatur et aliquip proident.</p>
                        <div className=' flex items-center gap-1 bg-white w-[30vh] justify-center rounded-lg '>
                            <button>Contact Us</button>
                            <AiOutlineArrowRight/>
                           
                        </div>
                    </div>

                    <div className='bg-blue-300 p-3 font-mono text-2xl rounded-[20px] ' >
                        <h2 className='font-bold text-3xl text-start p-3 text-indigo-700'>Sales</h2>
                        <p className='p-3'>Lorem in cillum reprehenderit sunt laboris pariatur et aliquip proident.</p>
                        <div className=' flex items-center gap-1 bg-white w-[30vh] justify-center rounded-lg '>
                            <button>Contact Us</button>
                            <AiOutlineArrowRight/>
                           
                        </div>
                        
                        
                        
                    </div>


                    <div className='bg-blue-300 p-3 font-mono text-2xl rounded-[20px] ' >
                        <h2 className='font-bold text-3xl text-start p-3 text-indigo-700'>Sales</h2>
                        <p className='p-3'>Lorem in cillum reprehenderit sunt laboris pariatur et aliquip proident.</p>
                        <div className=' flex items-center gap-1 bg-white w-[30vh] justify-center rounded-lg '>
                            <button>Contact Us</button>
                            <AiOutlineArrowRight/>
                           
                        </div>
                        
                        
                        
                    </div>



                    
                    
                    
                    
                </div>
                
            
            
            </div>
        </div>
    );
};

export default Support;