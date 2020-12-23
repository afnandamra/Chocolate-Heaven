function myFunction() {
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