const arr = [
  { index: 0, value: "0" },
  { index: 1, value: "1" },
  { index: 2, value: "2" },
  { index: 3, value: "3" },
];
let shuffle = (arr) => {
  let set = new Set();
  while (set.size != arr.length) {
    let rand = Math.floor(Math.random() * arr.length);
    set.add(arr[rand]);
  }
  console.log(Array.from(set));
};
shuffle(arr);
