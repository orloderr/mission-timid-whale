module MyGame {

    export class Level extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        whale: MyGame.Whale;
        loadedObjects: GridSprite[];
        laserObject: GridSprite[];


        create() {
            this.background = this.add.sprite(0, 0, 'level');

            let levelData = this.cache.getText('levelData');

            this.loadedObjects = LevelLoader.loadLevel(levelData, this.game); // Contains all loaded objects

            //this.events.onInputDown.add(this.clickListener, this);

        }

        update() {
            // update laser
            // get laser direction


            // laser full, laser half
        }





    }

} 