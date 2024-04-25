"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({    children, ...props }: ThemeProviderProps) {
 // const NextThemesProvider = children as any; лучше так npm install next-themes@^0.2.1
  return (
   
   <NextThemesProvider {...props}> {children}   </NextThemesProvider>
                 
  ) 
} 