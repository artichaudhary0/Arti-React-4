// // Object

// const person = {
//   name: "XYZ",
//   fun: function () {
//     console.log("hello");
//   },
// }; // object

//   const p1 = person;
//   // p1.fun();
//   // console.log(p1);
//   // person.fun();

//   const person1 = Object.create(person);

//   person1.name = "ABC";

//   console.log(person.name);
//   console.log(person1);

// assign (target , source...)
// const obj1 = { a: 1 };
// const obj2 = { b: 2 };

// const result = Object.assign(obj1, person, obj2);

// console.log(result);

// keys
// const key = Object.keys(result);

// console.log(key[0]);

// values

// const values = Object.values(result);
// console.log(values);

// entries : return an array of the object's own emurated key value pair.

// const obj = { a: 1, b: 2, c: 3, d: 4 };
// let array = Object.entries(obj); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ], [ 'd', 4 ] ]

// console.log(array[0]);

// freeze(obj) =>
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// Object.freeze(obj);

// obj.d = 5;

// console.log(obj);

// seal
// const obj = { a: 1, b: 2, c: 3, d: 4 };
// Object.seal(obj);

// obj.d = 5;

// console.log(obj);

// getPrototypeOf => return the protype of object
// const obj = { a: 1 };
// console.log(Object.getPrototypeOf(obj));

const proto = {
  fun: function () {
    console.log("hello");
  },
  name: "XYZ",
};

const obj = {};

Object.setPrototypeOf(obj, proto);
console.log(Object.getPrototypeOf(obj));
