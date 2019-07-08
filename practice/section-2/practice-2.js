'use strict';

function countSameElements(collection) {
  var obj = new Object();
  for (var i=0;i<collection.length;i++){
    if (collection[i].split('-')[1] == null) {
      if (obj.hasOwnProperty(collection[i])){
        obj[collection[i]]++;
      }
      else obj[collection[i]]=1;
    }
    else{
      if (obj.hasOwnProperty(collection[i].split('-')[0])){
        obj[collection[i].split('-')[0]] += parseInt(collection[i].split('-')[1]);
      }
      else obj[collection[i].split('-')[0]]= parseInt(collection[i].split('-')[1]);
    }
  }

  var arr = new Array();
  for (var k in obj){
    arr.push({key : k,count : obj[k]})
  }
  return arr;
}
