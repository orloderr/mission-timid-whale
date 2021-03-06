module MyGame {
    enum FileFieldType {
        Whale = 'W',
        Garbage = 'G',
        MirrorLeft = 'L',
        MirrorRight = 'R'
    }

    export class LevelLoader {
        static loadLevel(levelData: string, game: Phaser.Game) {
            // Read through file, create objects and add them to the list of objects
            let loadedObjects: GridSprite[] = [];

            for (let i: number = 0; i < Constants.LEVEL_WIDTH; i++) {
                for (let j: number = 0; j < Constants.LEVEL_HEIGHT; j++) {
                    switch (levelData.charAt(i * (Constants.LEVEL_WIDTH + 2) + j)) { // +2 for \r\n
                        case FileFieldType.Whale:
                            loadedObjects.push(new Whale(game, j, i));
                            break;
                        case FileFieldType.Garbage:
                            loadedObjects.push(new Garbage(game, j, i));
                            break;
                        case FileFieldType.MirrorLeft:
                            loadedObjects.push(new Mirror(game, j, i, Direction.Left));
                            break;
                        case FileFieldType.MirrorRight:
                            loadedObjects.push(new Mirror(game, j, i, Direction.Right));
                            break;
                        default:

                            // Ignore empty or unknown fields.
                            break;
                    };
                }
            }

            return loadedObjects;
        }
    }
}