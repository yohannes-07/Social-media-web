import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    mode: "light",
    user: {firstName: "Yohannes", lastName: "Ahunm"},
    token: null,
    posts: []
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "dark" ? "light": "dark";
        },

        setLogin: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },

        setLogout: (state) =>{
            state.user = null
            state.token = null
        },

        setFriends: (state, action) => {
            if(state.user){
                state.user.friends = action.payload.friends
            }else{
                console.log("don't exist")
            }
        },

        setPosts: (state,action) => {
            state.posts = action.payload.posts
        },

        setPost: (state, action) =>{
            // Iterate over the posts and update the one to be updated 
            const updatedPosts = state.posts.map((post) =>{
                if(post._id === action.payload.post_id) return action.payload.post
                return post; 
            })
            state.posts = updatedPosts
            }
        }

    }
)

export const {setFriends, setMode, setLogin, setLogout, setPosts, setPost} = authSlice.actions;
export default authSlice.reducer;