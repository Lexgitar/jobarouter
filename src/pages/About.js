import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function About() {

    const [user, setUser]= useState('mario')

    if(!user){
        return <Navigate to='/'  replace={true} />
    }
  return (
    <div className='about' >
        <h2>About Us</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat neque, ut omni
            s possimus a voluptatem. Incidunt eligendi voluptate minus doloribus eius in, non dolore unde aliquid delectus ipsam at omnis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delenit
            i ratione harum obcaecati voluptatibus reprehenderit repellendus libero sit quia doloribus. Facere officiis, itaque vero dicta alias eos sequi asperiores fugiat ullam?</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing e
            lit. Ea debitis sapiente consequatur quasi! Harum aliquam totam illo optio cumque ratione iure laborum error nostrum quo magni animi similique, ab quibusdam?</p>

            <button onClick={()=> setUser(null)} >Logout</button>
    </div>
  )
}

export default About