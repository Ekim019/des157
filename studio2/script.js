
var water = document.getElementById('water');
var ipad = document.getElementById('ipad');
var pencilcase = document.getElementById('pencilcase');

var overlay1 = document.getElementById('overlay1');
var overlay2 = document.getElementById('overlay2');
var overlay3 = document.getElementById('overlay3');

var close = document.getElementById('close');
var close2 = document.getElementById('close2');
var close3 = document.getElementById('close3');
// waterbottle display of click on and off
water.addEventListener('click', function () {
    // display the Back pack in the main page.
    overlay1.style.display = 'block';

});
close.addEventListener('click', function () {
    //clsose the waterbottle display and go back to  main page that backapck.
    overlay1.style.display = "none";
});

// ipad didplay for click on and off
ipad.addEventListener('click', function () {
    overlay2.style.display = "block";
});

close2.addEventListener('click', function () {
    overlay2.style.display = "none";
});

// pencilcase display for click on and off
pencilcase.addEventListener('click', function () {
    overlay3.style.display = "block";
});

close3.addEventListener('click', function () {
    overlay3.style.display = "none";
});
