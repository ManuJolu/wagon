$(function(){

  $(document).on('keyup', function(event) {

    var keyPressed = event.key;
    var index1 = $('#player1_race > .active').index();
    var index2 = $('#player2_race > .active').index();

    if (index1 != 9 && index2 != 9){
      if (keyPressed === 'p'){
        var nextTD = $('#player1_race > .active').next('td');
        $('#player1_race > .active').removeClass('active');
        $(nextTD).addClass('active');
      };

      if (keyPressed === 'q'){
        var nextTD = $('#player2_race > .active').next('td');
        $('#player2_race > .active').removeClass('active');
        $(nextTD).addClass('active');
      };
    };

    if (index1 === 9){
      gagnant = "Joueur 1";
    };
    if (index2 === 9){
      gagnant = "Joueur 2";
    };
    alert("Congrats " + gagnant);
    location.reload();

  });
});
