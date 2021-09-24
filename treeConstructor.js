function TreeConstructor(strArr)
{
let i1 ={};
let i2 = {};

for(let i=0;i<strArr.length;i++)
{
let newPair = strArr[i].replace(/[()]/g,'').split(',');
let childNode = newPair[0];
let parentNode = newPair[1];

if(i2[parentNode]){
i2[parentNode].push[childNode]
}
else{
i2[parentNode] = [childNode];
}
if(i2[parentNode].length > 2){
return false;
}
if(i1[childNode]{
return false;
}
else{
i1[childNode]= i2;
}
}
return true;
}
