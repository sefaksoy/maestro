import React from 'react';
import MaestroLogo from './icons/MaestroLogo';
import "@fontsource/iceland";


export default function AuthPage() {
  return (
    <section className=''>
        {/* Left Page */}
        <div className="grid grid-cols-2 gap-2"> 
            <div className='text-center mx-auto bg-blue-300 h-screen w-full pt-20'>
                <MaestroLogo></MaestroLogo>
                <h1 className='text-5xl font-bold mt-5'>Welcome to Maestro</h1>
               <div className='mx-20'>
               <p className='text-xs mt-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolor incidunt voluptas commodi id velit accusantium quos ea qui quidem? Iure voluptatum maxime, nostrum quidem odio voluptatibus sunt nihil quaerat.</p>
               </div>
                <div className='flex justify-around md:mt-[150px] lg:mt-[190px]'>
                    <a href="#" className='hover:text-white duration-500'>Home</a>
                    <a href="#" className='hover:text-white duration-500'>Tour</a>
                    <a href="#" className='hover:text-white duration-500'>Course</a>
                    <a href="#" className='hover:text-white duration-500'>Jobs</a>
                </div>
            </div>



            {/* Right Page */}

            <div className='items-center bg-white flex justify-center'>

<div className='bg-blue-200 h-2/4 w-2/4 rounded p-8'>
    <h2 className='text-7xl mb-4 text-center font-sans'>Maestro</h2>

    <div className="flex flex-col space-y-1">
        {/* Username Input */}
        <label htmlFor="username" className="text-sm font-semibold ">Username*</label>
        <input 
            type="text" 
            id="username" 
            className="py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
        />

        {/* Password Input */}
        <label htmlFor="password" className="text-sm font-semibold pt-5">Password*</label>
        <input 
            type="password" 
            id="password" 
            className="py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
        />

        {/* Remember Me */}
        <div className="flex items-center">
            <input 
                type="checkbox" 
                id="remember-me" 
                className="mr-2"
            />
            <label htmlFor="remember-me" className="text-sm">Remember Me</label>
        </div>
        <button className="w-full h-12 px-6 text-white transition-colors duration-150 bg-black rounded-full focus:shadow-outline hover:bg-white hover:text-black uppercase">Sign In</button>
        </div>
</div>

</div>


    </div>
    
    </section>
)
}
