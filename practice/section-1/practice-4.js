'use strict';

function collectSameElements(collectionA, objectB) {
  var result =new Array() ;
  var result =new Array() ;
  for(var i = 0; i<collectionA.length; i++){
    for (var j= 0; j<objectB['value'].length;j++) {
      if (collectionA[i]['key'] == objectB['value'][j]) {
        if (result.indexOf(objectB['value'][j]) == -1)
          result.push(objectB['value'][j]);
      }
    }
  }
  return result;
}
