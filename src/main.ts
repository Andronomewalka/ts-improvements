import { curry2, curry3 } from "./currySum";
import { omitBy } from "./omitBy";
import { omitFunc } from "./omitFunc";

const obj = {
    a: "some",
    b: 2,
    c: () => 3,
    d: true,
    e: {
        sub1: true,
        sub2: 2
    },
    f: {
        sub3: "any"
    },
    g: () => 6,
    h: 6.13
};

/*
    написать функцию которая принимает любой обьект “{}” и возвращает этот же обьект 
    но если полем этого обьекта будет функция - то чтобы ее не было в итоговом обьекте 
    (или кратко - написать функцию которая убирает поля-функции из обьекта и с поддержкой итогового типа результата)
*/
const resOmitFunc = omitFunc(obj);


/*
    написать функцию omit-by (по типу как в lodash) но самому не юзая никаких либ
*/
const predicate = (prop: unknown) => Number.isInteger(prop);
const resOmitBy = omitBy(obj, predicate);
type ResOmitByAProp = typeof resOmitBy["a"];


/*
    написать функцию каррирования функций с TS suppot
*/
const useToken = <T>(token: string, operation: (token: string) => T) => {
    return operation(token);
};

const performAction = curry2(useToken)("D@#$%C@#");
performAction((token) => console.log("token", token)); // "secret_token"

const logger = <T>(group: string, message: string, arg: T) => {
    const argStringified = typeof arg === "object" ? JSON.stringify(arg) : arg;
    return `[${group}]:${message}-${argStringified}`;
};

const logStream = curry3(logger)("STREAM");
logStream("connecting")(true); // [STREAM]:connecting-true
logStream("connected")({ id: 10 }); // [STREAM]:connected-{"id":10}