import React, { useContext, useEffect, useState } from 'react'
import blogcontext from '../context/blogs/BlogContext'

const About = () => {
    const data = useContext(blogcontext)
    const {state, updateValue } = data
    useEffect(()=>{
        updateValue()
    },[])
  return (
    <div>
      <h4>This is {state.name} and i am {state.age} years old.</h4>
    </div>
  )
}

export default About
