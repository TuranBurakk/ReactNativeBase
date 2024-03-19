import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    password: null,
    isLoading: false,
    user: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers : {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword : (state, action) => {
            state.password = action.payload;
        },
        setIsLoading : (state, action) => {
            state.isLoading = action.payload;
        },
        setUser : (state, action) => {
            state.user = action.payload;
        }
    }
})

export const { setEmail, setIsLoading, setPassword, setUser } = userSlice.actions
export default userSlice.reducer
