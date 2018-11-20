module MyGame {
    export class Constants {
        public static GAME_WIDTH = 800;
        public static GAME_HEIGHT = 600;

        public static TILE_SIZE = 60;
        public static LEVEL_WIDTH = 10;
        public static LEVEL_HEIGHT = 10;
    }

    export enum Direction {
        Up,
        Down,
        Left,
        Right,
    };
}