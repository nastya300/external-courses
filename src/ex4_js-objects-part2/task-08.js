function  getStringLowerCamelCase(str){
let resultString=str.split(' ');
resultString[0]=resultString[0].toLowerCase();
  for (let i=1; i< resultString.length;i+=1){
    resultString[i] = resultString[i].charAt(0).toUpperCase() + resultString[i].substring(1).toLowerCase();
  }
  return resultString.join('');
}

module.exports = getStringLowerCamelCase;

