import React from "react";

export default function Bord() {
    const board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],

    ];

    return (
        <div>
            {board.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                        <span key={cellIndex}>{cell}</span>
                    ))}
                </div>
            ))}
        </div>
    );
}
