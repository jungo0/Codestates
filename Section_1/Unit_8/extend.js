function extend(obj1, obj2) {
    for (let prop in obj2) {
      if (!(prop in obj1)) {
        obj1[prop] = obj2[prop];
      }
    }
  }
  