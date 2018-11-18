module MyGame {

	export class Explode extends GridSprite {

		constructor(game: Phaser.Game, x: number, y: number) {

			super(game, x, y, 'explode', 0);

			this.game.physics.arcade.enableBody(this);
			
			this.anchor.setTo(0, 0);

			game.add.existing(this);

		}

		update() {

		}

	}

}