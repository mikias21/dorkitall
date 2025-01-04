import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	domainName: '',
};

const domainSlice = createSlice({
	name: 'domain',
	initialState,
	reducers: {
		setDomainName: (state, action) => {
			state.domainName = action.payload;
		},
		removeDomainName: (state, action) => {
			state.domainName = '';
		}
	}
});

export const {setDomainName, removeDomainName} = domainSlice.actions;
export default domainSlice.reducer;