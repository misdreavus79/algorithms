function arrangeByLargestInt(array) {
    const number = Number(array.join('').split('').sort((a, b) => {
        return Number(b) - Number(a);
    }).join(''));
    return number;
}

function arrangeByLargestIntWhole(array) {
    const arranged = array.sort((a, b) => {
        return String(b) > String(a);
    });
    return arranged;
}

arrangeByLargestInt([10, 7, 76, 415]);

arrangeByLargestIntWhole([10, 7, 76, 415]);