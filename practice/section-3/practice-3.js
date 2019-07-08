'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var obj = new Object();
  for (var i=0;i<collectionA.length;i++){
    if (obj.hasOwnProperty(collectionA[i])){
      obj[collectionA[i]]++;
    }
    else obj[collectionA[i]]=1;
  }
  var arr = new Array();
  for (var k in obj){
    for (var n=0;n<objectB['value'].length;n++) {
      if (k == objectB['value'][n]) {
        arr.push({key: k, count: (obj[k] -= parseInt(obj[k] / 3))});
        break;
      }
      else if (n == objectB['value'].length-1){
        arr.push({key: k, count: obj[k]});
      }
    }
  }
  return arr;
}
