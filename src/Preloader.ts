module MyGame {

	export class Preloader extends Phaser.State {

		preloadBar: Phaser.Sprite;
		background: Phaser.Sprite;
		ready: boolean = false;

		preload() {

			//	These are the assets we loaded in Boot.js
			this.preloadBar = this.add.sprite(300, 400, 'preloadBar');

			//	This sets the preloadBar sprite as a loader sprite.
			//	What that does is automatically crop the sprite from 0 to full-width
			//	as the files below are loaded in.
			this.load.setPreloadSprite(this.preloadBar);

			//	Here we load the rest of the assets our game needs.
			//	As this is just a Project Template I've not provided these assets, swap them for your own.
			this.load.image('titlepage', 'assets/titlepage.jpg');
			this.load.audio('titleMusic', 'assets/title.mp3', true);
			this.load.image('logo', 'assets/logo.png');
			
			this.load.image('garbage', 'assets/garbage_1.png');
			this.load.image('explode', 'assets/explode_1.png');
			this.load.spritesheet('whale', 'assets/whale_8.png', 60, 60, 8);
			this.load.spritesheet('mirror', 'assets/mirror_2.png', 60, 60, 2);
			this.load.image('level1', 'assets/level1.png');
			
			//	+ lots of other required assets here

		}

		create() {
			this.game.state.start('MainMenu');
		}
	}
}