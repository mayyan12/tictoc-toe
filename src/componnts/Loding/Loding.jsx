import React from "react";
import styles from './style.module.scss';

const Loading = ({ size = '60px', dotSize = '10px', dotCount = 5, color = '#B28100', speed = '0.9s', spread = '20px' }) => {
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
