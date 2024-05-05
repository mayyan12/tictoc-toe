import React from "react";
import styles from './style.module.scss';
import X from '../X';
import O from '../O';

const Card = ({ value, onClick }) => {

    return (
        <div className={styles.cell} onClick={onClick}>
            {value === 'X' && <X />}
            {value === 'O' && <O />}
        </div>
    );
};

export default Card;
