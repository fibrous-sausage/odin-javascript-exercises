const removeFromArray = function(array, ...toRemove) {
    return array.filter(element => toRemove.indexOf(element) === -1);
};

// Do not edit below this line
module.exports = removeFromArray;
