const names = [
    "Tom",
    "Eric",
    "Jessica",
    "Scott",
    "Anna",
    "Carl",
    "Elisabeth",
    "Benny",
    "Oliver",
    "Andy",
    "Jenny",
    "Ashley",
    "Erin",
    "Patrick",
  ];
  
  //! DRY - Don't Repeat Yourself
  // console.log(`Good day ${names[0]}`);
  // console.log(`Good day ${names[1]}`);
  // console.log(`Good day ${names[2]}`);
  // console.log(`Good day ${names[3]}`);
  // man måtte ha skrevet disse console.loggene fram til man hadde skrevet hele arrayet over.
  
  const greeter = (name) => `Hello ${name}, have a good day!`;
  
  for (let i = 0; i < names.length; i++) {
    console.log(greeter(names[i]));
  }
  
  // kalkulator logikk:
  function add(num1, num2) {
    console.log(num1 + num2);
  }
  
  add(1543, 3212);
  
  function subtract(num1, num2) {
    console.log(num1 - num2);
  }
  
  subtract(3212, 3000);
  
  function multiply(num1, num2) {
    console.log(num1 * num2);
  }
  
  multiply(3212, 3000);
  
  function divide(num1, num2) {
    console.log(num1 / num2);
  }
  
  divide(3212, 3000);
  
  function jokerlogikk() {
    console.log("put a smile on that face");
  }
  
  jokerlogikk();
  
  /////////////////////////////////
  function hils(navn) {
    console.log(`Hello ${navn}`);
  }
  hils("alle sammen");
  
  ////////////////////////////////
  
  //simpleste loppen Joakim kan tenke på:
  //! IKKE SETT KROKODILLEGAPEN åpnet mot venstre: > !!!! Men det kan gjøres om: i--
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  
  ///////////////////////////////
  
  
  anotherArray = ["tom", "sarah", "jimmy"];
  
  console.log(anotherArray);
  
  function wordCleaner(arr) {
    let cleanedArr = [];
    for (word of arr) {
      console.log(word);
      cleanedArr.push(word.toUpperCase());
    }
    return cleanedArr;
  }
  
  console.log(wordCleaner(anotherArray));
  


  let randomNum = Math.floor(Math.random() * 9) + 1;
  
  let x = 0;
  
  while (x != randomNum) {
    x++;
    if (x === 9) break;
    console.log("trying.. " + x);
  }
  
  
  const stringArrayReverser = (arr) => {
    if (arr.length < 10 || arr.length > 100)
      return "Array is too short or too long";
    let reversedArray = [];
    for (let i = 0; i < arr.length; i++) {
      reversedArray.push(arr[i].split("").reverse().join(""));
    }
    return reversedArray;
  };
  
  console.log(
    stringArrayReverser([
      "Lemon",
      "Mangos",
      "Apple",
      "Pear",
      "Grapes",
      "Kiwi",
      "Fig",
      "Peach",
      "Grapefruit",
      "Watermelon",
      "Orange",
      "Banana",
    ])
  );
  
  // Prøv selv: fortsett på funksjonen over for å gjøre uppercase på første bokstav (eks: "Nomel")
  
  makeNumberArray = (size, maxNum) => {
    let numArray = [];
    for (let i = 0; i < size; i++) {
      numArray.push(Math.floor(Math.random() * maxNum));
    }
    return numArray;
  };
  
  console.log(makeNumberArray(10, 100));
  

  const maxFinder = (arr) => {
    let biggest = 0;
    for (let val of arr) {
      if (val > biggest) biggest = val;
    }
    return `Biggest number is ${biggest}`;
  };
  
  console.log(maxFinder(makeNumberArray(2, 10)));
  
  
  function generatePassword(len) {
    let password = "";
    while (password.length < len) {
      password += String.fromCharCode(Math.floor(Math.random() * 87) + 35);
    }
    return password;
  }
  
  console.log(generatePassword(50));
  
  // simpleste loopen i en funksjon:
  function enkelLoop() {
    for (let i = 0; i < 5; i++) {
      console.log(i + 1);
    }
  }
  
  console.log(enkelLoop());
  
  // simpel loop utenfor funksjon som kjøres med en gang nettsiden lastes:
  for (let i = 0; i < 5; i++) {
    console.log(i + 1);
  }
  
  
  // arrow funksjoner:
  // Dette er en vanlig funksjon:
  function bob() {
    console.log("jamican me crazy");
  }
  
  bob();
  
  // Dette er en arrow funksjon:
  const marley = () => {
    console.log("jamican me crazy");
  };
  
  marley();
  
  function noeannet() {
    let etArray = ["en", "to", "tre"];
    for (let i = 0; i < etArray.length; i++) {
      console.log(etArray[i]);
    }
  }
  
  noeannet();
  
  function noeAnnet() {
    let etAnnetArray = ["fire", "fem", "seks"];
    return etAnnetArray;
  }
  
  console.log(noeAnnet());
  