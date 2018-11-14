module MyGame {
    enum FileFieldType {
        Whale = 'W',
        Garbage = 'G',
        MirrorLeft = '1',
        MirrorRight = '2'
    }

    export class LevelLoader {
        static loadLevel(levelName: string, game: Phaser.Game) {
            var request = new XMLHttpRequest();
            request.open('GET', "./levels/" + levelName, false);
            request.send();

            if (request.status === 200) {
                let levelFile: string = request.response;

                // Read through file, create objects and add them to the list of objects
                let loadedObjects: Phaser.Sprite[] = [];
                for (let i: number = 0; i < Constants.LEVEL_WIDTH; i++) {
                    for (let j: number = 0; j < Constants.LEVEL_HEIGHT; j++) {
                        switch (levelFile.charAt(i * Constants.LEVEL_HEIGHT + j)) {
                            case FileFieldType.Whale:
                                loadedObjects.push(new Whale(game, i * Constants.TILE_SIZE, j * Constants.TILE_SIZE));
                                break;
                            case FileFieldType.Garbage:
                                loadedObjects.push(new Garbage(game, i * Constants.TILE_SIZE, j * Constants.TILE_SIZE));
                                break;
                            case FileFieldType.MirrorLeft:
                                loadedObjects.push(new Mirror(game, i * Constants.TILE_SIZE, j * Constants.TILE_SIZE));
                                break;
                            case FileFieldType.MirrorRight:
                                loadedObjects.push(new Mirror(game, i * Constants.TILE_SIZE, j * Constants.TILE_SIZE));
                                break;
                            default:
                                break;
                        };
                    }
                }
                return loadedObjects;
            }
            else {
                return [];
            }
        }
    }
}