import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'


export default function CareerDetails() {

    const {id}=useParams()
    const career = useLoaderData()


  return (
    <div className="career-details">
        <h2>Career Detail for {career.title}</h2>
        <p>Starting Salary: {career.salary}</p>
        <p>Location: {career.location}</p>
        <div className="details">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, ullam.</p>
        </div>
    </div>
  )
}


//loader
export const careerDetailsLoader=async({params})=>{
    
    const {id} = params;

     const res = await fetch('http://localhost:4000/careers/' + id)

     if(!res.ok){
        
        throw Error('Could not find that career')
     }
     return res.json()
}