var n = valid(n, 'What is your name?');

var c = confirm('Hello '+n+', Do you like chocoate?');
if (c == true) {
  alert('Good choice '+n+', everyone like chocolate!');
} else {
  alert('You just make me sad :( !');
}

greeting();

//----------

function takeUserInput(message){
    return prompt(message);
}

function greeting(){
var today= new Date();
var t = today.getHours();
var greeting;

if (t > 18){
    greeting='Good Evening, ';
} else if (t > 12){
    greeting='Good Afternoon, ';
} else if (t > 6){
    greeting='Good Morning, ';
} else {
    greeting='Welcome, ';
}

return document.write('<h2>' + greeting + n + '!' + '</h2>');
}

function valid(userName, message){
    while( userName === undefined || userName === '' || userName === null){
        userName = takeUserInput(message);
    }
    return userName;
}

function chooseChoc() {
    var m=confirm("If Milk press ok!");
    if(m==true) {
        alert('Sounds delicious!');
    }else{
        var d=confirm("If Dark press ok!");
            if(d==true) {
                alert('Sounds delicious!');
            }else{
                var w=confirm("If White press ok!");
                if(w==true){
                    alert('Sounds delicious!');
                }
            }
    }
}

function howMany() {
    var n=prompt('How many chocolates can you eat?');
    while(n==='' || n===null){
        n=prompt('How many chocolates can you eat?');
    }
    for(var i=0; i<=n; i++){
        document.write('<p>'+i+'. '+'<img src="Images/number.jpg" height="100px" align="middle">'+'</p>');
    }
}