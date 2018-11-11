module MyGame {

	export class Level1 extends Phaser.State {

		background: Phaser.Sprite;
		music: Phaser.Sound;
		whale: MyGame.Whale;


		create() {

			this.background = this.add.sprite(0, 0, 'level1');

			this.whale = new Whale(this.game, 130, 284);

			// TODO: generate randomly and store in an array.
			var someMirror = new Mirror(this.game, 230, 284);
			var someGarbage = new Garbage(this.game, 330, 284);
			var someExplosion = new Explode(this.game, 430, 284);

		}

	}

} 