function addUser()
{
   username_1= document.getElementById("player1_name_input").value;
   username_2 = document.getElementById("player2_name_input").value;

    localStorage.setItem("player1_name_input",username_1);
    localStorage.setItem("player2_name_input",username_2);

    window.location = "quiz_game_page.html";
}