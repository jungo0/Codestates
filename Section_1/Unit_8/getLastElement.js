function getLastElementOfProperty(obj, property) {
    let prop = obj[property];
    if (!Array.isArray(prop) || prop.length === 0) {
      return undefined;
    }
  
    return prop[prop.length - 1];
  }
  
//입력: 객체, 키 -> {key: [1,2,5]}, 'key'
//출력: 배열의 마지막요소 -> 5
//객체를 키로 조회해서 배열인지 확인
  //배열인 경우 마지막 요소 리턴
