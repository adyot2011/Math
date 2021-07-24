player1_name = localStorage.getItem("player1_name_input");
player2_name = localStorage.getItem("player2_name_input");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1_name").innerHTML = player1_name + " : ";
document.getElementById("player_2_name").innerHTML = player2_name + " : ";

document.getElementById("player_1_score").innerHTML = player1_score;
document.getElementById("player_2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;

function send()
{
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in Lower case = " + word);

    letter_1 = word.charAt(1);
    console.log( letter_1);
    
    length_word = Math.floor(word.length/2);
    letter_2 = word.charAt(length_word);
    console.log(letter_2);

    length_minus_1 = word.length - 1;
    letter_3 = word.charAt(length_minus_1);
    console.log(letter_3);
}