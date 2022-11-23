import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialAuthStates = () => {
    const storedUid = localStorage.getItem('uid');
    let userLoggedIn = false;
    if (storedUid) {
        userLoggedIn = true;
    }
    return {
        uid: '',
        isLoggedIn: userLoggedIn,
        photoURL: ''
    }
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthStates,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.uid = action.payload;
            localStorage.setItem('uid', action.payload);
        },
        logout(state) {
            state.isLoggedIn = false;
            state.uid = '';
            localStorage.removeItem('uid');
        },
        updatePhoto(state, action) {
            state.photoURL = action.payload;
        }
    }
});

const store = configureStore({
    reducer: authSlice.reducer
})

export const authActions = authSlice.actions;

export default store;
