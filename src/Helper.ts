module MyGame {
    export class Constants {
        public static GAME_WIDTH = 800;
        public static GAME_HEIGHT = 600;

        public static TILE_SIZE = 60;
        public static LEVEL_WIDTH = 10;
        public static LEVEL_HEIGHT = 10;

        public static LASER_STRENGTH = 5;
    }

    export enum Direction {
        None,
        Up,
        Down,
        Left,
        Right
    };

    export class HelperFunctions {
        public static getOppositeDirection(direction: Direction) {
            if (direction === Direction.Up) {
                return Direction.Down;
            }
            else if (direction === Direction.Left) {
                return Direction.Right;
            }
            else if (direction === Direction.Down) {
                return Direction.Up;
            }
            else if (direction === Direction.Right) {
                return Direction.Left;
            }
            else if (direction === Direction.None) {
                return Direction.None;
            }
        }
    }

}