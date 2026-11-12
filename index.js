// ----------------------1-----------------------
// const sentence = prompt('Enter a sentence');
// const words = sentence.split(' ');
// console.log(words);
// const joinedWords = words.join('-');
// console.log(joinedWords);
// const hasJavaScript = words.includes('JavaScript');
// console.log(hasJavaScript);
// const htmlIndex = words.indexOf('HTML');
// console.log(htmlIndex);
// ----------------------2-----------------------
// const shoppingList = ['Bread', 'Milk', 'Eggs', 'Cheese', 'Butter'];
// shoppingList.push('Apple', 'Banana');
// console.log(shoppingList);
// const removedLastProduct = shoppingList.pop();
// console.log(removedLastProduct);
// console.log(shoppingList);
// shoppingList.unshift('Coffee', 'Tea');
// console.log(shoppingList);
// const removedFirstProduct = shoppingList.shift();
// console.log(removedFirstProduct);
// console.log(shoppingList);
// const hasMilk = shoppingList.includes('Milk');
// console.log(hasMilk);
// console.log(shoppingList.length);
// ----------------------3-----------------------
const grades = [12, 8, 10, 6, 11, 9, 7, 12, 5];
const firstStudentMarks = grades.slice(0, 3);
const removedScores = grades.splice(3, 2);
grades.splice(0, 0, 10, 11);
grades.splice(2, 1, 12);
const hasFive = grades.includes(5);
console.log(hasFive);
const gradesString = grades.join(',');
console.log(grades);
console.log(gradesString);
console.log(removedScores);
console.log(firstStudentMarks);
// ----------------------4-----------------------
// const cart = {
//   userName: 'Alex',
//   totalPrice: 1500,
//   isPaid: false,
//   products: ['Phone', 'Headphones'],
//   delivery: {
//     city: 'Kyiv',
//     address: 'Main Street',
//   },
// };
// console.log(cart.userName);
// console.log(cart['totalPrice']);
// const propertyName = 'userName';
// console.log(cart[propertyName]);
// cart.totalPrice = 2000;
// cart.isPaid = true;
// cart.discount = 10;
// cart.products.push('Laptop');
// cart.delivery.postalCode = '01001';
// console.log(cart.phone);
// console.log(cart);
// ----------------------5-----------------------
// const user = {
//   name: 'Alex',
//   age: 25,
//   courses: ['JavaScript', 'HTML', 'CSS'],
//   learning: {
//     hoursPerDay: 3,
//     completedLessons: 15,
//   },
//   isActive: true,
// };
// console.log(user.name);
// console.log(user.learning.hoursPerDay);
// console.log(user.courses[1]);
// user.courses.push('React');
// user.isActive = false;
// user.learning.hoursPerDay = 5;
// user.email = 'alex@gmail.com';
// console.log(user);
