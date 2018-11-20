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

    }

}