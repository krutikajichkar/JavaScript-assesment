var btn = document.getElementById('step1_nextbtn');
var step2 = document.getElementById('form2');
var step1 = document.getElementById('form1');
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var email = document.getElementById('email');



btn.addEventListener('click',function(){
    step1.style.display="none";
    step2.style.display="block";
});

