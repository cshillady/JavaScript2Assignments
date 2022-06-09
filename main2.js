//
// File: main2.js
// Date: 06/09/2022
// 

const ex1 = () => {
  const array = [1, '2', 3, 'test', 1.2];
  console.log(countNumbers(array));
}
const countNumbers = array => {
  let retval = 0;
  for (let i of array) {
    if (typeof(i) === 'number' && i % 1 !== 0) {
      retval++;
    }
  } return retval;
}

const ex2 = () => {
  const array = [12, 55, "2", 22, 11, true];
  console.log(minNumber(array));
}
const minNumber = array => {
  let retval = array[0];
  for (let x of array) {
    if (x < retval && typeof(x) === 'number') {
      retval = x;
    }
  } return retval;
}

const ex3 = () => {
  const array = ['this', 'is', 'a', 'test', 'happy'];
  console.log(shortestString(array));
}
const shortestString = array => {
  let retval = array[0];
  for (let i of array) {
    if (i.length < retval.length) {
      retval = i;
    }
  } return retval;
}

const ex4 = () => {
  const array = ["this", "is", "a", "test"];
  console.log(countLetters(array));  
}
const countLetters = array => {
  let retval = 0;
  for (let i of array) {
    retval += i.length;
  } return retval;
}

const ex5 = () => {
  const array = ["this", "is", 1, 3, 2.1, "a", "test"];
  console.log(countIt(array));  
}
const countIt = array => {
  let integers = "";
  let decimals = "";
  let strings = "";
  integers = `Number of Integers: ${countIntegerNumbers(array)}`;
  decimals = `Number of Decimal Numbers: ${countDecimalNumbers(array)}`;
  strings = `Number of Strings: ${countStrings(array)}`;
  return integers + "\n" + decimals + "\n" + strings;
}
const countIntegerNumbers = array => {
  let retval = 0;
  for (let i of array) {
    if (typeof(i) === 'number' && i % 1 === 0) {
      retval++;
    }
  } return retval;
}
const countDecimalNumbers = array => {
  let retval = 0;
  for (let i of array) {
    if (typeof(i) === 'number' && i % 1 !== 0) {
      retval++;
    }
  } return retval;
}
const countStrings = array => {
  let retval = 0;
  for (let i of array) {
    if (typeof(i) === 'string') {
      retval++;
    }
  } return retval;
}

const ex6 = () => {
  const array = ["this", "is", 1, 3, 2.1, "a", "test"];
  let result = countItems(array);
  console.log("Number of Integers: " + result.numIntegers);
  console.log("Number of Decimal Numbers: " + result.numDecimals);
  console.log("Number of Strings: " + result.numStrings);
}
const countItems = array => {
  let result = {
    numIntegers: countIntegerNumbers(array),
    numDecimals: countDecimalNumbers(array),
    numStrings: countStrings(array)
  };
  return result;
}

const ex7 = () => {
  let person1 = { name: "Alice", age: 22 };
  let person2 = { name: "Bob", age: 21 };
  let person3 = { name: "Charlie", age: 23 };
  let personArray = [];
  personArray.push(person1);
  personArray.push(person2);
  personArray.push(person3);
  personArray.sort((a, b) => { return a.age - b.age });
  console.table(personArray);
}

const ex8 = () => {
  let p1 = createPerson("Alice", 11);
  let p2 = createPerson("Bob", 22);
  let p3 = createPerson("Charlie", 33);
  let personArray = [];
  personArray.push(p1);
  personArray.push(p2);
  personArray.push(p3);
  console.log(countOver20(personArray));
}
const createPerson = (name, age) => {
  let obj = {name, age};
  return obj;
}
const countOver20 = array => {
  let overTwenty = 0;
  for (let x of array) {
    if (x.age > 20) {
      overTwenty++;
    }
  } return overTwenty;
}

const ex9 = () => {
  let item1 = { quantity: 1, cost: 1.00 }
  let item2 = { quantity: 2, cost: 2.00 }
  let item3 = { quantity: 3, cost: 3.00 }
  let items = [];
  items.push(item1);
  items.push(item2);
  items.push(item3);
  console.log(calculateTotal(items));
}
const calculateTotal = array => {
  let retval = 0;
  for (let i of array){
    retval += (i.cost * i.quantity);
  } return retval;
}

const ex10 = () =>{
  let usageData = [{ userId: 1111, minutes: 10.0 }, { userId: 2222, minutes: 20.0 }, { userId: 3333, minutes: 30.0 }];
  let person = { userId: 3333, fullName: "Charlie" };
  let result = calcCellBillForPerson(usageData, person);
  console.log(result);
}
const calcCellBillForPerson = (array, obj) => {
  let perMinCharge = 0.1;
  let result = {};
  for (let i of array) {
    if (i.userId = obj.userId) {
      result = {
        'userId': i.userId,
        'fullName': obj.fullName,
        'minutes': i.minutes,
        'perMinuteCharge': perMinCharge,
        'charges': (i.minutes * perMinCharge).toLocaleString('en-US', {style: 'currency', currency: 'USD'})
      }
    }
  } return result;
}

const main = async () => {
  //ex1();
  //ex2();
  //ex3();
  //ex4();
  //ex5();
  //ex6();
  //ex7();
  //ex8();
  //ex9();
  ex10();
}

main();