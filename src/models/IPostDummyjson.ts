import type {IPostReactionDummyjson} from "./IPostReactionDummyjson.ts";

export interface IPostDummyjson {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: IPostReactionDummyjson,
    views: number,
    userId: number
}


