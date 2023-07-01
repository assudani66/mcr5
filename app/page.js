"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Add_Edit_RecipeModal from '../components/Add_Edit_RecipeModal'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Add_Edit_RecipeModal/>
      </div>
    </main>
  )
}
