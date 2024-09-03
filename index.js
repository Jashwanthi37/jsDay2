//task1
var membership="Premium Membership";
if(membership=="Basic Membership"){
    console.log("Access to only free books");
}
else if(membership=="Standard Membership"){
    console.log("Access to free books and discounted paid books");
}
else if(membership=="Premium Membership"){
    console.log("Access to all books, including exclusive content");
}
else{
    console.log("Invalid Membership");
}

//task2
var customer="VIP Customers";
var amount=100;
if(customer=="Regular Customers"){
    if(amount==100){
        amount-=amount*0
    }
    else if(amount>"100"&& amount<="500"){
        amount-=amount*0.05
    }
    else if(amount>"500"){
        amount-=amount*0.1
    }
    console.log(amount)
}
if(customer=="VIP Customers"){
    if(amount==100){
        amount-=amount*0.1
    }
    else if(amount>"100"&& amount<="500"){
        amount-=amount*0.15
    }
    else if(amount>"500"){
        amount-=amount*0.2
    }
    console.log(amount)
}

//task3
var gpa=3.0;
var activities=10;
var hours=300;
if(gpa>=3.5){
    console.log("Merit-Based Scholarship");
}
if(gpa>=3.0 &&activities>=2){
    console.log("Leadership Scholarship");
}
if(gpa>=2.5&&hours>=100){
    console.log("Community Service Scholarship");
}
else{
    console.log("No Scholarship")
}

//task4
var week = prompt("Please enter day:");
var age=prompt("enter your age");
if(week=="monday"||week=="tuesday"||week=="wednesday"||week=="thursday"||week=="friday"){
    var price=12;
    if(age>=65||age<=12){
        price-=price*0.5;
    }
    console.log(price)
}
if(week=="saturday"||week=="sunday"){
    var price=15;
    if(age>=65||age<=12){
        price-=price*0.3
    }
    console.log(price)
}


//task5
var email=prompt("enter email");
var age1=8;
var participants=200;
if(age1>=18 &&participants<=100){
    console.log("You can register");
}
if(age1<18){
    console.log("enter valid age");
}
if(participants>100){
    console.log("No more registrations are accepted")
}

//task6 
var input;
var tea=prompt("enter time type");
var add=prompt("enter add-ons");
var cost;
input=(tea=="regulartea"||tea=="masalatea"||tea=="gingertea")?"your tea":"please enter valid tea name";
console.log(input);
if(tea=="regulartea"){
    var cost=15; 
    if(add=="extra sugar"){
        var cost =cost+2.5;
    }
    else if(add=="extra milk"){
        var cost=cost+5;
    }
    else if(add="no add-on"){
        var cost=cost;
    }
    console.log(cost);
}
if(tea=="masalatea"){
    var cost=20; 
    if(add=="extra sugar"){
        var cost =cost+2.5;
    }
    else if(add=="extra milk"){
        var cost=cost+5;
    }
    else if(add="no add-on"){
        var cost=cost;
    }
    console.log(cost);
}
if(tea=="gingertea"){
    var cost=25; 
    if(add=="extra sugar"){
        var cost =cost+2.5;
    }
    else if(add=="extra milk"){
        var cost=cost+5;
    }
    else if(add="no add-on"){
        var cost=cost;
    }
    console.log(cost);
}



