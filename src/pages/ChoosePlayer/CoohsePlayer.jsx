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
  const [choice, setChoice] = useState(null);
  const [isChosen, setIsChosen] = useState(false);
  const [isDisabledX, setIsDisabledX] = useState(false);
  const [isDisabledO, setIsDisabledO] = useState(false);


  const x = useUserPrefStore();
  const handleChoice = (value) => {
    x.setIsValue(value)
    setChoiceMade(true);
    x.setPlayervalue(value)
    setChoice(value);
    setIsChosen(true);
    if (value === 'x') {
      setIsDisabledO(true);
    } else {
      setIsDisabledX(true);
    }
  }

  return (
    <div className={`${styles.ChoosePlayer} ${choiceMade ? styles['choice-made'] : ''}`}>
      <div className={styles.button}>
        <Button text={<IoArrowUndo size={25} />} back={true} /> </div>
      <div className={styles.contenierAll}>
        <h1>Coohse Player</h1>
        <InputBord labelText={""}>
          <div className={styles.aba}>
            <div className={`${styles.container} ${isDisabledX ? styles.disabled : ''}`} onClick={() => handleChoice("x")}>
              <X />
            </div>
            <div className={`${styles.container2} ${isDisabledO ? styles.disabled : ''}`} onClick={() => handleChoice("O")}>
              <O />
            </div>
          </div>
        </InputBord>
        <div className={styles.bottom}>
          <Button text={"LeT'S PLAY"} to={"/bordWithPlayers"} />
        </div>
      </div></div>
  )
}
