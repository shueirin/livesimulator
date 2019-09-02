// 7 Days Live Simulation
// Everyday you got 5 action point
// Everyday you smust do some actions: Eat, Study, Work 
// The actions will cost action point and it will affect to your stamina, academic, and money
// Eat will cost 2 AP, reduce 300 money, add 50 stamina
// Study will cost 3 AP, reduce 500 money, reduce 30 stamina, add academic 10
// Work will cost 3 AP, add 1500 money, reduce 50 stamina, add academic 2
// If Action Point exhausted, all action button will be disabled, sleep button will be displayed
// If sleep button clicked, it will reduce the Action Point back to 5.
// Sleep will reset AP back to 5, add 120 stamina, reduce academic 3, days left will be decreased 1.
// When days left is 0, it's mean game over
// When your stamina is 0, it's also mean game over
// When money is 0, study and eat button will be disabled, if stamina is not 0 yet, only display work
// when academic is 0, nothing will happen, but it will affect final message.
// At the end of the 7 days, disabled all button, display the final message.
// Final message will be different depending the final stats.
// Mood: Hungry, Broke, Happy, Sad, Excited <- change depends on which stats. 


const mood = document.querySelector('.mood');
const staminastat = document.querySelector('.staminastat');
const moneystat = document.querySelector('.moneystat');
const academystat = document.querySelector('.academystat');
const resultbox = document.querySelector('.resultbox');
const finalmsgtitle = document.querySelector('.finalmsgtitle');
const finalmsgbody = document.querySelector('.finalmsgbody');
const daycounter = document.querySelector('.daycounter');
const resetgame = document.querySelector('.resetgame');

const eatbtn = document.getElementById('eatbtn');
const workbtn = document.getElementById('workbtn');
const studybtn = document.getElementById('studybtn');
const sleepbtn = document.getElementById('sleepbtn');

// Statistic Box
stat = {
    'stamina' : 200,
    'money' : 1000,
    'academy' : 5,
    'ap' : 5,
    'dayleft' : 5
}

// === Action buttons ===
eatbtn.addEventListener('click', function(){
    console.log('eat!');
    eatAction();
    displayStat();
    checkAP();
});

workbtn.addEventListener('click', function(){
    console.log('work!');
    workAction();
    displayStat();
    checkAP();
});

studybtn.addEventListener('click', function(){
    console.log('study!');
    studyAction();
    checkAP();
    displayStat();
});

sleepbtn.addEventListener('click', function(){
    console.log('sleep!');
    sleepAction();
    checkAP();
    displayStat();    
});

resetgame.addEventListener('click', function(){
    siminit();
    checkAP();
    displayStat();
    resetButtonDaiy();
    resultbox.classList.add('disabled');

});

let siminit = function(){
    stat = {
        'stamina' : 200,
        'money' : 1000,
        'academy' : 5,
        'ap' : 5,
        'dayleft' : 5
    }
    mood.innerHTML = "Hello";
}

let displayStat = function(){
    console.log(stat);
    staminastat.innerHTML = stat['stamina'];
    academystat.innerHTML = stat['academy'];
    moneystat.innerHTML = stat['money'];
    daycounter.innerHTML = stat['dayleft'];
    setMood();
}

// eat operation 
let eatAction = function(){
    stat['stamina'] += 50;
    stat['ap']-=2;
    stat['money']-=300;
}

// work operation
let workAction = function(){
    // cost 3 AP, add 1500 money, reduce 50 stamina, add academic 2
    stat['stamina']-= 100;
    stat['money']+= 1500;
    stat['academy']+= 2;
    stat['ap']-=3;
}

// study operation
let studyAction = function(){
    //cost 3 AP, reduce 500 money, reduce 30 stamina, add academic 10
    stat['stamina']-= 30;
    stat['money']-= 500;
    stat['academy']+= 10;
    stat['ap']-=3;
}

//sleep operation
let sleepAction = function(){
    stat['stamina']+= 120;
    stat['ap'] = 5;
    stat['dayleft']-= 1;
    resetButtonDaiy();
}

// check AP
let checkAP = function(){
    
    if( stat['ap'] <= 0 ) {
        stopDailyAction();
    }
    if( (stat['dayleft'] <= 0)) {
        haltAllButton();
        resultbox.classList.remove('disabled');
    }
    if( stat['stamina'] <= 0) {
        studybtn.classList.add('disabled');
        workbtn.classList.add('disabled'); 
    } 
    if (stat['money'] <= 0) {
        studybtn.classList.add('disabled');
        eatbtn.classList.add('disabled');
    }
    if( stat['academy'] <= 0){
        workbtn.classList.add('disabled');
    }
    
}

// stopDailyAction
let stopDailyAction = function(){
    eatbtn.classList.add('disabled');
    workbtn.classList.add('disabled');
    studybtn.classList.add('disabled');
    sleepbtn.classList.remove('disabled');
}

// resetButton 
let resetButtonDaiy = function(){
    eatbtn.classList.remove('disabled');
    workbtn.classList.remove('disabled');
    studybtn.classList.remove('disabled');
    sleepbtn.classList.add('disabled');
} 

// haltAllAction 
let haltAllButton = function(){
    eatbtn.classList.add('disabled');
    workbtn.classList.add('disabled');
    studybtn.classList.add('disabled');
    sleepbtn.classList.add('disabled');
}

// setMood 
let setMood = function() {
    let themood = "Normal";
    if( stat['stamina'] <= 0) {
        themood = 'Too Tired!'
    } 
    if (stat['money'] <= 0) {
        themood = 'Broke!'
    }
    if( stat['academy'] <= 0){
        themood = 'Falling Out'
    } 
    mood.innerHTML = themood;
}

// APbarCheckDisplay
let APbarCounter = function(ap){
  let maxAP = ap;
  for (let i = 1; i <= maxAP; i++){
      document.getElementById('act'+i).classList.add('disabled');
  }
}
