
module MyGame {

    export class GridSprite extends Phaser.Sprite {
        constructor(game: Phaser.Game, x: number, y: number, key: string, frame: number) {
            // TODO calculate the shift to center.
            super(game, x * Constants.TILE_SIZE + 100, y * Constants.TILE_SIZE, key, frame);
        }
    }

}