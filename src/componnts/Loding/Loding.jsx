import React from "react";
import styles from './style.module.scss';

const Loading = ({ size, dotSize, dotCount, color, speed, spread }) => {
    return (
        <div
            style={{
                '--size': size,
                '--dot-size': dotSize,
                '--dot-count': dotCount,
                '--color': color,
                '--speed': speed,
                '--spread': spread
            }}
            className={styles.dots}
        >
            {[...Array(dotCount)].map((_, i) => (
                <div key={i} style={{ '--i': i }} className={styles.dot}></div>
            ))}
        </div>
    );
};

export default Loading;
