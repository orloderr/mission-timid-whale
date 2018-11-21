
module MyGame {

    export class GridSprite extends Phaser.Sprite {
        constructor(game: Phaser.Game, x: number, y: number, key: string, frame: number) {
            // TODO calculate the shift to center.
            super(game, x * Constants.TILE_SIZE, y * Constants.TILE_SIZE, key, frame);
            this.anchor.setTo(0.5, 0.5);
        }

        getX() {
            return this.x / Constants.TILE_SIZE;
        }

        getY() {
            return this.y / Constants.TILE_SIZE;
        }
    }

}