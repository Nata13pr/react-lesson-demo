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

