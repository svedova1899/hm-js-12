// 1
// const user={
//     name: "Jamal",
//     age: 125,
//     hobby: "drawing",
//     premium: true,
// }
// user.mood= "happy";
// user.hobby= "skydiving";
// user.premium= false;

// for(let key of Object.keys(user)){
//     console.log(`${key}: ${user[key]}`);
// }

// 2
// function countProps(obj){
//     return Object.keys(obj).length;
// }
// const user={
//     name: "Dima",
//     age: 28,
//     ability: "don't sleep",
// }
// console.log(countProps(user));

// 3
// function findBestEmployee(employees){
//     let bestEmployee = null;
//     let maxTasks = 0;
  
//     for (const [employee, tasks] of Object.entries(employees)) {
//       if (tasks > maxTasks) {
//         maxTasks = tasks;
//         bestEmployee = employee;
//       }
//     }
  
//     return bestEmployee;
// }
// const employee={
//     Jamal: 63,
//     Muhamed: 12,
//     Dima: 2487,
// }
// console.log(findBestEmployee(employee));

// 4 
// function findBestEmployee(employees){
//     let totalSalary= 0;
//     for(const salary of Object.values(employees)){
//         totalSalary += salary;
//     }
//     return totalSalary;
// }
// const employees ={
//     Jamal: 500,
//     Muhamed: 700,
//     Dima: 900,
// }
// console.log(findBestEmployee(employees));

// 5
// function getAllPropValues(arr, prop) {
//   const values = [];

//   for (const obj of arr) {
//     if (prop in obj) {
//       values.push(obj[prop]);
//     }
//   }

//   return values;
// }

// const products = [
//   { name: "Apple", price: 100 },
//   { name: "Banana", price: 50 },
//   { name: "Orange" },
// ];

// console.log(getAllPropValues(products, "name"));
// console.log(getAllPropValues(products, "price"));
// console.log(getAllPropValues(products, "quantity"));

6
function calculateTotalPrice(allProducts, productName) {

    const product = allProducts.find(item => item.name === productName);
  
    if (product) {
      return product.price * product.quantity;
    }
  
    return 0;
  }
  
  const products = [
    { name: "Apple", price: 10, quantity: 3 },
    { name: "Banana", price: 5, quantity: 6 },
    { name: "Orange", price: 8, quantity: 4 },
  ];
  
  console.log(calculateTotalPrice(products, "Apple")); 
  console.log(calculateTotalPrice(products, "Banana")); 
  console.log(calculateTotalPrice(products, "Orange")); 
  console.log(calculateTotalPrice(products, "Pineapple"));