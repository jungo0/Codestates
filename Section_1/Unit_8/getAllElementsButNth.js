function getAllElementsButNth(arr, n) {
    let arr2 = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i !== n) {
        arr2.push(arr[i]);
      }
    }
  
    return arr2;
  }
  