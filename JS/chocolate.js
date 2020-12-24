var n=prompt('What is your name?');
while(n==='' || n===null){
  n=prompt('What is your name?');
}
var c = confirm('Hello '+n+', Do you like chocoate?');
if (c == true) {
  alert('Good choice '+n+', everyone like chocolate!');
} else {
  alert('You just make me sad :( !');
}
