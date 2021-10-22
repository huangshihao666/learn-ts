/* 基础类型 */
(() => {

// Boolean
const isDone: boolean = false;

// String
const str: string = 'hello world';

// Number
const num: number = 10;

// Array
const list: number[] = [1,2,3,4];
const list1: Array<number> = [1,2,3] // 泛型语法

// 自定义枚举
// 数字枚举 有初始值
enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
console.log(Direction); // Direction.Up:1 Direction.Down:2 Direction.Left:3 Direction.Right:4

// 数字枚举 无初始值 从0自增
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}
console.log(Direction1); // Direction.Up:0 Direction.Down:1 Direction.Left:2 Direction.Right:3

// 字符串枚举
enum DirectionStr {
    Up = 'up',
    Down = 'down',
    Left = 'left',
    Right = 'right',
}
console.log(DirectionStr); // Direction.Up:up Direction.Down:down Direction.Left:left Direction.Right:right










})()
