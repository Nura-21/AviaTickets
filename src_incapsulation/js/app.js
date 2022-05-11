// * Like this we can get all variables
const User = {
  name: "Nura",
  getName() {
    return this.name;
  },
  setName(name) {
    this.name = name;
  },
};

// ! Like this we could make variables private, but we can reassign functions
// function User(name) {
//   let userName = name;

//   return {
//     getName() {
//       return this.userName;
//     },
//     setName(name) {
//       this.userName = name;
//     },
//   };
// }

// const first = new User("Nura");

// ! Like this we can't reassign functions
function User(name) {
  let userName = name;

  return Object.freeze({
    getName() {
      return this.userName;
    },
    setName(name) {
      this.userName = name;
    },
  });
}

const first = new User("Nura");

// * Using Symbol()
// function UserSymbol(name){
//     const symbol = new Symbol();
//     return {
//         [symbol]:name,
//         getName(){
//             return this[symbol];
//         },
//         setName(name){
//             this[symbol] = name;
//         }
//     }
// }

import { getData } from "./module";
console.log(getData());