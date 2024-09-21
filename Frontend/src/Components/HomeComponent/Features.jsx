import React from 'react'
import { MdOutlineSafetyCheck } from "react-icons/md";
import { FaClipboardCheck } from "react-icons/fa6";
import { MdBusinessCenter } from "react-icons/md";
import { BsFillHousesFill } from "react-icons/bs";

const Features = () => {
  return (
    <div className='border-bottom border-4 custom-bg'>
       <h1 className='display-6 d-flex justify-content-center pt-4 fw-bold text-dark'>OUR FEATURES</h1>
      <ul className='list-unstyled mx-5 d-flex justify-content-center my-5 custom-gap '>
        <li>
        <MdOutlineSafetyCheck size={120} color="dark" />
        <p className='text-center fw-bold'>Secure and safe</p>
        </li>
        <li><FaClipboardCheck size={120} color="dark"/>
        <p className='text-center'>Full insurance</p>
        </li>
        <li><MdBusinessCenter size={120} color="dark"/>
        <p className='text-center'>Business Purpose</p>
        </li>
        <li><BsFillHousesFill size={120} color="dark"/>
        <p className='text-center'>Personal use</p>
        </li>
      </ul>
    </div>
  )
}

export default Features
