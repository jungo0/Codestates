function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
      return previous + current;
    });
  }
  
  sum(1,2,3)
  sum(1,2,3,4) 