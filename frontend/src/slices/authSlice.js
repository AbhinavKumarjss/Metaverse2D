import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    };

    const authReducer = createSlice({
        name:'auth',
        initialState,
        reducers: {
            login: (state, action) => {
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
                localStorage.setItem('token', action.payload.token);
                localStorage.setItem('user', action.payload.user);
            },
            logout: (state) => {
                state.isAuthenticated = false;
                state.user = null;
                state.token = null;
                localStorage.removeItem('token');
                localStorage.removeItem('user');
            },
            loaduser: ()=>{
                const user = localStorage.getItem('user');
                const token = localStorage.getItem('token');
                if(user && token){
                    state.isAuthenticated = true;
                    state.user = user;
                    state.token = token
                }
            }
        }
    });

    export const { login, logout } = authReducer.actions;
    export default authReducer.reducer;