var today= new Date();
var t = today.getHours();
var greeting;

if (t > 18){
    greeting='Good Evening!';
} else if (t > 12){
    greeting='Good Afternoon!';
} else if (t > 6){
    greeting='Good Morning!';
} else {
    greeting='Welcome!';
}

document.write('<h2>' + greeting + '</h2>');