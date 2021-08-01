const countTotalSalary = function (employees) {
    "use strict";
    // Write code under this line
    let sum = 0;
    if ((employees.length = 0)) {
        return null;
    }
    const salary = Object.values(employees);
    for (const key in salary) {
        sum += salary[key];
    }
    return sum;
};

// Объекты и ожидаемый результат
const developers = {
    mango: 300,
    poly: 250,
    alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
    kiwi: 200,
    lux: 150,
    chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
