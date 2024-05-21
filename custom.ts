/**
 * Robot blocks
 */
//% weight=100
//% color=#6d5ba5
//% icon="\uf20e"
namespace Robot {

    export enum Direction {
        //% block="up"
        Up = 0,
        //% block="right"
        Right = 1,
        //% block="down"
        Down = 2,
        //% block="left"
        Left = 3,
    }

    let myRobot: Sprite;
    let currentX: number;
    let currentY: number;
    let currentDirection: Direction;

    /**
     * Instruct robot to turn left
     */
    //% block
    export function turnLeft(): void {
        currentDirection = (currentDirection - 1 + 4) % 4;
        setDirection(currentDirection);
    }

    /**
     * Instruct robot to turn right
     */
    //% block
    export function turnRight(): void {
        currentDirection = (currentDirection + 1) % 4;
        setDirection(currentDirection);
    }

    /** 
     * Instruct robot to move one step forward in the direction it is facing
     */
    //% block
    export function move(): void {
        switch(currentDirection) {
            case Direction.Up: 
                currentY -= 1;
            break;
            case Direction.Right: 
                currentX += 1;
            break;
            case Direction.Down: 
                currentY += 1;
            break;
            case Direction.Left: 
                currentX -= 1;
            break;
        }
        setPosition(currentX, currentY);
    }

    /**
     * Places robot at the specified location and direction
     * @param x x-coordinate to place robot on, eg: 5
     * @param y y-coordinate to place robot on, eg: 1
     * @param d direction robot should be facing, eg. Down
     */
    //% block
    export function setRobotPosition(x: number, y: number, d: Direction): void {
        let robotImage: Image;
        switch (d) {
            case Direction.Up:
                robotImage = assets.image`myRobotUp`;
                break;
            case Direction.Right:
                robotImage = assets.image`myRobotRight`;
                break;
            case Direction.Down:
                robotImage = assets.image`myRobotDown`;
                break;
            case Direction.Left:
                robotImage = assets.image`myRobotLeft`;
                break;
        }

        myRobot = sprites.create(robotImage, SpriteKind.Player);
        currentX = x;
        currentY = y;
        currentDirection = d;
        setPosition(currentX, currentY);
    }

    function setPosition(x: number, y: number) {
        myRobot.setPosition(8 + 16 * x, 8 + 16 * y);
        pause(500);
        
    }

    function setDirection(d: Direction) {
        switch (d) {
            case Direction.Up:
                myRobot.setImage(assets.image`myRobotUp`);
                break;
            case Direction.Right:
                myRobot.setImage(assets.image`myRobotRight`);
                break;
            case Direction.Down:
                myRobot.setImage(assets.image`myRobotDown`);
                break;
            case Direction.Left:
                myRobot.setImage(assets.image`myRobotLeft`);
                break;
        }
        pause(500);
    }
}





