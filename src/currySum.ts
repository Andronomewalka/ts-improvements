// no idea how to make it work with any length of arguments of any kinds
export const universalCurry = <R>(callback: (...args: any[]) => R) => {
    return (...args: any[]) => {
        if (args.length >= callback.length) {
            return callback(...args);
        }
        return (...innerArgs: any[]): R => {
            return callback(...args, ...innerArgs);
        };
    };
};

export const curry2 = <T, U, R>(callback: (a: T, b: U) => R) =>
    (a: T) => (b: U) => callback(a, b);

export const curry3 = <T, U, V, R>(callback: (a: T, b: U, c: V) => R) =>
    (a: T) => (b: U) => (c: V) => callback(a, b, c);