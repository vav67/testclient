"use client";
import React, { useEffect, useState } from 'react'

type Cour = {
    name:string;
    description:string;
}


const page = () => {
  const vv ="https://lmsserver-eta.vercel.app/api/v1/get-courses"
 //  "https://lmsserver-eta.vercel.app/test"

    const [data, setData] =useState<Cour[]>([])
 
    useEffect( ()=> { 
    
        const fetchData = async () => {
      try {
        const res = await fetch(vv)
       
        const responseData = await res.json()
        console.log( 'res=', responseData.course)

        setData(responseData.course)
      } catch (err){ console.log(err) }
   }
    
  fetchData();
  },  [] )


//data[0].name

  return (
    <>
    <div className=' text-center font-Poppins text-[45px] dark:text-white'
    >PProba === { data[0]?.name } </div>
   <div>  PProba === { data[0]?.description } </div>
   </>
  )
}

export default page