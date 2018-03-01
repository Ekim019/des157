
var myBtn = document.getElementById('myBtn');
var myModal= document.getElementById('myModal');
var close = document.getElementById('close');

myBtn.addEventListener('click',function(){
myModal.style.display = 'block';
});
close.addEventListener('click', function() {
  //clsose the waterbottle display and go back to  main page that backapck.
  myModal.style.display = "none";
});
