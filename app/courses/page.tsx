"use client";
import { styles } from "@/app/styles/style";
import React, { useEffect, useState } from 'react'

type Cour = {
    name:string;
    description:string;
}

type Props = {};


const Page = (props: Props) => {
  const vv ="https://nlmserver.vercel.app/api/v1/get-courses"
  
 //  "https://lmsserver-three.vercel.app/test"

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


  const verificationHandler = async () => {
    console.log( 'test')

   };





  return (
    <>
    <div className=' text-center font-Poppins text-[45px] dark:text-white'
    >PProba === { data[0]?.name } </div>
   <div>  PProba === { data[0]?.description } </div>
   <div className="w-full flex justify-center">
        <button className={`${styles.button}`} onClick={verificationHandler}>
          {" "}
          Verify OTP
        </button>
      </div>  
   </>
  )
}

export default Page