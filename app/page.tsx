 
"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";

interface Props {}

const Page: FC<Props> = (props) => {


  //начальное состояния (переменные)  
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);


  return (
     
  <div>
  <Heading
        title="ELearning-oK"
        description=" Ini adaldjf sd odf s ofj sdf pfosjdfsj sdf s"
        keywords="Makan, Enak, Jangan, Makan, Tidur"
      />

   <Header  
//передаем начальное состояние
          open={open}
       setOpen={setOpen}
        activeItem={activeItem}
      //  setRoute={setRoute}
      //    route={route} 
      />   

  </div>
  
  )
};

export default Page;
 