const hitbutton = document.querySelector('.hitbutton');
const sleepbtn = document.querySelector('.sleepbutton');
const apleft = document.querySelector('.apleft');
const stamina = document.querySelector('.stamina');
const list = document.querySelector('.list');
const reset = document.querySelector('.reset');
const messageboard = document.querySelector('.messageboard');

let stat = {
    'stamina' : 6,
    'ap' : 8,
    'money' : 300
}

let messages = {
    'staminazero' : "Too tired to do anything. Take Rest!",
    'staminamax'  : "Condition Green! Ready to do anything!",
    'apzero'      : "Ap is depleted. Reset to retest."
}

let apcount = function(){
    // When stamina is 0
    if (stat['stamina'] <= 0) {
        messageboard.innerHTML = messages['staminazero'];
        sleepbtn.classList.remove('hidden');
    } else if (stat['stamina'] >= 15){
        stat['stamina'] = 15;
        messageboard.innerHTML = messages['staminamax'];
    } else {
        messageboard.innerHTML = '';
        sleepbtn.classList.add('hidden');
    }

    // When AP is 0
    if (stat['ap'] <= 0) {
        messageboard.innerHTML = messages['apzero'];
        hitbutton.classList.add('disabled');
        reset.classList.remove('hidden');
    } else {
        messageboard.innerHTML = '';
    }
}


// do something action
hitbutton.addEventListener('click', function(){
    initGraph();  // reset the bar images
    stat['ap']-=2 ; // decrease the total AP
    stat['stamina']-=3;
    displayGraph(stat['ap']); // display the graph again using the new total AP
    //console.log(stat['ap']);     
    apcount(); // check AP and other stats if it's under 0 or not 
    displayStat(); // update the stat board
});

//sleep action 
sleepbtn.addEventListener('click', function(){
    initGraph();
    stat['ap'] = 8;
    stat['stamina'] += 3;
    displayGraph(stat['ap']); 
    apcount();
    displayStat();
});

// reset action
reset.addEventListener('click', function(){
    initGame();
    initGraph(); 
    this.classList.add('hidden');
    hitbutton.classList.remove('disabled');
    stat['ap'] = 8;
    displayGraph(stat['ap']); 
    apcount(); 
    displayStat();
});

let displayStat = function () {
    let displayedNum;
    if (stat['ap'] <= 0) {
        displayNum = 0;
    } else {
        displayNum = stat['ap'];
    }
    apleft.innerHTML = displayNum;

    if (stat['stamina'] <= 0) {
        stamina.innerHTML = 0;
    } else {
        stamina.innerHTML = stat['stamina'];
    }
}

// remove the bar images
let initGraph = function(){
    let e = document.querySelector('.list');
    let child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
}
let displayGraph = function(x) {
    if( x > 0) {
        for (let i = 1; i <= x; i++){
            //console.log('Yeah-'+i);        
            let actlist = document.createElement('li');
            document.querySelector('.list').append(actlist);
        }
    }
}

let initGame = function(){
    displayGraph(stat['ap']);
    apleft.innerHTML = stat['ap'];
    stamina.innerHTML = stat['stamina'];
}

initGame();


