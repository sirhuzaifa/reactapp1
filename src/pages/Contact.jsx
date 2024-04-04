import React from 'react'
import Appbar from '../components/Appbar'
import Dyform from '../components/Dyform'

function Contact() {

  const submit = () =>{
    alert("Form Submitted")
  }

  return (
    <>
    <Appbar title={"Contact page"}/>
    <div>Contact</div>
    <Dyform email={true} password={true}  onformSubmit={submit} >
      <input type='number' placeholder='Age' />
      <select>
        <option>Select Gender</option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </Dyform>
 </>
  )
}

export default Contact

