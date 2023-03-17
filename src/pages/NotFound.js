import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempora nobis aut odio? Temporibus, ducimus.</p>
        <p>Go to the <Link to='/' >Homepage</Link></p>
    </div>
  )
}
