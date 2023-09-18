import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type } from "os";


type InitialState = {
    value: AuthState;
}

type AuthState = {
    isAuth: boolean;
    username: string;
    uid: string;
    isModerator: boolean;
};

const initialState = {
    value: {
        isAuth: false,
        username: '',
        uid: '',
        isModerator: false,
    } as AuthState,
} as InitialState;

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: () => {
            return initialState;
        },
        logIn: (state, action: PayloadAction<string>) => {
            return {
                value: {
                    isAuth: true,
                    username: action.payload,
                    uid: '1 aka one',
                    isModerator: false,
                },
            };
        },
    },
});

export const { logIn, logOut } = auth.actions;
export default auth.reducer;