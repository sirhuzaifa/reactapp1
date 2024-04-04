import React from 'react'

function Dyform({username , email, password,onformSubmit ,children}) {
  return (
    <>

        <form>
          {username && (
            <input type='text' placeholder='Username' />
          ) } 
         {email && (
            <input type='email' placeholder='Email' />
         )}

         {password && (
           <input type='password' placeholder='Password' />
         )}
           
           {children}
          

            <button type='button' onClick={onformSubmit}>
                Submit
            </button>
        </form>

    </>
  )
}

export default Dyform