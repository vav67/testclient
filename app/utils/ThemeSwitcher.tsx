"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BiMoon, BiSun } from "react-icons/bi"; //иконки

export const ThemeSwitcher = () => {
  //состояния переменные 
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  //   typeof window !== "undefined" ? console.log( '------Theme=', localStorage.getItem("Theme") )
  // :  setTheme("light")    

 
 
 useEffect(   () => setMounted(true),  [] );

  if (!mounted) { //если тема не установлена
    // setTheme("light") //сам 
     return null;
  }
//system null
  return (
    <div className="flex items-center justify-center mx-4">
 
      {
      theme === "light" ? (
       
        <BiMoon
         fill="black"  //цвет иконки
          className="cursor-pointer"
          size={25}
          onClick={() => setTheme("dark")}
   
        />
         
      ) : (
        <BiSun
 
          size={25}
          className="cursor-pointer"
         onClick={() => setTheme("light")}
        
        />
      )}
    </div>
  );
};
