const removeFromArray = function(array, ...valuesToRemove) {
  for(let i=0; i<valuesToRemove.length; i++){  
    const index = array.indexOf(valuesToRemove[i]);  
    // array.indexOf returns -1 if the value is not found
    if(index === -1) continue;
    array.splice(index, 1);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
