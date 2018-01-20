/* *This is the player class where all the enemy details and functions are held. */

class Player {
  /*
  * @description the constructor to create an enemy objects
  * @params {int, int}it takes an int for which row the enemy will occupy as
  * well as the speed of that enemy.
  */
  constructor() {
    this.sprite = 'images/char-boy.png';
    this.x = canWidth / 2 - squareWidth / 2;
    this.y = canHeight - (2 * squareHeight - 1 + 40);
  }

  update(direction) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
  };

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  /* * @Description the function to move the player character in the direction
* pressed on the keyboard ensuring it can't leave the boundries of the play
* area.
* @Params {string} receives a string from the keyUp event listener. */
  handleInput(direction) {
    switch (direction) {
      case 'left':
        this.x -= squareWidth;
        if (this.x < 0) {
          this.x = 0;
        }
        break;
      case 'right':
        this.x += squareWidth;
        if (this.x > canWidth - 1) {
          this.x = canWidth - 100;
        }
        break;
      case 'up':
        this.y -= squareHeight;
        if (this.y < -10) {
          this.y = -10;
        }
        this.score();
        break;
      case 'down':
        this.y += squareHeight;
        if (this.y > canHeight - (2 * squareHeight + 40)) {
          this.y = canHeight - (2 * squareHeight - 1 + 40);
        }
        break;
    }
  }

  /* * @Description. A function to see if the character has reached the scoring zone. */
  score() {
    if (this.y < 0) {
      ++saved;
      updateScore(saved);
      this.resetPl();
      if (saved % 5 === 0) {
        increaselevel();
      }
    }
  }
  /*
  * @Description. this function resets the player back to te original posistion
  */
  resetPl() {
    this.x = canWidth / 2 - squareWidth / 2;
    this.y = canHeight - (2 * squareHeight - 1 + 40);
  }
}
