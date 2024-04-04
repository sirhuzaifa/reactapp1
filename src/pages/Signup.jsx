import React, { useState } from 'react'

function Signup() {
    const [formData , setFormData] = useState(
        {
            username : "",
            password : ""
        }
    );
    const submitted = () =>{
        alert(`username : ${formData.username} and password : ${formData.password} Submitted`);
    }
  return (
    <div className='px-10 flex h-screen'>
    <div className='m-auto'>
     <div className=' '>
         <h1 className='font-bold text-2xl   '>SIGN UP / <span className='text-gray-300 font-semibold text-sm '>Login</span> </h1>
     </div>
     <div className='mt-8 w-full'>
         <form className=''>
             <input type='text' onChange={(e)=>setFormData({ ...formData, username:e.target.value})}  className='mb-16 w-full border-b border-b-4' placeholder='Username' />
             <input type='text' onChange={(e)=>setFormData({ ...formData, password:e.target.value})}  className='w-full border-b border-b-4' placeholder='Password' />
            <button onClick={submitted} type='button'  className='mt-20 w-[120px] text-white font-semibold rounded-2xl h-[40px] bg-[#7795ff] float-right'>Login</button>         
         </form>
     </div>
     </div>

 </div>
  )
}

export default Signup