export type OwnPick<T, PropToPick extends keyof T> = {
    [Prop in keyof T as Prop extends PropToPick ? Prop : never]: T[Prop];
};