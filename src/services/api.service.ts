import {urls} from "../constants/urls.ts";
import type {IPostsReqResInResponse} from "../models/IPostsReqResInResponse.ts";
import type {ICommentsReqResInResponse} from "../models/ICommentsReqResInResponse.ts";
import type {IUserReqResInResponse} from "../models/IUsersReqResInResponse.ts";

export const userService = {
    getAllUsers: async (skip: string): Promise<IUserReqResInResponse> => {
        return await fetch(urls.users.allUsers + skip)
            .then(value => value.json())
    }
}

export const postService = {
    getAllPosts: async (skip: string): Promise<IPostsReqResInResponse> => {
        return await fetch(urls.posts.allPosts + skip)
            .then(value => value.json())
    }
}

export const commentService = {
    getAllComments: async (skip: string): Promise<ICommentsReqResInResponse> => {
        return await fetch(urls.comments.allComments + skip)
            .then(value => value.json())
    }
}