import React from 'react'
import Link from 'next/link'
import styles from './menuCategories.module.css'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link href="/blog?cat=travel" className={`${styles.categoryItem} ${styles.travel}`}>Travel</Link>
        <Link href="/blog?cat=trends" className={`${styles.categoryItem} ${styles.trends}`}>Trends</Link>
        <Link href="/blog?cat=adventure" className={`${styles.categoryItem} ${styles.adventure}`}>Adventure</Link>
        <Link href="/blog?cat=food" className={`${styles.categoryItem} ${styles.food}`}>Food</Link>
        <Link href="/blog?cat=city" className={`${styles.categoryItem} ${styles.city}`}>City</Link>
        <Link href="/blog?cat=culture" className={`${styles.categoryItem} ${styles.culture}`}>Culture</Link>
      </div>
  )
}

export default MenuCategories
