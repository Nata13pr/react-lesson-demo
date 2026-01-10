import type {IPostReaction} from "./IPostReaction.ts";

export interface IPost{
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: IPostReaction,
    views: number,
    userId: number
}