function getAllButLastElementOfProperty(obj, key) {
    let prop = obj[key];
    if (!Array.isArray(prop) || prop.length === 0) {
      return [];
    }
    return prop.slice(0, -1);
  }
  