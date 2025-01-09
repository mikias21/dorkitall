import {configureStore} from "@reduxjs/toolkit";
import tagReducer from "./tagSlice";
import domainReducer from "./domainSlice";
import themeReducer from "./themeSlice";
import userReducer from "./userSlice";
import {saveToLocalStorage, loadFromLocalStorage} from '../utils/LocalStorage';

const loadInitialState = () => {
	const savedState = loadFromLocalStorage('appState');
	return savedState || {
		tag: {selectedTag: ""},
		domain: {domain: ""},
		theme: {isDarkMode: false},
		user: {userName: ""},
	};
};

export const store = configureStore({
	reducer: {
		tag: tagReducer,
		domain: domainReducer,
		theme: themeReducer,
		user: userReducer,
	},
	preloadedState: loadInitialState(),
});

store.subscribe(() => {
	saveToLocalStorage('appState', store.getState());
});

export default store;