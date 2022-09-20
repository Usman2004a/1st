// var studentName = prompt("enter student name ");
// if( studentName === "hafeez"){
//     document.write(
//         "available"
//     )
// }
// else if( studentName === "umer"){
//     document.write("yes available")
// }

// else{
//     document.write(
//         "not available"
//     )

// }

// var num1 = +prompt("enter first number");
// var num2 = +prompt("ener second number");
// var operator = prompt("enter operator + , / , - , * ");

// if(operator === "+" ){
//     document.write(
//         num1 + num2
//     )

// }
// else if(operator === "-"){
//     document.write(
//         num1 - num2
//     )

// }
// else if(operator === "*"){
//     document.write(
//         num1 * num2
//     )

// }
// else if(operator === "/"){
//     document.write(
//         num1 / num2
//     )

// }
// else {
//     document.write("enter correct operator")
// }
// var i=0;

// for(i=0; i < 100 ;--i){
//     document.write(i);
// }

// const  num = parseInt(+prompt("enter first number"));

// for(i=1; i <=20 ;i++){
//     const result= num*i;
//     console.log(`${result}`);

// }


// var age=+prompt("eneter your age");
// switch (true) {
//     case (age >=50  || age <=55 ):
//         document.write("salwa ki age");
//         break;
//         case (age ==40 ):
//             document.write("fizza ki age");
//             break;
//             case (age ==70 ):
//                 document.write("khansa ki age");
//                 break;
//     default:
//         break;
// }


 switch(new Date().getDay()) {
    case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;