const hit = document.getElementById('hitme');
let maintitle = document.querySelector('.maintitle');
let mood = document.querySelector('.mood');
let word = document.querySelector('.word');

let count = 0;
    
hit.addEventListener('click', function(){
   
    count++;
    //console.log('yeah-' + count);
    maintitle.innerHTML = 'yeah-'+count;
    mood.innerHTML = moodSetter(count);
    word.innerHTML = saysomething(count);

});

mood.innerHTML = "Indifference";
word.innerHTML = ".....";

let saysomething = function(ct){
    if (ct == 10) {
        return "You already clicked 10 times!";
    } else if (ct == 22) {
        return "It's already 22 times! How come you haven't feel bored yet?";
    } else if (ct == 34) {
        return "C'mon, you really have a lot of times don't you? 34 times?! Really?!";
    } else if (ct >= 45) {
        return "I give up! I give up! Stop clicking already!!"; 
    } else {
        return ".....";
    }
}

let moodSetter = function(x) {
    if ((x >= 15) &&  ( x < 20)) {
        return "Anxious";
    } else if ((x >= 20) && ( x < 30)) {
        return "Upset";
    } else if ((x >= 30) && ( x < 45)) {
        return "Mad";
    } else if ( x >= 45 ) {
        return "Despair";
    } else {
        return 'Indifferent'
    }
}