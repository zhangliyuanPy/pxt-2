enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}
namespace custom {
    //% blockId="MAP" block="map %num|从%a|到%b|转从%c|到%d"
    export function map(num:number,a: number, b: number, c: number, d: number): number {
        return num*1/(b-a)*d+c;
    }
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
