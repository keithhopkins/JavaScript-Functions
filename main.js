function sum(num1, num2){
  return num1+num2;
}
console.log(sum(8012,7625));

function isEqual(num1, num2){
  return num1===num2;
}
console.log(isEqual(3,8));

function discountPercentage (originalPrice, discount){
  if(discount>100||discount<0)
    return alert("Your discount is invalid");
  return originalPrice*(discount/100);
}
console.log(discountPercentage(75,10));

function replaceAt(str, letter, index){
  return str.substr(0,index) + letter + str.substr(index+1);
}
function stringCapitalize (str){
  str = replaceAt(str,str.charAt(0).toUpperCase(),0);
  for(var i = 0; i<str.length; i++){
    if (str.charAt(i)===" "){
      str = replaceAt(str, str.charAt(i+1).toUpperCase(), i+1);
    }
  }
  return str;
}

var mySentence = "hi i am a sentence with no capitalization."
console.log(mySentence);
console.log(stringCapitalize(mySentence));


function evenNumbers(){
  var rand = Math.floor(Math.random()*101);
  var str = "";
  for (var i = 0; i<rand; i++){
    if(i%2==0){
      str+=i+"\n";
    }
  }
  return str
}
console.log(evenNumbers());

function isDivisible(num1, num2){
  return num1%num2===0;
}

console.log(isDivisible(80,4));

function oddNumbers(num){
  var str="";
  if(num<40){
    for(var i=0; i<num;i++){
      if(i%2===1){
        str+=i+"\n";
      }
    }
  }else {
    for(var i =40;i<num;i++){
      if(i%2===1){
        str+=i+"\n";
      }
    }
  }
  return str;
}
console.log(oddNumbers(Math.random()*101));
