import React from 'react';

const About = () => {
    return (
        <div name='about' className='w-full mt-5 bg-blue-100 p-5'>
            <div className='shadow-md shadow-slate-900 '>
                <h2 className='font-mono text-2xl font-bold p-10 md:text-6xl'>Trusted by developers all across the globe</h2>
                <div className='font-burtons p-10 text-2xl text-gray-900'>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='flex justify-around py-10 flex-col mx-[70px] md:flex-row gap-7' >
                    <div className='bg-blue-300 p-3  text-center rounded-[20px] font-mono text-2xl'>
                        <p className='text-4xl font-bold text-indigo-600'>100%</p>
                        <p>Completion</p> 
                    </div>

                    <div className='bg-blue-300 p-3 text-center rounded-[20px] font-mono text-2xl' >
                        <p className='text-4xl font-bold text-indigo-600'>24/7</p>
                        <p>Service</p>
                    </div>
                    <div className='bg-blue-300 p-3 text-center rounded-[20px] font-mono text-2xl'>
                        <p className='text-4xl font-bold text-indigo-600'>100K</p>
                        <p>Transactions</p>
                    </div>

                </div>




            </div>
        </div>
    );
}; 

export default About;