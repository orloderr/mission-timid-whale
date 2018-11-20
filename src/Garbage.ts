module MyGame {

    export class Garbage extends GridSprite {

        constructor(game: Phaser.Game, x: number, y: number) {

            super(game, x, y, 'garbage', 0);

            this.game.physics.arcade.enableBody(this);

            game.add.existing(this);

        }

        update() {

        }

    }

}