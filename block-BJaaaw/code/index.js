// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = Number(prompt("enter a number"));
if (num % 2 == 0) {
  alert("this is an even number");
} else {
  alert("this is a odd number");
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let numA = prompt("enter a number");
let numB = prompt("enter another number");
if (numA > numB) {
  alert("numA is max");
} else {
  alert("numB is max");
}

// 3. Convert the above code using`?` terniary operator
numA > numB ? alert("numA is max") : alert("numB is max");
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt("enter the house name");
if (houseName === "stark") {
  alert("Winter is coming");
} else if (hoseName === "lannister") {
  alert("a lannister always pays his debt");
}
  else alert("all men must die");


// 5. Convert the above code using`?` terniary operator

houseName === "stark" ? alert("Winter is coming") : hoseName === "lannister" ? alert("a lannister always pays his debt") : alert("all men must die")

// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthName = prompt("enter the month name");
switch (monthName) {
  case jan:
    alert("the num of days are 31");
    break;
  case jan:
    alert("the num of days are 31");
    break;
  case fab:
    alert("the num of days are 28");
    break;
  case mar:
    alert("the num of days are 30");
    break;
  case apr:
    alert("the num of days are 29");
    break;
  case may:
    alert("the num of days are 30");
    break;
  case jun:
    alert("the num of days are 28");
    break;
  case jul:
    alert("the num of days are 30");
    break;
  case aug:
    alert("the num of days are 31");
    break;
  case sep:
    alert("the num of days are 30");
    break;
  case oct:
    alert("the num of days are 28");
    break;
  case nuv:
    alert("the num of days are 30");
    break;
  case dec:
    alert("the num of days are 31");
    break;

  default: alert("enter a valid input")
    break;
}
/* 7.
- Write a program that take the salery of the user using prompt and alert 
the in -hand amount.You will find out the in 
-hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salery = prompt("enter your salery");
let tax;
switch (true) {
  case salary <= 20000:
     tax = (salery * 10) / 100;
    alert(`your in -hand amount is ${salery - tax}`);
    break;

  case salary <= 40000:
     tax = (salery * 20) / 100;
    alert(`your in -hand amount is ${salery - tax}`);
    break;

  case salary <= 20000:
     tax = (salery * 10) / 100;
    alert(`your in -hand amount is ${salery - tax}`);
    break;

  case salary <= 50000:
     tax = (salery * 30) / 100;
    alert(`your in -hand amount is ${salery - tax}`);
    break;

  default:
    "this is not a valid input";
    break;
}

//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = prompt("enter the maks");
if (marks > 100) {
  alert("marks cant be greter han 100");
}
   else if (marks > 80 && marks < 100) {
    alert("Grade A");
  }
  else if (marks > 50 && marks < 80) {
    alert("Grade B");
  }
  else if (marks > 30 && marks < 50) {
    alert("Grade c");
  }
  else {
    alert("grade D")
  }



switch (true) {
  case marks > 100:
    alert("marks cant be greter han 100");
    break;
  case marks > 80 && marks < 100:
    alert("grade A");
    break;
  case marks > 50 && marks < 80:
    alert("grade B");
    break;
  case marks > 30 && marks < 50:
    alert("grade C");
    break;
  default:
    alert("grade D");
    break;
}


/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("enter the weather");
switch (weather) {
  case sunny:
    alert("Wear a T-shirt");
    break;
    case rainy:
    alert("Don't forget to take your raincoat");
    break;
    case hot:
    alert("alert`Get a hanky");
    break;
    case freezing:
    alert("alert`Get your sweeter on");
    break;

  default:alert("enter a valid input");
    break;
}