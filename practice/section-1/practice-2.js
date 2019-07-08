'use strict';

function collectSameElements(collectionA, collectionB) {
  var result =new Array() ;
  for(var i = 0; i<collectionA.length; i++){
    for (var j= 0; j<collectionB[0].length;j++) {
      if (collectionA[i] == collectionB[0][j]) {
        if (result.indexOf(collectionB[0][j]) == -1)
          result.push(collectionB[0][j]);
      }
    }
  }
  return result;
}
