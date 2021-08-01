const findBestEmployee = function (employees) {
    "use strict";
    // Write code under this line
    const tasks = Object.entries(employees);
    if (tasks.length === 0) {
        return "";
    }
    let moretask = tasks[0][1];
    let employeeName = tasks[0][0];
    for (const task of tasks) {
        if (task[1] > moretask) {
            moretask = task[1];
            employeeName = task[0];
        }
    }
    return employeeName;
};

// Объекты и ожидаемый результат
const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
};
//console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
};
//console.log(findBestEmployee(sellers));
// 'lux'
