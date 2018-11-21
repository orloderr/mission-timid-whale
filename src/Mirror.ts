module MyGame {

    export class Mirror extends GridSprite {

        direction: Direction;

        constructor(game: Phaser.Game, x: number, y: number, d: Direction) {

            super(game, x, y, 'mirror', 0);

            this.game.physics.arcade.enableBody(this);

            this.direction = d;
            if (d == Direction.Left) {
                this.angle = 0;
            }
            else {
                this.angle = 90;
            }

            game.add.existing(this);
        }

        getBouncedDirection(startDirection: Direction) {
            if (this.direction === Direction.Left) {
                // \
                switch (startDirection) {
                    case Direction.Up:
                        return Direction.Right;
                    case Direction.Right:
                        return Direction.Up;
                    case Direction.Down:
                        return Direction.Left;
                    case Direction.Left:
                        return Direction.Down;
                }
            }
            else if (this.direction === Direction.Right) {
                // /
                switch (startDirection) {
                    case Direction.Up:
                        return Direction.Left;
                    case Direction.Right:
                        return Direction.Down;
                    case Direction.Down:
                        return Direction.Right;
                    case Direction.Left:
                        return Direction.Up;
                }
            }
        }

    }

}