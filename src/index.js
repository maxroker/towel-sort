// You should implement your task here.

module.exports = function towelSort(matrix) {
    let newArr = [];
    if (!matrix) return newArr;
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            matrix[i].forEach((el) => newArr.push(el));
        } else {
            matrix[i].reverse().forEach((el) => newArr.push(el));
        }
    }
    return newArr;
};
