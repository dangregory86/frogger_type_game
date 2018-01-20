/* *This is the player class where all the enemy details and functions are held. */

class Player {
  /*
  * @description the constructor to create an enemy objects
  * @params {int, int}it takes an int for which row the enemy will occupy as
  * well as the speed of that enemy.
  */
  constructor() {
    this.sprite = 'images/char-boy.png';
    this.startX = CANWIDTH / 2 - SQUAREWIDTH / 2;
    this.startY = CANHEIGHT - (2 * SQUAREHEIGHT - 1 + 40);
    this.x = this.startX;
    this.y = this.startY;
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
        this.x -= SQUAREWIDTH;
        if (this.x < 0) {
          this.x = 0;
        }
        break;
      case 'right':
        this.x += SQUAREWIDTH;
        if (this.x > CANWIDTH - 1) {
          this.x = CANWIDTH - 100;
        }
        break;
      case 'up':
        this.y -= SQUAREHEIGHT;
        if (this.y < -10) {
          this.y = -10;
        }
        this.score();
        break;
      case 'down':
        this.y += SQUAREHEIGHT;
        if (this.y > CANHEIGHT - (2 * SQUAREHEIGHT + 40)) {
          this.y = CANHEIGHT - (2 * SQUAREHEIGHT - 1 + 40);
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
    this.x = this.startX;
    this.y = this.startY;
  }
}
