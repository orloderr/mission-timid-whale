module MyGame {

    export class Game extends Phaser.Game {

        constructor() {

            super(Constants.GAME_WIDTH, Constants.GAME_HEIGHT, Phaser.AUTO, 'content', null);

            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('MainMenu', MainMenu, false);
            this.state.add('Level', Level, false);

            this.state.start('Boot');
        }

    }

}