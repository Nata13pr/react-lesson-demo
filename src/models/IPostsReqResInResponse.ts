import type {IPost} from "./post-model/IPost.ts";

export interface IPostsReqResInResponse {
    total: number,
    skip: number,
    limit: number,
    posts: IPost[]
}