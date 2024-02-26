export interface IUser{
    id?: number,
    email?:string,
    full_name?: string,
    user_name?: string,
    profile_picture?:string,
    image_cover?:string,
    bio?:string,
    followers_count?:number,
    followings_count?:number,
}

export interface IUserRegist{
    full_name : string,
    user_name : string,
    email : string,
    password : string,
}

export interface IUserLogin{
    email : string,
    password : string,
}