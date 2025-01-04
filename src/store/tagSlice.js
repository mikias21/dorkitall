import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	selectedTag: '',
};

const tagSlice = createSlice({
	name: 'tag',
	initialState,
	reducers: {
		addTag: (state, action) => {
			state.selectedTag = action.payload;
		},
		resetTag: (state, action) => {
			state.selectedTag = '';
		}
	}
});

export const {addTag, resetTag} = tagSlice.actions;
export default tagSlice.reducer;