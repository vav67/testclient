"use client";
 import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
 import NavItems from "../utils/NavItems";
  import { ThemeSwitcher } from "../utils/ThemeSwitcher"; //переключатель тем
 import { HiOutlineMenuAlt3  } from "react-icons/hi";
   import {   HiOutlineUserCircle,  HiUser } from "react-icons/hi"

   import CustomModal from "../utils/CustomModal";

   import Login from "./Auth/Login";  //вход
   import Signup from "./Auth/SignUp"; // регистрация
    import Verification from "./Auth/Verification";

    import { useLoadUserQuery } from "@/redux/features/api/apiSlice";




  type Props = {
    open: boolean;  //наш набор открыт
    setOpen: (open: boolean) => void;
    activeItem: number; //активный
     route: string;
     setRoute: (route: string) => void;
  }


//const Header = () => {   //  , route, setRoute
const Header: FC<Props> = ({  activeItem, setOpen, open , route, setRoute  }) => {
  
  
     const [active, setActive] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

    const {data:userData, isLoading,  error, refetch} = useLoadUserQuery(undefined, {});


    useEffect( () => {
           if (!isLoading) { //загрузка окончена
        
    console.log( '!!!!!!!!!! Header    data=',  userData) 
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
           console.log( '!!!!!!!! Header  ====ОШИБКА error= ',  error) 
    }
  

}, [userData, isLoading, error]); // data, 




if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }




  // клик  mobile sidebar
  const handleClose = (e: any) => {
    if (e.target.id === "screen") {
       { setOpenSidebar(false) }
    }
  };


  return (
    <div className="w-full relative">
    <div
      className={`${
        active
          ? "dark:bg-opacity-50 bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black" + 
           " fixed top-0 left-0 w-full h-[80px] z-[80]"+
          "  border-b dark:border-[#ffffff1c] shadow-xl transition duration-500"
          : "w-full border-b dark:border-[#ffffff1c] h-[80px] z-[80] dark:shadow"
      }`}
    >

    <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
    <div className="w-full h-[80px] flex items-center justify-between p-3">
      <div>
        <Link
          href={"/"}
          className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}
        >
          ELearning
        </Link>
      </div>


      <div className="flex items-center">
              <NavItems activeItem={activeItem} isMobile={false} />  
           
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
                 // onClick={() => setOpen(true)}
                />
               </div>
      </div>
      </div>
 
      {openSidebar && (
          <div //кликаем слева от боковой панели и она закроется
          className="fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"
          onClick={handleClose}
          id="screen"
        >
          <div className="w-[70%] fixed z-[999999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0">
            <NavItems activeItem={activeItem} isMobile={true} />
            <br />
            <br />
            <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
              Copyright © 2023 ELearning
            </p>
          </div>
        </div>
      )} 




</div>


{route === "Login" && (
  <>
    {open && (
      <>
       <br />
       <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
       THIS a otkrito======================          </p>
      </>
    )}
    <br />
            <p className="text-[16px] px-2 pl-5 text-black dark:text-white">
              THIS a LOGIN            </p>
  </>
)}


        {/* {route === "Login" && (
     <>
        {open && (
 <CustomModal
   open={open}
   setOpen={setOpen}
   setRoute={setRoute}
   activeItem={activeItem}
   component={Login}
 // refetch={refetch}
            />
         )}
      </>
    )}
    {route === "Sign-Up" && (
    <>
       {open && (
 <CustomModal
   open={open}
   setOpen={setOpen}
   setRoute={setRoute}
   activeItem={activeItem}
   component={Signup}
          />
          )}  
     </>
    )}   */}
     {/* {route === "Verification" && (
      <>
         {open && (
   <CustomModal
              open={open}
             setOpen={setOpen}
             setRoute={setRoute}
             activeItem={activeItem}
             component={Verification}
        />
          )}
      </>
    )} */}


</div>



  )

  }
  export default Header