/*padahal window.addeventlistener supaya pas lagi prompt, html css udah ke load tapi apa boleh buat kalo lewat github preview (totally my fault, sorry) */
window.addEventListener('load', function() {
    function startGame() {
        var ulang = true;
        while (ulang == true) {
            var p = prompt('Choose between rock, paper, or scissors').toLowerCase();
            var com = Math.random();
            if (com < 0.34) {
                com = 'rock';
            } else if (com >= 0.34 && com < 0.67) {
                com = 'scissors';
            } else if (com >= 0.67) {
                com = 'paper';
            }
            var hasil = '';
            if (p == com) {
                hasil = 'DRAW!';
            } else if (p == 'rock') {
                hasil = (com == 'scissors') ? 'Player\'s Victory' : 'Computer\'s Victory';
            } else if (p == 'scissors') {
                hasil = (com == 'paper') ? 'Player\'s Victory' : 'Computer\'s Victory';
            } else if (p == 'paper') {
                hasil = (com == 'rock') ? 'Player\'s Victory' : 'Computer\'s Victory';
            } else {
                hasil = 'INVALID! Please enter the input that has been provided!';
            }
            alert('Player\'s pick: ' + p.toUpperCase() + ', Computer\'s pick: ' + com.toUpperCase() + '\nAnd from these choices the results are ' + hasil);
            ulang = confirm('Wanna play again?');
        }
        alert('Thanks for playing my simple game, lmao :)');
    }

    startGame();
});
