"use strict";
//global elements
console.log('reading');

var results=document.getElementById("results");
var myMsg=document.getElementById("myMsg");
var userName = document.f.userName.value;
var userAdj = document.f.userAdj.value;
var userNoun = document.f.userNoun.value;
var userBff = document.f.userBff.value;
var userColor=document.f.userColor.value;
document.f.onsubmit = processForm;
document.f.onreset=resetForm;

function processForm() {
  results.setAttribute('class', 'show');

  var userName = document.f.userName.value;
  var userAdj = document.f.userAdj.value;
  var userNoun = document.f.userNoun.value;
  var userBff = document.f.userBff.value;
  var userColor=document.f.userColor.value;


if (userBff === "Hannah") {
  myMsg.innerHTML = "Today, I am going to ask " + userName + " to come to my house." + "<br> she/he sits next to me."
  +" Everytime, I say 'hello'to her/him. she/he is just ignore me. I want to be close with "+userName+
  "she/he wears the same "+userColor+" t-shirts with jeans every single day."+"when I ask "+userAdj+
  "myfriend "+userBff+" why is "+userName+" so quite? "+userBff+" looks at me strangerly and "+userBff+
  " <em>tell me,"+userName+"died last year!</em>! I point to where"+userName+"sits, there is nobody"+
  "I go home afterschool. At the door, someone is knocking in the front of my house. I shout'who is it?!', no one answers.I turn around."+
  " someone keeps knocking on my door. I get frustrated. I open the door. "+userName+" is there.... "+userName+
  " says,<em>'Hello! trick....A....Treat....BOO!!'</em>"+" I pass out in front of the door.I wake up on mybed. I realize it is Halloween and "+
  userName+" cameback that day.";

image.setAttribute("src","../images/Hannah.png");
image.setAttribute("width","300");
image.setAttribute("height","300");
image.setAttribute("alt","hannah")
  // return false;
} else {

  myMsg.innerHTML = "Today, I am going to ask " + userName + " to come to my house." + "<br> she/he sits next to me."
  +" Everytime, I say 'hello'to her/him. she/he is just ignore me. I want to be close with "+userName+
  "she/he wears the same "+userColor+" t-shirts with jeans every single day."+"when I ask "+userAdj+
  "myfriend "+userBff+" why is "+userName+" so quite? "+userBff+" looks at me strangerly and "+userBff+
  " <em>tell me,"+userName+"died last year!</em>! I point to where"+userName+"sits, there is nobody"+
  "I go home afterschool. At the door, someone is knocking in the front of my house. I shout'who is it?!', no one answers.I turn around."+
  " someone keeps knocking on my door. I get frustrated. I open the door. "+userName+" is there.... "+userName+
  " says,<em>'Hello! trick....A....Treat....BOO!!'</em>"+" I pass out in front of the door.I wake up on mybed. I realize it is Halloween and "+
  userName+" cameback that day.";
  // return false;
    myMsg.setAttribute('class','hide');
}
  return false;

}

function resetForm(){
  myMsg.innerHTML="";
  myMsg.setAttribute('class','hide');
  results.setAttribute('class','hide');

}
