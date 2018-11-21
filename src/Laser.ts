module MyGame {

    export class Laser extends GridSprite {

        direction: Direction;
        bounceDirection: Direction;
        strength: number;

        constructor(game: Phaser.Game, x: number, y: number, direction: Direction, bounceDirection: Direction, strength: number) {
            if (direction === Direction.None || bounceDirection === Direction.None || direction === bounceDirection) {
                super(game, x, y, 'laserHalf', 0);
                this.initializeHalfLaser(direction, bounceDirection);
            }
            else if (direction !== HelperFunctions.getOppositeDirection(bounceDirection)) {
                super(game, x, y, 'laserAngle', 0);
                this.initializeBouncedLaser(direction, bounceDirection);
            }
            else {
                super(game, x, y, 'laserFull', 0);
                this.initializeFullLaser(direction, bounceDirection);


            }

            this.strength = strength;
            this.direction = direction;
            this.bounceDirection = bounceDirection;

            this.game.physics.arcade.enableBody(this);
            game.add.existing(this);

        }

        initializeHalfLaser(direction: Direction, bounceDirection: Direction) {
            if (direction == Direction.Up || bounceDirection == Direction.Up) {
                this.angle = 0;
            }
            else if (direction == Direction.Right || bounceDirection == Direction.Right) {
                this.angle = 90;
            }
            else if (direction == Direction.Down || bounceDirection == Direction.Down) {
                this.angle = 180;
            }
            else if (direction == Direction.Left || bounceDirection == Direction.Left) {
                this.angle = 270;
            }
        }

        initializeBouncedLaser(direction: Direction, bounceDirection: Direction) {
            if (direction == Direction.Down && bounceDirection == Direction.Right ||
                direction == Direction.Right && bounceDirection == Direction.Down) {
                this.angle = 0;
            }
            else if (direction == Direction.Down && bounceDirection == Direction.Left ||
                direction == Direction.Left && bounceDirection == Direction.Down) {
                this.angle = 90;
            }
            else if (direction == Direction.Up && bounceDirection == Direction.Left ||
                direction == Direction.Left && bounceDirection == Direction.Up) {
                this.angle = 180;
            }
            else if (direction == Direction.Up && bounceDirection == Direction.Right ||
                direction == Direction.Right && bounceDirection == Direction.Up) {
                this.angle = 270;
            }
        }

        initializeFullLaser(direction: Direction, bounceDirection: Direction) {
            if (direction === Direction.Up || direction === Direction.Down ||
                bounceDirection === Direction.Up || bounceDirection === Direction.Down) {
                this.angle = 0;
            }
            else {
                this.angle = 90;
            }
        }
    }
}