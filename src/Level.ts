module MyGame {

    export class Level extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        whale: MyGame.Whale;
        loadedObjects: GridSprite[];
        laserObjects: Laser[];

        spacebarKey: Phaser.Key;
        isLaserFiring: boolean;

        create() {
            this.background = this.add.sprite(0, 0, 'level');

            let levelData = this.cache.getText('levelData');

            this.loadedObjects = LevelLoader.loadLevel(levelData, this.game); // Contains all loaded objects
            this.laserObjects = [];

            // registed laser
            this.spacebarKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            this.spacebarKey.onDown.add(this.startLaser, this);

            this.isLaserFiring = false;
        }

        getWhale() {
            for (let i = 0; i < this.loadedObjects.length; i++) {
                if (this.loadedObjects[i] instanceof Whale) {
                    return this.loadedObjects[i];
                }
            }
            return null;
        }

        getObjectAtCoordinates(x: number, y: number) {
            for (let i = 0; i < this.loadedObjects.length; i++) {
                if (this.loadedObjects[i].getX() == x && this.loadedObjects[i].getY() == y) {
                    return this.loadedObjects[i];
                }
            }
            return null;
        }

        update() {
            if (this.isLaserFiring) {
                if (this.laserObjects.length === 0) {
                    // starting laser
                    let whale = this.getWhale();
                    this.laserObjects.push(new Laser(this.game, whale.getX(), whale.getY(), Direction.None, (<Whale>whale).direction, Constants.LASER_STRENGTH));
                }
                else {
                    let lastLaser = this.laserObjects[this.laserObjects.length - 1];
                    let nextX = lastLaser.getX();
                    let nextY = lastLaser.getY();
                    switch (lastLaser.bounceDirection) {
                        case Direction.Up:
                            nextY--;
                            break;
                        case Direction.Right:
                            nextX++;
                            break;
                        case Direction.Down:
                            nextY++;
                            break;
                        case Direction.Left:
                            nextX--;
                            break;
                    }

                    if (nextX < 0 || nextX > Constants.LEVEL_WIDTH ||
                        nextY < 0 || nextY > Constants.LEVEL_HEIGHT ||
                        lastLaser.bounceDirection === Direction.None) { // stop laser
                        this.stopLaser();
                        return;
                    }

                    let obj = this.getObjectAtCoordinates(nextX, nextY);
                    let direction = HelperFunctions.getOppositeDirection(lastLaser.bounceDirection); // Start direction of laser
                    let bounceDirection = Direction.None; // End direction of laser
                    let laserStrength = lastLaser.strength;

                    if (obj instanceof Mirror) {
                        bounceDirection = (<Mirror>obj).getBouncedDirection(direction);
                        laserStrength--;

                        if (laserStrength === 0) {
                            this.stopLaser();
                            bounceDirection = Direction.None;
                        }
                    }
                    else if (obj instanceof Garbage) {
                        bounceDirection = HelperFunctions.getOppositeDirection(direction);

                        // Increase score
                        // TODO: score

                        // Destroy garbage
                        // TODO: nuclear crater
                    }
                    else {
                        bounceDirection = HelperFunctions.getOppositeDirection(direction);
                    }
                    console.log(direction, bounceDirection);
                    this.laserObjects.push(new Laser(this.game, nextX, nextY, direction, bounceDirection, laserStrength));

                }
            }
        }

        startLaser() {
            this.isLaserFiring = true;
        }
        stopLaser() {
            this.isLaserFiring = false;

            // TODO: clean laser objects from canvas
            // TODO: count score
        }





    }

} 