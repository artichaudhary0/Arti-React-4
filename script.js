// function Counter() {
//   let count = 0;

//   const render = () => {
//     document.body.innerHTML = "";

//     const contentDiv = document.createElement("div"); // div

//     const displayCounter = document.createElement("p");

//     displayCounter.textContent = `Count : ${count}`;
//     const button = document.createElement("button");
//     button.textContent = "Increment";

//     button.onclick = () => {
//       count++;
//       render();
//     };

//     contentDiv.appendChild(displayCounter);
//     contentDiv.appendChild(button);
//     document.body.appendChild(contentDiv);
//   };

//   render();
// }

// Counter();

// function LifeCycleOfElement() {
//   console.log("Component create");
//   const element = document.createElement("div");

//   console.log("add text to div");
//   // innerHtml textContent innerText

//   element.textContent = "Click to increase count";

//   return element;
// }

// document.body.appendChild(LifeCycleOfElement());
// console.log("append");

// function Form() {
//   let inputValue = "";

//   const handleInput = (event) => {
//     inputValue = event.target.value;

//     display.textContent = `You have typed : ${inputValue}`;
//   };

//   const formElement = document.createElement("div");
//   const input = document.createElement("input");
//   input.type = "text";

//   input.addEventListener("input", handleInput);

//   const display = document.createElement("p");
//   display.textContent = "You typed : ";

//   formElement.appendChild(input);
//   formElement.appendChild(display);
//   return formElement;
// }

// document.body.appendChild(Form());

/*
Array : 
*/

// let price = [101, 101, 20, 301, 50, 6011];

// let result = price.indexOf(101, 1);
// console.log(result);

// add => push (add element  to last )
// price.push(70);
// console.log(price);

// // remove : pop (remove element  to last )
// price.pop();
// console.log(price);

// // shift : remove element from first
// price.shift();
// console.log(price);

// // unshift : add element from start
// price.unshift(234);
// console.log(price);

// price.splice(1, 3);
// console.log(price); // [10,  60] => return [20, 30, 50]

// price.slice(1, 4);
// console.log(price); // [20, 30, 50]

// let result1 = price.forEach((e) => {
//   // price
//   console.log(e);
// });

// console.log(result1);

// price.map((e) => {
//   // create a new array by applying a function to ecah element
//   console.log(e + e);
// });

// creates a new array with elemenets that pass the condition.
// price.filter((value) => console.log(value % 2 == 0));

// let result = price.filter((value) => value % 2 == 0);
// console.log(result);

// let sum = 0;
// for (let i = 0; i < price.length; i++) {
//   //    prev + curr
//   sum = sum * price[i];
// }

// console.log(sum);

// reduce : Reduces an array to a single value using the accumulator
// let sum = price.reduce((acc, num) => acc + num, 10);
// console.log(sum);

// function find() {
//   let price = [101, 20, 301, 50, 6011];
//   for (let i = 0; i < price.length; i++) {
//     if (price[i] % 2 == 0) {
//       return price[i];
//     }
//   }
// }

// console.log(find());

// // const even = price.find((num) => num % 2 === 0);
// // console.log(even);

// includes => exist karta nai karta => boolean
// let result = price.includes(101);
// console.log(result);

// price.sort((a, b) => a - b);
// console.log(price);
