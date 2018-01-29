console.log('reading');

document.f.onsubmit = processForm;

function processForm() {
  results.setAttribute('class', 'show');
  var userName = document.f.userName.value;
  var userAdj = document.f.userAdj.value;
  var userNoun = document.f.userNoun.value;
  var userBff = document.f.userBff.value;
  var userColor=document.f.userBff.value;

  var myMsg = document.getElementById("myMsg");
  switch (useColor){
    case "yellow":
    myMsg.style.color="yellow";
    break;
    case"blue":
    myMsg.style.color="blue";
    break;
    default:
    myMsg.style.color="white";


  }

if (userBff === "Hannah") {
  myMsg.innerHTML = "I have Best friend name Hannah too!"
  return false;
} else {
  myMsg.innerHTML = "Today, I am going to ask" + userName + "to come to my house." + "!<br> she/he sits next to me."
  +"Everytime, I say 'hello'to her/him. she/he is just ignore me.I want to be close with"+userName+
  "she/he wears the same"+usercolor+"t-shirts with jeans every single day."+"when I ask"+userAdj+
  "myfriend"+userBff+"why is"+userName+"so quite?"+userBff+"looks at me strangerly and"+userBff+
  "<em>tell me,"+userName+"died last year!</em>! I point to where"+userName+"sits, there is nobody"+
  "I go home afterschool. At the door, someone is knocking in the front of my house. I shout'who is it?!', no one answers.I turn around."+
  "someone keeps knocking on my door. I get frustrated. I open the door."+userName+"is there...."+userName+
  "says,<em>'Hello! trick....A....Treat....BOO!!'</em>"+"I pass out in front of the door.I wake up on mybed.I realize it is Halloween and"+
  userName+"cameback that day."
  return false;
}
}
