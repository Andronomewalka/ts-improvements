import { OwnPick } from "./OwnPick";
import { Prettify } from "./Prettify";

type OmitType<T, TypeToOmit> = {
    [P in keyof T as T[P] extends TypeToOmit ? never : P]: T[P];
};

type OmitFunction<T extends object> = OmitType<T, Function>;

export const omitFunc = <T extends object>(obj: T): Prettify<OmitFunction<T>> => {
    const res: any = {};

    for (const prop in obj) {
        if (typeof obj[prop] !== "function") {
            res[prop] = obj[prop];
        }
    }

    return res as OmitFunction<T>;
};

// alternative solution
type OmitType2<T, TypeToOmit> = {
    [P in keyof T]: T[P] extends TypeToOmit ? never : P;
}[keyof T];

type OmitFunction2<T extends object> = OwnPick<T, OmitType2<T, Function>>;