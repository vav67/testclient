"use client";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import React, { useEffect, useState } from "react";
import NavItems from "../utils/NavItems";
import { ThemeSwitcher } from "../utils/ThemeSwitcher"; //переключатель тем
import { HiOutlineMenuAlt3  } from "react-icons/hi";
import {   HiOutlineUserCircle,  HiUser } from "react-icons/hi"
import CustomModal from "../utils/CustomModal";


import Login from "./Auth/Login";  //вход
import Signup from "./Auth/SignUp"; // регистрация
import Verification from "./Auth/Verification";


const Hheader = () => {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);


  const [active, setActive] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

    const {data, isLoading,  error, refetch} = useLoadUserQuery(undefined, {});
    //состояния
     // const [courses, setCourses] = useState<any[]>([]);
    
      useEffect(() => {
        if (!isLoading) { //загрузка окончена
        
            console.log( '!!!!!!!!!! HHHHHHH Hheader    data=',  data) 
             
        }
        console.log( '!!!!!!!!!! HHHHHHH Hheader error=',  error)
      }, [ data, error,
        isLoading /////////////////добавил   при проверке
      ]);
   
     //console.log( '============курсы data=', data )
     //console.log( '***************==курсы courses=', courses)
   

     if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 80) {
          setActive(true);
        } else {
          setActive(false);
        }
      });
    }
  


     return (
       <div>
       {isLoading ? (
         <p>Loading(Hheader)...</p>
       ) : (
        <div className="w-full relative">

<div className="w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow">



<div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
    <div className="w-full h-[80px] flex items-center justify-between p-3">
      <div>
     
          ELea-Hheader
        
      </div>

      <div className="flex items-center">
              <NavItems activeItem={1} isMobile={false} />  
           
               <div   className={` text-black dark:text-white`} //сам добавил
            ><ThemeSwitcher   /></div>



   {/* only for moblile  иконка меню */}
   <div className="800px:hidden">
                <HiOutlineMenuAlt3
                  size={25}
                  className="cursor-pointer  dark:text-white   text-black"
            //отображ боковая панель меню мобил      
                  onClick={() =>  setOpenSidebar(true)}
                />
              </div>  
              <HiOutlineUserCircle
                  size={25}   // Иконка нашего профиля
                  className="hidden 800px:block cursor-pointer  dark:text-white  text-black "
                onClick={() => setOpen(true)}
                />





      </div> 







      </div>  
</div>






</div>  
</div>

)}




{route === "Login" && (
  <>
    {open && (
      <>
       <br />
       <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
       THIS a otkrito======Login==========          </p>
     
   
    <CustomModal
   open={open}
   setOpen={setOpen}
     activeItem={activeItem}
    setRoute={setRoute}
   component={Login}
 refetch={refetch}
            />
    </>
   
   )}
    <br />
            <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
              THIS a LOGIN            </p>
  </>
)}
    {route === "Sign-Up" && (
    <>
       {open && (
 <>
  <CustomModal
   open={open}
   setOpen={setOpen}
   setRoute={setRoute}
   activeItem={activeItem}
   component={Signup}
          />
 <br />
 <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
 THIS a otkrito=====Sign-Up==========          </p>

 </>
   
   )}
   </>
)}

</div>
);
};
export default Hheader