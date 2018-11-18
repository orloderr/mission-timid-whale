module MyGame {

    export class Level extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        whale: MyGame.Whale;

        create() {
            this.background = this.add.sprite(0, 0, 'level');

            let levelData = this.cache.getText('levelData');

            let loadedObjects = LevelLoader.loadLevel(levelData, this.game); // Contains all loaded objects
        }





    }

} 