function getSumOfFactors(num) {
    result = 0;
    for(i = 0; i<=num; i++){
      if(num%i ===0){
        result = result + i;
      }
    }
    
    return result;
  }
  