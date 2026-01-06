import type {ICommentUserDummyjson} from "./ICommentUserDummyjson.ts";

export interface ICommentDummyjson {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: ICommentUserDummyjson;
}