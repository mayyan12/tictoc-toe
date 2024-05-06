import React from "react";
import styles from './style.module.scss';
import { useState } from "react";
import Card from '../Card'
import {useUserPrefStore} from '../../store'
export default function Bord() {
    const [list, setList] = useState([
        ["O", "0", "0"],
        ["0", "0", "X"],
        ["0", "0", "0"]
    ]);
    const[one , setOne]= useState(true)
const UserPref= useUserPrefStore()
const valueOne = UserPref.isValue
const valueTwo = UserPref.playerValue
    const handleClick = (row, rowIndex, cell, cellIndex) => {
        const newList = [...list];
        newList[rowIndex][cellIndex] = one ? valueOne : valueTwo;
        setList(newList);
        setOne( !one ? true :false)
        console.log(`Clicked cell at row ${rowIndex}  column ${cellIndex}`);
    };



    return (

        <div className={styles.square}>
            {list.map((row, rowIndex) => {
                return (

                    <div key={rowIndex} className={styles.row}>
                        {row.map((cell, cellIndex) => (
                            <Card key={cellIndex} value={cell} onClick={() => handleClick(row, rowIndex, cell, cellIndex)} />


                        ))}
                    </div>
                );
            })}
        </div>

    );
}
