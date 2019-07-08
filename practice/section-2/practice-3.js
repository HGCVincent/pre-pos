'use strict';

function countSameElements(collection) {
  var re = [];
  for(var i=0,v; v = collection[i],i<collection.length; i++)
  {
    var rv = /^([a-z]+)(?:.+?(\d+))?/i.exec(v);
    if (!re[rv[1]])
      re[rv[1]] = 0;
    re[rv[1]] += rv[2] ? parseInt(rv[2], 10) : 1;
  }
  
  var arr = [];
  for (var j in re){
    arr.push({'name':j,'summary':re[j]});
  }
  return arr;
}
