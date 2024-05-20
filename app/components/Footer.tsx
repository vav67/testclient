"use client";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
 import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
 


// import Link from 'next/link'
// import React from 'react'

type Props = {}

const Footer = (props: Props) => {

   const {data:userData, isLoading, error, refetch} = useLoadUserQuery(undefined, {});
 // const {data:userData, isLoading } = useLoadUserQuery(  {});




  
  useEffect( () => {
 
  if (!isLoading) { //загрузка окончена
   
   
   console.log( '!!!!!!!!==Footer=== data=',  userData) 
     if (!userData) {


       //  if (data) {
       // socialAuth({   //передаем данные для запроса в бд
       //   email: data?.user?.email,
       //   name: data?.user?.name,
       //   avatar: data?.user?.image,
       // });
       // refetch();
       // }
     }

   
 // if (data === null) {
 // //  console.log( ' Header  useEffect (data === null isSuccess=получены)  data=', data,
 //   //     ' user=', user)     
 //     //данные получены от useRegisterMutation    
 //     if (isSuccess) { toast.success("Login Successfuly") }
 //  }
  
 //  if (data === null && !isLoading && !userData){
 //     // так как хук useLoadUserQuery внутри ф-ции не работант , то записываем в переменную   
 //      setLogout(true) // что инициирует запрос выхода через useLoadUserQuery
 //      }
 }
  if (error) { //загрузка окончена
      
  console.log( '!!!!!!!!==Footer==ОШИБКА error= ',  error) 
  }


}, [userData, isLoading, error]); // data, 


  return (
    <footer>
      <div className="border border-[#0000000e] dark:border-[#ffffff1e]" />
      <br />
      <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">About</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/courses"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/course-dashboard"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Course Dashboard
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black dark:text-white">Social Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://www.youtube.com/channel/UCHz6Sne9splmvm-q2w1_HWQ"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Youtube
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/shahriar_sajeeb_/"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.github.com/shahriarsajeeb"
                  className="text-base text-black dark:text-gray-300 dark:hover:text-white"
                >
                  github
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-[20px] font-[600] text-black dark:text-white pb-3">Contact Info</h3>
            <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2">
            Call Us: 1-885-665-2022
            </p>
           
            <p className="text-base text-black dark:text-gray-300 dark:hover:text-white pb-2">
            Address: +7011 Vermont Ave, Los Angeles, CA 90044
            </p>
         
            <p className="text-base text-black dark:text-gray-300 dark:hover:text-white  pb-2">
            Mail Us: hello@elearning.com
            </p>
            
          </div>
        </div>
        <br />
        <p className="text-center text-black dark:text-white">
          Copyright © 2023 ELearning | All Rights Reserved
        </p>
      </div>
      <br />
    </footer>
  )
}

export default Footer