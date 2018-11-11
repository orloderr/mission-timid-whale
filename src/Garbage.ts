module MyGame {

	export class Garbage extends Phaser.Sprite {

		constructor(game: Phaser.Game, x: number, y: number) {

			super(game, x, y, 'garbage', 0);

			this.game.physics.arcade.enableBody(this);
			
			this.anchor.setTo(0.5, 0);

			game.add.existing(this);

		}

		update() {

		}

	}

}