import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="" width={50} height={50} />
          <h1 className={styles.logoText}>myBlogApp</h1>
        </div>
        <p className={styles.desc}>
          euismod nisi porta lorem mollis aliquam ut porttitor leo a diam
          sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet
          nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis
          mattis aliquam faucibus purus in massa tempor
        </p>
        
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className={styles.list}>
        <span className={styles.listTitle}>Tags</span>
          <Link href="/">Travel</Link>
          <Link href="/">Trends</Link>
          <Link href="/">Culture</Link>
          <Link href="/">City</Link>
          <Link href="/">Adventure</Link>
          <Link href="/">Food</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
