 
"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Courses from "./components/Route/Courses";
  import Reviews from "./components/Route/Reviews";
 import FAQ from "./components/FAQ/FAQ";

import Footer from "./components/Footer";
//import Hheader from "./components/Hheader";



//interface Props {}

//const Page: FC<Props> = (props) => {

   const Page = () => {

  //начальное состояния (переменные)  
  const [open, setOpen] = useState(false);
 const [activeItem, setActiveItem] = useState(0);
  
 // начальное значение чтоб войти в систему
 const [route, setRoute] = useState("Login");
// const [route, setRoute] = useState("Sign-Up");
  return (
     
  <div>
  <Heading
        title="2-ELearning-oK"
        description=" Ini adaldjf sd odf s ofj sdf pfosjdfsj sdf s"
        keywords="Makan, Enak, Jangan, Makan, Tidur"
      />
  
  
  <Header  
//передаем начальное состояние
          open={open}
       setOpen={setOpen}
        activeItem={activeItem}
         setRoute={setRoute}
         route={route} 
      />          

     
      <Hero />    
        <Courses />   
         <Reviews />       


 <FAQ />  
 <Footer />  
  </div>
  
  )
};

export default Page;
 