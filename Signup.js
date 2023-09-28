import React from 'react';

const Signup = () => {
    return (
        <div name='login' className='bg-blue-100 mt-5 flex justify-center p-4'>
            <div className='flex flex-col items-center p-10 mb-10 gap-3 shadow-md shadow-gray-700'>
                <label className='font-mono text-4xl font-bold text-indigo-700' >Get Started</label>
                <h2 className='font-mono text-3xl'>Book an appointment with us</h2>
                <label className='font-mono text-2xl'>Mail</label>
                <input className='w-full p-3 rounded-md'></input>
                <label className='font-mono text-2xl '>Password</label>
                <input className='w-full p-3 rounded-lg'></input>
                <button className='bg-indigo-700 p-3 rounded-full font-mono font-bold text-2xl'>Login</button>
                <button className='bg-indigo-700 p-3 rounded-full font-mono font-bold text-2xl'>Signup</button>

            </div>



        
             
        </div>
    );
};

export default Signup;