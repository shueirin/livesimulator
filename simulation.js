// Displays
const daysleft = document.querySelector('.daysleft');
const mood = document.querySelector('.mood');
const stamina = document.querySelector('.stm');
const academy = document.querySelector('.acd');
const money = document.querySelector('.mny');

// Buttons
const btnstudy = document.querySelector('.study');
const btneat = document.querySelector('.eat');
const btnwork = document.querySelector('.work');
const btnsleep = document.querySelector('.sleep');
const btnreset = document.querySelector('.reset');

// Statistic Values
const stat = {
    'ap-study' : 2,
    'ap-eat' : 2,
    'ap-work' : 3,
    'daysleft' : 10,
    'stamina' : 100,
    'academic' : 30,
    'money' : 300,
    'ap' : 5
}

// Actions 
btnstudy.addEventListener('click', function(){
    console.log('Study');
    studyAction(stat['ap-study']);
    displayStat();
});
btneat.addEventListener('click', function(){
    console.log('Eat');
    eatAction(stat['ap-eat']);
    displayStat();
});
btnwork.addEventListener('click', function(){
    console.log('Study');
    workAction(stat['ap-work']);
    displayStat();
});
btnsleep.addEventListener('click', function(){
    console.log('Sleep');
    displayStat();
});
btnreset.addEventListener('click', function(){
    console.log('Reset');
    displayStat();
});


// Display Stats  pon log
let displayStat = function(){
    console.log(stat);
    displayStamina();
    displayAcademy();
    displayMoney();
}

// display Stamina stats
let displayStamina = function(){
    stamina.innerHTML = stat['stamina']; 
}
let displayAcademy = function(){
    academy.innerHTML = stat['academic']; 
}
let displayMoney = function(){
    money.innerHTML = stat['money']; 
}


// Eat Action
let eatAction = function(eatAp){
    stat['ap'] -= eatAp;
    stat['stamina'] += 30;
    stat['academic'] -= 2;
    stat['money']-= 70;
}

// Work Action
let workAction = function(workAp){
    stat['ap'] -= workAp;
    stat['stamina'] -= 75;
    stat['academic'] += 4;
    stat['money']-= 60;
}

// Study Action
let studyAction = function(studyAp){
    stat['ap'] -= studyAp;
    stat['stamina'] -= 45;
    stat['academic'] += 7;
    stat['money']-= 120;
}


// Initialize 
let initgame = function(){
    stat['stamina'] = 100;
    stat['academic'] = 30;
    stat['money'] = 300;
    stat['ap'] = 5;
    stat['daysleft'] = 10;
    displayStamina();
    displayAcademy();
    displayMoney();
}

initgame();