var height = 1.7;
var weight = 60;

// この下にコードを書いてください
var BMI = weight / height / height;

console.log("BMIは"+ BMI +"です");

var idealWeight = height * height * 22;
console.log("適正体重は"+idealWeight+"kgです")

if(BMI<18.5){
  console.log("痩せ気味です");
}else if(BMI>=18.5 && BMI<25){
  console.log("普通です");
}else{
  console.log("肥満気味です");
}