const arrayPad = (arr, len, val) => {
   const newArr = [...arr];
    if(!val) return newArr;
    while (newArr.length < len) {
        newArr.push(val);
    }
    return newArr;
};

module.exports = {
    arrayPad,
};