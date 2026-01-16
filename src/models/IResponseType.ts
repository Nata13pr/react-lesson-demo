export type IResponseType<T, K extends string> = {
    total: number;
    skip: number;
    limit: number;
} & {
    [P in K]: T[];
};