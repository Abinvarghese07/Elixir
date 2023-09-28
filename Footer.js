import React from 'react';

const Footer = () => {
    return (
        <div className='  bg-gray-700 text-center p-5 '>
            <div className='flex justify-around flex-wrap font-mono text-2xl'>
                <div>
                <h2>SOLUTIONS</h2>

                     <ul>
                    <li> Marketing</li>
                    <li> Analytics</li>
                    <li> Cloud</li>
                    <li> Saas</li>
                    <li> Platform</li>

                </ul>
                </div>
                  
                <div>
                <h3>SUPPORT</h3>
                     <ul>
                    <li> Pricing</li>
                    <li> Docs</li>
                    <li> Guides</li>
                    <li> API</li>
                    <li> Products</li>

                </ul>
                </div>
                <div>
                  <h3>COMPANY</h3>

                     <ul>
                    <li> About</li>
                    <li> Blog</li>
                    <li> Careers</li>
                    <li> Services</li>
                    <li> Clients</li>

                </ul>
                </div>
                <div>
                  <h3>LEGAL</h3>

                     <ul>
                    <li> Chain</li>
                    <li> Policies</li>
                    <li> Data</li>
                    <li> Terms</li>
                    <li> Developers</li>

                </ul>
                </div>
                <div className='p-2 flex flex-col gap-8'>
                    <div className='flex flex-col items-start w-full  '>
                        <h2 className=' p-2 font-mono text-3xl text-white'>Give us a Hi!</h2>
                        <div className='md:flex  justify-center  '>
                        <input className='p-2 rounded-xl' placeholder='Enter your mail... '></input>
                        <button className=' mt-2 bg-indigo-700 p-2 rounded-xl'>Subscribe</button>
                        </div>
                    </div>

                    <p>@Abin Varghese 2023</p>
                </div>

               
            </div>
        </div>
    );
};

export default Footer;
