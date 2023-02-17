
// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {

    // Make random number between 1 and 3

    let weNeedAName = Math.ceil(Math.random() * 3);

    // if number is 1, return rock
    if(weNeedAName == 1){
        return "rock";
    } else if (weNeedAName == 2){
    // if number is 2, return scissors
        return "scissors";
    } else {
        // else return paper
        return "paper";
    }

};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {

    let winner = "";

    // Decide Who Wins

        // if me == opponent
        if(me == opponent){
            winner = "Tie!";
        }else if(me == "paper"){
            // If me is paper and opp is rock, I win
            if(opponent == "rock"){
                winner = "I win!"
            }else{
                winner = "Computer Wins!"
            }
        }else if(me == "rock"){
            // If me is paper and opp is rock, I win
            if(opponent == "paper"){
                winner = "Computer Wins!"
            }else{
                winner = "I win!"
            }
        }else{
            // Assume I picked scissors
            if(opponent == "rock"){
                winner = "Computer Wins!"
            }else{
                winner = "I win!"
            }
        }
        

    // Display the winner
        document.getElementById('decision').innerText = winner;
    // Display what the computer picked
        document.getElementById('computerSelection').innerText = opponent;
};



document.addEventListener('DOMContentLoaded',function(){

    // Bind a click event onto each of the three buttons. 

    document.querySelector('#scissors').addEventListener('click',function(e){
        e.preventDefault();
        compare("scissors",computerChoice())
    });

    

});
