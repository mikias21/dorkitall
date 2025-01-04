'use client';

import {useDispatch, useSelector} from 'react-redux';
import {toggleDarkMode} from '../store/themeSlice';
import {BsSun, BsMoon} from 'react-icons/bs';
import {useEffect} from 'react';

const DarkModeToggle = () => {
	const dispatch = useDispatch();
	const isDarkMode = useSelector(state => state.theme.isDarkMode);

	useEffect(() => {
		
		if(isDarkMode){
			document.documentElement.classList.add('dark');
		}else{
			document.documentElement.classList.remove('dark');
		}

	}, [isDarkMode]);

	const handleToggle = () => {
		dispatch(toggleDarkMode());
	};

	return(
		<div onClick={handleToggle}
			className="fixed top-4 right-4 cursor-pointer text-xl p-2 rounded-full bg-gray-200 shadow-lg">
			{ isDarkMode ? (
				<BsSun className="text-yellow-500" title="Light Mode"/>
			): (
				<BsMoon className="text-blue-500" title="Dark Mode" />
			)}
		</div>
	);
}

export default DarkModeToggle;