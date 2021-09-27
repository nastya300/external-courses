
function countEachCharacterString(str){
let map={};
for (let i=0; i<str.length;i++){
    if (map.hasOwnProperty(str[i])){
        map[str[i]]++;
    }else {
        map[str[i]]=1;
    }
}
   for (let key in map){
       console.log(key,map[key]);
   }
}
module.exports=countEachCharacterString;