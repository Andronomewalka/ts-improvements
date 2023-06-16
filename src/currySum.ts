export const curry2 = <T, U, R>(callback: (a: T, b: U) => R) =>
    (a: T) => (b: U) => callback(a, b);

export const curry3 = <T, U, V, R>(callback: (a: T, b: U, c: V) => R) =>
    (a: T) => (b: U) => (c: V) => callback(a, b, c);