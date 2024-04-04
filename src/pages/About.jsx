import React from 'react'
import Appbar from '../components/Appbar'
import Dyform2 from '../components/Dyform2'

function About() {


  const inputs = [
    { type : "text" , placeholder : "Username" , value : ""  }, //0
    { type : "email" , placeholder : "Email" , value : "" }, //1
    { type : "password" , placeholder : "Password" , value : "" }, //2
    { type : "submit" , value:"Submit" }
]



  return (
    <>
       <Appbar title={"About page"}/>
       <div>About</div>

       <Dyform2 inputs={inputs}/>
    </>
    
  )
}

export default About