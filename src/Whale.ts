module MyGame {

    export class Whale extends GridSprite {

        direction: Direction;

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'whale', 0);

            this.game.physics.arcade.enableBody(this);

            this.direction = Direction.Up;
            this.animations.add('turnRight', [0, 1, 2], 10, false);
            this.animations.add('turnDown', [2, 3, 4], 10, false);
            this.animations.add('turnLeft', [4, 5, 6], 10, false);
            this.animations.add('turnUp', [6, 7, 0], 10, false);

            this.inputEnabled = true;
            this.events.onInputDown.add(this.clickListener, this);

            game.add.existing(this);

        }

        update() {

        }

        clickListener() {
            switch (this.direction) {
                case Direction.Up:
                    // Turn to right.
                    console.log("turning right");
                    this.animations.play('turnRight');
                    this.direction = Direction.Right;
                    break;
                case Direction.Right:
                    // Turn down.
                    console.log("turning down");
                    this.animations.play('turnDown');
                    this.direction = Direction.Down;
                    break;
                case Direction.Down:
                    // Turn left.
                    console.log("turning left");
                    this.animations.play('turnLeft');
                    this.direction = Direction.Left;
                    break;
                case Direction.Left:
                    // Turn up.
                    console.log("turning up");
                    this.animations.play('turnUp');
                    this.direction = Direction.Up;
                    break;
            }
        }

    }

}