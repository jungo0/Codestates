function countAllCharacters(str) {
    let result = {};
    for (let i = 0; i < str.length; i++) {
      if (result[str[i]] === undefined) {  //result의 키가 없을때 0을 할당
        result[str[i]] = 0;
      }
      result[str[i]]++;      //0번째면 result[obj[str]] === b
    }
    return result;
  }