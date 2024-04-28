"use client";

import React, { FC, useEffect, useState } from "react";
 import "./globals.css";
import { Poppins } from "next/font/google";
                     import { Toaster } from "react-hot-toast";
import { Josefin_Sans } from "next/font/google";
import { Providers } from "./Provider";
import { ThemeProvider } from "./utils/theme-provider"; //импортируем нашу тем

import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./components/Loader/Loader";



//добавили шрифты (использ они в tailwind.config.ts)
const poppins = Poppins({
  subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
   variable: "--font-Poppins",
 });

 const josefin = Josefin_Sans({
   subsets: ["latin"],
   weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
 });

//глобальный макет для страниц


export default function RootLayout({
  children 
 }:{ children: React.ReactNode
 }) {
 return (
   <html lang="en"           
   suppressHydrationWarning={true}
   >
    <body className={`${poppins.variable} ${josefin.variable} !bg-white bg-no-repeat 
      dark:bg-gradient-to-b  dark:from-gray-900 dark:to-black duration-300`
     }>   
        <Providers>
      
      <ThemeProvider attribute= 'class'  defaultTheme="light" > 
      {/* defaultTheme='system' enableSystem={true}  > */}
      
      <Custom>  <div>{children}</div>  </Custom>

      <Toaster position="top-center" reverseOrder={false} />

      </ThemeProvider>

      </Providers>
      </body>
    </html>
  );
}



const Custom: FC<{ children: React.ReactNode }> = ({ children }) => {
 
  const { isLoading } = useLoadUserQuery({});

 
  return <>{isLoading ? <Loader /> : <div>{children}</div>}</>;
};