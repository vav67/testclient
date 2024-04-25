"use client";

import React, { FC, useEffect, useState } from "react";
import type { Metadata } from "next";
 import "./globals.css";
import { Poppins } from "next/font/google";
import { Josefin_Sans } from "next/font/google";

import { ThemeProvider } from "./utils/theme-provider"; //импортируем нашу тем

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
      <ThemeProvider attribute= 'class'  defaultTheme="light" > 
      {/* defaultTheme='system' enableSystem={true}  > */}
      {children} 
      </ThemeProvider>  
      
      </body>
    </html>
  );
}
