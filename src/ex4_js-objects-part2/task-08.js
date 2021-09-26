function  getStringLowerCamelCase(str){
  str=str.split(' ');
  str[0]=str[0].toLowerCase();
  for (let i=1; i< str.length;i+=1){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1).toLowerCase();
  }
  return str.join('');
}
module.exports = getStringLowerCamelCase;
