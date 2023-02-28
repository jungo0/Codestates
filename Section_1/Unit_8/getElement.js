function getElementOfArrayProperty(obj, key, index) {
    let arrProperty = obj[key];
  
    if (Array.isArray(arrProperty) === false) {
      return undefined;
    }
    return arrProperty[index];
  }
  