import {configureStore} from "@reduxjs/toolkit";
import tagReducer from "./tagSlice";
import domainReducer from "./domainSlice";
import themeReducer from "./themeSlice";
import {saveToLocalStorage, loadFromLocalStorage} from '../utils/LocalStorage';

const loadInitialState = () => {
	const savedState = loadFromLocalStorage('appState');
	return savedState || {
		tag: {selectedTag: ""},
		domain: {domain: ""},
		theme: {isDarkMode: false}
	};
};

export const store = configureStore({
	reducer: {
		tag: tagReducer,
		domain: domainReducer,
		theme: themeReducer,
	},
	preloadedState: loadInitialState(),
});

store.subscribe(() => {
	saveToLocalStorage('appState', store.getState());
});

export default store;