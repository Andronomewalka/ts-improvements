import { Prettify } from "./Prettify";

type PredicateFunction = (prop: unknown) => boolean;

type PropType<T> = {
    [K in keyof T]: T[K]
}[keyof T];

type PropsTypesDictionary<T> = {
    [key: string]: PropType<T>;
};

export const omitBy = <T extends object>(
    obj: T,
    predicate: PredicateFunction
): Prettify<PropsTypesDictionary<T>> => {
    const res: any = {};

    for (const key in obj) {
        const value = obj[key];
        if (!predicate(value)) {
            res[key] = value;
        }
    }

    return res;
};