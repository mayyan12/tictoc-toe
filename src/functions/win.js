const array = [
  ["", "x", "o"],
  ["x", "o", ""],
  ["o", "o", "o"],
];

for (let i = 0; i < array.length; i++) {
  if (array[i].includes("x") || array[i].includes("o")) {
    const res = array[i].every((value) => value === array[i][0]);
    console.log(res);
  }
}

for (let i = array.length; i >0 ; --i) {
  if (array[i].includes("x") || array[i].includes("o")) {
    for (let j = 0; j < array.length; j++) {
      if (array[i][j] === array[i - 1][j]) {
      }
    }
  }
}
