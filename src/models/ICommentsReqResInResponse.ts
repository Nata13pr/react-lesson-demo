import type {IComment} from "./comment-model/IComment.ts";

export interface ICommentsReqResInResponse {
    total: number,
    skip: number,
    limit: number,
    comments: IComment[]
}