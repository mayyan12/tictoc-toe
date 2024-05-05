import React from 'react'
import styles from './style.module.scss'
export default function index(text) {
  text = "play solo"
  return (
    <div>
      <button className={styles.button}>
        {text}
      </button>
    </div>
  )
}

