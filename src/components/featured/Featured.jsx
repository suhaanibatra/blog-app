import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to the one stop destination for all great ideas!</b>{" "}
        Discover amazing stories here.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet, itlabore et dolore magna aliqua.</h1>
          <p className={styles.postDesc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed cras ornare arcu dui vivamus. Odio ut sem nulla pharetra diam. Leo vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Tincidunt tortor aliquam nulla facilisi. Sed risus ultricies tristique nulla aliquet enim. A scelerisque purus semper eget duis. Quam id leo in vitae turpis massa sed elementum. Tortor at risus viverra adipiscing at in tellus integer. Mauris pharetra et ultrices neque ornare aenean euismod elementum. Feugiat in ante metus dictum at. Tempus imperdiet nulla malesuada pellentesque elit eget. Ultrices vitae auctor eu augue ut lectus arcu. Volutpat commodo sed egestas egestas fringilla. Tempus egestas sed sed risus. Consectetur adipiscing elit pellentesque habitant morbi tristique.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
