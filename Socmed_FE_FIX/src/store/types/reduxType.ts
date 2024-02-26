interface follower {
    id: number;
  }
  
  interface following {
    id: number;
  }
  
  export interface IReduxUser {
    id: number;
    full_name: string;
    user_name: string;
    email: string;
    profile_picture: string;
    image_cover: string;
    // password: string;
    bio: string;
    following: follower[];
    follower: following[];
    numfollowers: number;
    numfollowing: number;
  }
  