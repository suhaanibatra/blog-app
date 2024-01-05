"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext(); // using this context we will store our context -- by default light
//we will check the current context and then switch to the other

//we will store this state in the local storage -- we create a function because by default it is a server side component ->
const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light"; //if empty make it light
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () =>{
    setTheme(theme==="light" ? "dark" : "light")
  }
  useEffect(() =>{
    localStorage.setItem("theme", theme)
  }, [theme]);

  return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>;
};
