function numberFunction() {
    var n=prompt('How many chocolates can you eat?');
    while(n==='' || n===null){
        n=prompt('How many chocolates can you eat?');
    }
    for(var i=0; i<=n; i++){
        document.write('<p>'+i+'. '+'<img src="Images/number.jpg" height="100px" align="middle">'+'</p>');
    }
}