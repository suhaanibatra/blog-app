"use client";

import React, { useContext } from 'react'
import styles from './themeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/src/context/ThemeContext'

const ThemeToggle = () => {

  const {toggle, theme} = useContext(ThemeContext)
  // console.log(theme);

  return (
    <div className={styles.container} onClick={toggle} style={theme === "dark" ? {background: "white"}: {background: "black"}}>
      <Image src="/moon.png" alt="dark" width={14} height={14}/>
      <div className={styles.circle} style={theme ==="dark" ? {left:1, background: "white"} : {right: 1, background: "#0f172a", border: "2px solid #f0f0f0"}}></div>
      <Image src="/sun.png" alt="light" width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle
