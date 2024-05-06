import React, { useState } from 'react'
import styles from './style.module.scss'
import Button from '../../componnts/Button'
import { useUserStore, useUserPrefStore } from '../../store'
import X from '../../componnts/X'
import O from '../../componnts/O'
import InputBord from '../../componnts/inputBord/InputBord';
import { IoArrowUndo } from "react-icons/io5";

export default function CoohsePlayer() {
  const [choiceMade, setChoiceMade] = useState(false); // קבוע לקבלת הבחירה

  const x = useUserPrefStore();
  const handleChoice = (value) => {
    x.setIsValue(value)
    setChoiceMade(true);
  }

  return (
    <div className={`${styles.ChoosePlayer} ${choiceMade ? styles['choice-made'] : ''}`}>
      <div className={styles.button}>
        <Button text={<IoArrowUndo size={25} />} back={true} /> </div>
      <div className={styles.contenierAll}>
        <h1>Coohse Player</h1>
        <InputBord labelText={""}>
          <div className={styles.aba}>
            <div className={styles.container} onClick={() => handleChoice("x")}><X /></div>

            <div className={styles.container2} onClick={() => handleChoice("O")}><O /> </div>
          </div>
        </InputBord>
        <div className={styles.bottom}>
          <Button text={"LeT'S PLAY"}  />
        </div>
      </div></div>
  )
}
