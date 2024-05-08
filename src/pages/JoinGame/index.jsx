import React, { useState } from 'react'
import Button from '../../componnts/Button'
import styles from './style.module.scss'
import { IoArrowUndo } from "react-icons/io5";
import InputBord from '../../componnts/inputBord/InputBord';
import { useEffect } from 'react';
export default function index() {
  const [inputValue, setInputValue] = useState('');
useEffect(() => {
console.log("inputValue:", inputValue);
}, [inputValue])

  return (
    <div>
         <div className={styles.button}>
    <Button text={<IoArrowUndo size={25} />} back={true} /> </div>
<h1>Join to a game</h1>   

<InputBord placeholder='enter code game' labelText='' setInputValue={setInputValue} inputValue={inputValue}  ></InputBord>

<Button text={"JOIN"}/>
<h1>or</h1>
<Button text={"create a game"}/>
 </div>

  )
}
