import type {ICommentUser} from "./ICommentUser.ts";

export interface IComment{
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: ICommentUser;
}