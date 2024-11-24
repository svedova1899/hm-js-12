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

4 
function findBestEmployee(employees){
    let totalSalary= 0;
    for(const salary of Object.values(employees)){
        totalSalary += salary;
    }
    return totalSalary;
}
const employees ={
    Jamal: 500,
    Muhamed: 700,
    Dima: 900,
}
console.log(findBestEmployee(employees));