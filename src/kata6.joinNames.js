function concatenateNames(namesArray) {
    if (namesArray.length === 0) {
      return '';
    }
  
    if (namesArray.length === 1) {
      return namesArray[0].name;
    }
  
    const names = namesArray.map(obj => obj.name);
    const last = names.pop(); // Get the last name
    return `${names.join(', ')} & ${last}`;
  }


const joinNames = (namesObj) => {
    return concatenateNames(namesObj)
};


module.exports = joinNames;
