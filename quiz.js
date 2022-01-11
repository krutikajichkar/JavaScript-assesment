const results = [
    {
    question: "Q1. Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
    a:"Microsoft",
    b:"Atari",
    c:"Apple",
    d:"Commodore",
    correctans:"q3"
},
{question: "Q2. When Gmail first launched, how much storage did it provide for your email?",
a:"1GB",
b:"512MB",
c:"5GB",
d:"Unlimited",
correctans:"q1"},

{question: "Q3. HTML is what type of language?",
a:"Macro Language",
b:"Programming language",
c:"Markup Language",
d:"Scripting language",
correctans:"q3"},

{question: "Q4. What amount of bits commonly equals one byte?",
a:"2",
b:"8",
c:"64",
d:"18",
correctans:"q2"},

{question: "Q5. If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
a:"Javascript",
b:"Python",
c:"C++",
d:"Binary",
correctans:"q4"}];

let question1 = document.querySelectorAll('.section-1');

question1.forEach(function(Que1){
    if(Que1.classList.contains("que1")){
        Que1.innerHTML= results[0].question;
    }
    else if(Que1.classList.contains('op1-1'))
    {
        Que1.innerHTML=results[0].a;
    }
    else if(Que1.classList.contains('op2-1'))
    {
        Que1.innerHTML=results[0].b;
    }
    else if(Que1.classList.contains('op3-1'))
    {
        Que1.innerHTML=results[0].c;
    }
    else if(Que1.classList.contains('op4-1'))
    {
        Que1.innerHTML=results[0].d;
    }

    
});

let question2 = document.querySelectorAll('.section-2');

question2.forEach(function(Que){
    if(Que.classList.contains("que2")){
        Que.innerHTML= results[1].question;
    }
    else if(Que.classList.contains('op1-2'))
    {
        Que.innerHTML=results[1].a;
    }
    else if(Que.classList.contains('op2-2'))
    {
        Que.innerHTML=results[1].b;
    }
    else if(Que.classList.contains('op3-2'))
    {
        Que.innerHTML=results[1].c;
    }
    else if(Que.classList.contains('op4-2'))
    {
        Que.innerHTML=results[1].d;
    }

});

let question3 = document.querySelectorAll('.section-3');

question3.forEach(function(Que3){
    if(Que3.classList.contains("que3")){
        Que3.innerHTML= results[2].question;
    }
    else if(Que3.classList.contains('op1-3'))
    {
        Que3.innerHTML=results[2].a;
    }
    else if(Que3.classList.contains('op2-3'))
    {
        Que3.innerHTML=results[2].b;
    }
    else if(Que3.classList.contains('op3-3'))
    {
        Que3.innerHTML=results[2].c;
    }
    else if(Que3.classList.contains('op4-3'))
    {
        Que3.innerHTML=results[2].d;
    }

});

let question4 = document.querySelectorAll('.section-4');

question4.forEach(function(Que4){
    if(Que4.classList.contains("que4")){
        Que4.innerHTML= results[3].question;
    }
    else if(Que4.classList.contains('op1-4'))
    {
        Que4.innerHTML=results[3].a;
    }
    else if(Que4.classList.contains('op2-4'))
    {
        Que4.innerHTML=results[3].b;
    }
    else if(Que4.classList.contains('op3-4'))
    {
        Que4.innerHTML=results[3].c;
    }
    else if(Que4.classList.contains('op4-4'))
    {
        Que4.innerHTML=results[3].d;
    }

});

let question5 = document.querySelectorAll('.section-5');

question5.forEach(function(Que5){
    if(Que5.classList.contains("que5")){
        Que5.innerHTML= results[4].question;
    }
    else if(Que5.classList.contains('op1-5'))
    {
        Que5.innerHTML=results[4].a;
    }
    else if(Que5.classList.contains('op2-5'))
    {
        Que5.innerHTML=results[4].b;
    }
    else if(Que5.classList.contains('op3-5'))
    {
        Que5.innerHTML=results[4].c;
    }
    else if(Que5.classList.contains('op4-5'))
    {
        Que5.innerHTML=results[4].d;
    }

});

let submit = document.getElementById('submit-btn');


  let getanswer = () => {
        
    return score;

};



let showresult = document.getElementById('modal-wrapper');
submit.addEventListener('click',() => {
    let score = 0 ;

    let options1 = document.querySelectorAll('.options-1');
    options1.forEach((opt1) => {
        if(opt1.checked && opt1.id === results[0].correctans )
        {
            score++;
        }
    })

    let options2 = document.querySelectorAll('.options-2');
    options2.forEach((opt2) => {
        if(opt2.checked && opt2.id === results[1].correctans)
        {
            score++;
        }
    })

    let  options3 = document.querySelectorAll('.options-3');
    options3.forEach((opt3) => {
        if(opt3.checked && opt3.id === results[2].correctans)
        {
            score++;
        }
    })

    let options4 = document.querySelectorAll('.options-4');
    options4.forEach((opt4) => {
        if(opt4.checked && opt4.id === results[3].correctans)
        {
            score++;
        }
    })

    let options5 = document.querySelectorAll('.options-5');
    options5.forEach((opt5) => {
        if(opt5.checked && opt5.id === results[4].correctans)
        {
            score++;
        }
    })

    showresult.style.display = "block";
    let getresult = document.getElementById('result');
    getresult.innerHTML=`${score}/5`;
    
});

