console.log("log");

console.error("Erorr");

console.table(["Ali", "Aya", "Ahmed", "Soha"]);

console.log("%cElZero", "color: blue;font-size: 80px;font-weight: bold;text-align: center;font-family: Arial")
console.log("%cElZero %cWeb %cSchool", "color: red;font-size:40px", "color:green;font-weight: bold;font-size:40px", "background:blue;color:white;font-size:40px")

console.log("Iam In Console");
document.write("Iam In Page");

console.group("Group 1");
  console.log("Message One!");
  console.log("Message Two!");
  console.group("Child One")
  console.log("Message One");
  console.log("Message Two");
  console.group("Grand Child Groub")
  console.log("Message One");
  console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd();

