import React, { useState } from 'react'

function Login() {

    const [username,setUsername] = useState("")
    const [userpassword,setPassword] = useState("")



    const myalert = () =>{
        alert(`username : ${username} and password : ${userpassword} Submitted`);
    }

  return (
    <div className='px-10 flex h-screen'>

       <div className='m-auto'>

        <div className=' '>
            <h1 className='font-bold text-2xl   '>LOGIN / <span className='text-gray-300 font-semibold text-sm '>Sign Up</span> </h1>
        </div>


        <div className='mt-8 w-full'>

            <form className=''>

                <input type='text'onChange={(e)=>setUsername(e.target.value)}  className='mb-16 w-full border-b border-b-4' placeholder='Username' />

                <input type='text' onChange={(e)=>setPassword(e.target.value)} className='w-full border-b border-b-4' placeholder='Password' />
            {username != "" && userpassword != ""  &&  
                <button onClick={myalert} className='mt-20 w-[120px] text-white font-semibold rounded-2xl h-[40px] bg-[#7795ff] float-right'>Login</button>
            }
            </form>

        </div>
        
        
        </div>

    </div>
  )
}

export default Login