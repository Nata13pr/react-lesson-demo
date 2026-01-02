export interface IComment {
    id: number,
    body: string,
    postId: number,
    likes: number,
    user: IUser,
}

interface IUser {
    id: number,
    username: string,
    fullName: string
}

export interface ICommentlist {
    comments: IComment[],
    limit: number,
    skip: number,
    total: number
}
