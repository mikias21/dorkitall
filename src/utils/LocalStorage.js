export const saveToLocalStorage = (key, state) => {
	try{
		const serializedState = JSON.stringify(state);
		localStorage.setItem(key, serializedState);
	}catch (e) {
		console.error("Cloud not save state to localStorage", e);
	}
};

export const loadFromLocalStorage = (key) => {
	if (typeof window === 'undefined') return undefined;
	try{
		const serializedState = localStorage.getItem(key);
		return serializedState ? JSON.parse(serializedState) : undefined;
	}catch (e){
		console.error("Cloud not load state from localStorage", e);
		return undefined;
	}
};