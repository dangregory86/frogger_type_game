//all the variables
let saved = 0;
let level = 1;
let gameOver = true;
let timer;
let started = false;
const canWidth = ctx.canvas.clientWidth;
const canHeight = ctx.canvas.clientHeight;
const squareHeight = 83;
const squareWidth = 101;
const en1 = new Enemy(1, 75);
const en2 = new Enemy(2, 85);
const en3 = new Enemy(3, 100);
const player = new Player();
let allEnemies = [];
allEnemies.push(en1, en2, en3);
const modal = document.getElementById("myModal");
const characterSelect = $('.highlight');

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
function restartYes() {
  gameOver = false;
  started = true;
  modal.style.display = "none";
  saved = 0;
  level = 1;
  updateScore();
  updateLevel();
  clearInterval(timer);
  startTimer(new Date);
}

/*
  * @Description. a function to increase the level after ever 10 saved people
  */
function increaselevel() {
  allEnemies.forEach(function(enemy) {
    enemy.speedUp();
  });
  level++;
  updateLevel();
}

// @description set interval taken from a stack overflow thread
function startTimer(time) {
  $('.Timer').text('You have survived for: 0 Seconds')
  timer = setInterval(function() {
    $('.Timer').text("You have survived for: " + Math.round((new Date - time) / 1000, 0) + " Seconds");
  }, 1000);
}

/* * @Description. a function to highlight the current character on the modal */
characterSelect.mouseenter(function(event) {
  $(this).css('border-style', 'solid');
  $(this).css('border-color', 'blue');
  $(this).css('border-width', '3px');
});

characterSelect.mouseleave(function(event) {
  $(this).css('border-style', 'none');
});

characterSelect.mousedown(function(event) {
  current = $(this);
  characterSelect.each(function(index) {
    $(this).removeClass('dark');
  });
  $(this).addClass('dark');
  player.sprite = $(this).attr('src');
});

/* * @Description. a function to update the score text in the HTML */
function updateScore() {
  console.log(saved);
  $('#score').text('You have got ' + saved + ' people across');
}

/* * @Description. a function to update the level text in the HTML */
function updateLevel() {
  $('#level').text('Level: ' + level);
}

/* * @Description. a function to update the modal text on game over */
function updateModal() {
  $('#modal-text').html('<h2>GAME OVER!!</h2><p>You survived to level ' + level + '<br>You managed to save ' + saved + ' people!!<br>Select a character and try again!!');
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  player.handleInput(allowedKeys[e.keyCode]);
});
