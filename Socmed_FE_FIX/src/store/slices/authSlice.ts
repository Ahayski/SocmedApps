// import { IUser } from "../../interface/user";
// import { IReduxUser } from "../types/reduxType";
import { createSlice } from "@reduxjs/toolkit";
import { setAuthToken } from "../../libs/api";
import { IUser } from "../../interface/user";
import { jwtDecode } from "jwt-decode";

// const initialAuthState: IReduxUser = {
//     id: 0,
//     email:"",
//     full_name: "",
//     user_name: "",
//     profile_picture:"",
//     image_cover:"",
//     bio:"",
//     following: [],
//     follower: [],
//     numfollowers: 0,
//     numfollowing: 0,
// }

const initialAuthState: IUser = {
  id: 0,
  email: "",
  full_name: "",
  user_name: "",
  profile_picture: "",
  image_cover: "",
  bio: "",
  followers_count: 0,
  followings_count: 0,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    AUTH_LOGIN: (state, action) => {
      const userLogin = jwtDecode(action.payload.token);
      console.log("ini userLogin", userLogin);
      const {
        id,
        email,
        full_name,
        user_name,
        description,
        profile_picture,
        image_cover,
        followers_count,
        followings_count,
      } = action.payload.token;

      const { token } = action.payload;

      setAuthToken(token);
      localStorage.setItem("token", token);

      state.id = id;
      state.email = email;
      state.full_name = full_name;
      state.user_name = user_name;
      state.bio = description;
      state.profile_picture = profile_picture;
      state.image_cover = image_cover;
      state.followers_count = followers_count;
      state.followings_count = followings_count;
    },
    AUTH_CHECK: (state, action) => {
      const {
        id,
        email,
        full_name,
        username,
        bio,
        profile_picture,
        image_cover,
        followers_count,
        followings_count,
      } = action.payload.user;

      state.id = id;
      state.email = email;
      state.full_name = full_name;
      state.user_name = username;
      state.bio = bio;
      state.profile_picture = profile_picture;
      state.image_cover = image_cover;
      state.followers_count = followers_count;
      state.followings_count = followings_count;
    },
    AUTH_ERROR: () => {
      localStorage.removeItem("token");
    },
    AUTH_LOGOUT: () => {
      localStorage.removeItem("token");
    },
  },
});

// export const authSlice = createSlice({
//     name: "auth",
//     initialState: initialAuthState,
//     reducers: {
//         AUTH_LOGIN: (_, action) => {
//             const payload = action.payload

//             setAuthToken(payload.token)
//             localStorage.setItem("token", payload.token)

//             const user: IReduxUser = {
//                 id: payload.id,
//                 full_name: payload.fullname,
//                 user_name: payload.username,
//                 email: payload.email,
//                 profile_picture: payload.profile_picture,
//                 image_cover: payload.image_cover,
//                 // password: payload.password,
//                 bio: payload.bio,
//                 following: payload.following,
//                 follower: payload.follower,
//                 numfollowers: payload.numfollowers,
//                 numfollowing: payload.numfollowing,
//             }

//             return user
//         },
//         AUTH_CHECK: (_, action) => {
//             const payload = action.payload

//             const user: IReduxUser = {
//                 id: payload.id,
//                 full_name: payload.fullname,
//                 user_name: payload.username,
//                 email: payload.email,
//                 profile_picture: payload.profile_picture,
//                 image_cover: payload.image_cover,
//                 // password: payload.password,
//                 bio: payload.bio,
//                 following: payload.following,
//                 follower: payload.follower,
//                 numfollowers: payload.numfollowers,
//                 numfollowing: payload.numfollowing,
//             }
//             return user
//         },
//         AUTH_ERROR: () => {
//             localStorage.removeItem("token")
//         },
//         AUTH_LOGOUT: () => {
//             localStorage.removeItem("token")
//         },
//     },
// })
