import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	userName: ''
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserName: (state, action) => {
			state.userName = action.payload;
		},
		removeUserName: (state, action) => {
			state.userName = '';
		}
	}
});

export const {setUserName, removeUserName} = userSlice.actions;
export default userSlice.reducer;