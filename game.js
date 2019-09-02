const resulttext = document.querySelector('.resulttext');
const yourpickedhand = document.querySelector('.yourPickedHand');
const submitMyHand = document.querySelector('.submitMyHand');
const resetGame = document.querySelector('.resetGame');
const cpuReady = document.querySelector('.cpuReady');
const youReady = document.querySelector('.youReady')
const cpuscore = document.querySelector('.cpuscore');
const playerscore = document.querySelector('.playerscore');
const cpupaper = document.querySelector('.cpupaper');
const cpuscissors = document.querySelector('.cpuscissors');
const cpurock = document.querySelector('.cpurock');
const pscissors = document.querySelector('.pscissors');
const ppaper = document.querySelector('.ppaper');
const prock = document.querySelector('.prock');
const drawcount = document.querySelector('.drawcount');


let score = {
    'cpu': 0,
    'player': 0,
    'scissors': 0,
    'paper': 0,
    'rock': 0,
    'pscissors': 0,
    'ppaper': 0,
    'prock' : 0,
    'draw' : 0
}


submitMyHand.addEventListener('click', function(){

   // 1. initialize the game, reset states
   console.log('Game Initialized');
   
   // 2. randomize and display cpu's hand
   let currentCPUhand =  acceptCPU();
   

   switch (currentCPUhand) {
        case "Scissors":
            score['scissors']++;
            break;
        case "Paper":
            score['paper']++;
            break;
        case "Rock":
            score['rock']++;
            break;
        default:
            score['draw'];
            break;
   }

   
   // 3. display user's picked hand
   if ( acceptmyhand()  !== '') {
        youReady.innerHTML = "Your hand is " + acceptmyhand();  
        switch ( acceptmyhand() ) {
            case "Scissors":
                score['pscissors']++;
                break;
            case "Paper":
                score['ppaper']++;
                break;
            case "Rock":
                score['prock']++;
                break;
            default:
                score['draw'];
                break;
        }
        
    


        // 4. compare the cpu and user' hand, display the result
        let result = battleHands( currentCPUhand, acceptmyhand());

        cpuReady.innerHTML = "CPU hand is " + currentCPUhand;
        cpuscissors.innerHTML = score['scissors'];
        cpupaper.innerHTML = score['paper'];
        cpurock.innerHTML = score['rock'];     
        pscissors.innerHTML = score['pscissors'];
        ppaper.innerHTML = score['ppaper'];
        prock.innerHTML = score['prock'];
        resulttext.innerHTML = result;
        cpuscore.innerHTML = score['cpu'];
        playerscore.innerHTML = score['player'];
        drawcount.innerHTML = score['draw'];

   } else {
        youReady.innerHTML = "Pick your hand first!";
   }   
  
   


});

let acceptCPU = function() {
    let thevalue = Math.floor((Math.random() * 3) + 1);
    switch(thevalue) {
        case 1:
           return "Scissors";
            break;
        case 2:
            return "Rock";
            break;
        case 3:
            return "Paper";
            break;
        default:
            return "default";
    } 
}

let initGame = function(){
    resulttext.innerHTML = "Ready to Bout!";
    cpuReady.innerHTML = "CPU is getting ready";
    youReady.innerHTML = "Prepare your choice";
    cpuscore.innerHTML = score['cpu'] = 0;
    playerscore.innerHTML = score['player'] = 0;
    cpuscissors.innerHTML = score['scissors']= 0;
    cpupaper.innerHTML = score['paper']= 0;
    cpurock.innerHTML = score['rock']= 0;
    ppaper.innerHTML = score['ppaper']=0;
    pscissors.innerHTML = score['pscissors']=0;
    prock.innerHTML = score['prock']=0;
    drawcount.innerHTML = score['draw']=0;
}

let acceptmyhand = function(myvalue) {
    myvalue = yourPickedHand.value;
        return myvalue;
}

let battleHands = function(x, y){
    // x = CPU
    // y = you
    let fightResult = '';
    if( (x == 'Scissors' && y == 'Paper') || ( x == 'Paper' && y == 'Rock') ||  (x == 'Rock' && y == 'Scissors') ) {
        fightResult = "YOU LOSE!";
        score['cpu']++;
    } else if (( x == 'Scissors' && y == 'Rock') || ( x == 'Paper' && y == 'Scissors')  ||   ( x == 'Rock' && y == 'Paper')) {
        fightResult = "YOU WIN!";
        score['player']++;
        
    } else {
        fightResult = "It's a DRAW!";
        score['draw']++;
    }
    return fightResult;
}   

initGame();

resetGame.addEventListener('click', function(){
    initGame();
});
