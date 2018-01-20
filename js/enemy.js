/* *This is the enemy class where all the enemy details and functions are held. */

class Enemy {
  /*
  * @description the constructor to create an enemy objects
  * @params {int, int}it takes an int for which row the enemy will occupy as
  * well as the speed of that enemy.
  */
  constructor(y, speed) {
    this.sprite = 'images/enemy-bug.png';
    this.x = -squareWidth;
    this.y = y * squareHeight - 30;
    this.speed = speed;
    this.minSpeed = 75;
  }

  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < canWidth + 30) {
      this.x += (this.speed * dt);
    } else {
      this.speed = Math.floor(Math.random() * 100) + this.minSpeed;
      this.x = -squareWidth;
    }
  };

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  /*
  * @Description. a function to increase the speed of the enemy
  */
  speedUp() {
    this.minSpeed *= 1.1;
  }

  /*
  * @Description. This function sets all the enemy variables back to initial.
  */
  resetEn() {
    this.x = -squareWidth;
  }
}
