import React from 'react'

function Dyform2({inputs}) {

  return (
    <form>
        {inputs.map((item,index)=>
            <input type={item.type} placeholder={item.placeholder} />
        )}
    </form>
  
  )
}

export default Dyform2