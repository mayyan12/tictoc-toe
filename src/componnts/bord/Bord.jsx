import React from "react";
import styles from './style.module.scss';
import { useState } from "react";
import Card from '../Card'
import {useUserPrefStore} from '../../store'
import checkWin3_3 from '../../functions/win'
export default function Bord() {
    const [list, setList] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ]);
    const[one , setOne]= useState(true)
    const [num, setNum] = useState(1)
const UserPref= useUserPrefStore()
const valueOne = UserPref.isValue
const valueTwo = UserPref.playerValue
    const handleClick = (row, rowIndex, cell, cellIndex) => {
        const newList = [...list];
        newList[rowIndex][cellIndex] = one ? valueOne : valueTwo;
        setList(newList);
        setOne( !one ? true :false)
        // console.log(`Clicked cell at row ${rowIndex}  column ${cellIndex}`);
        // console.log("list:" ,list);
        setNum(num+1)
        console.log(num);
        if(num >4){
            checkWin3_3(list)
        }
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
