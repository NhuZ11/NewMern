import React from 'react'
import Allproduct from '../Allproduct'
import Serviceitem from '../Serviceitem'

const HomeShowProduct = () => {
  return (
    <div>
        <h1 className='d-flex justify-content-center fw-bold pt-4 pb-0'>Some of our Products</h1>
     {localStorage.getItem("token")?<Allproduct />:<Serviceitem />}
    </div>
  )
}

export default HomeShowProduct
