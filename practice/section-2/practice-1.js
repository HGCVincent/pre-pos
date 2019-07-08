'use strict';

function countSameElements(collection) {
  var obj = new Object();
  for (var i=0;i<collection.length;i++){
    if (obj.hasOwnProperty(collection[i])){
      obj[collection[i]]++;
    }
    else obj[collection[i]]=1;
  }
  var arr = new Array();
  for (var k in obj){
    arr.push({key : k,count : obj[k]})
  }
  return arr;
}
