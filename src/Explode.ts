module MyGame {

    export class Explode extends GridSprite {

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'explode', 0);

            this.game.physics.arcade.enableBody(this);

            game.add.existing(this);

        }

        update() {

        }

    }

}