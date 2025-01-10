'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {useDispatch, useSelector} from 'react-redux';
import {setDomainName} from '../store/domainSlice';
import TagComponent from './TagComponent.jsx';
import dork_data from "../data/dorker.js";
import tags from "../data/tags.js";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link'

const DomainInput = () => {
	const [domain, setDomain] = useState('');
	const dispatch = useDispatch();
	const router = useRouter();
	const selectedTag = useSelector(state => state.tag.selectedTag);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(setDomainName(domain));
		router.push('/results');
	};

	return (

		<div>
			<div className="flex justify-center mt-5">
			
				<form className="flex flex-col items-center space-x-4" onSubmit={e => handleSubmit(e)}>

					<div>
						<input 
							type="text"
							value={domain}
							placeholder="Enter domain"
							className="px-4 py-2 w-96 border border-grey-300 rounded-lg focus:outline-none focus:ring-2 focus-ring-green-500 transition-all dark:bg-slate-200"
							onChange={e => setDomain(e.target.value)}
						/>
					</div>

					<div>
						<TagComponent tags={tags}/>
					</div>

					<div className="mb-10 mt-5">
						<button onClick={e => handleSubmit(e)} className='mt-2 p-2 border border-slate-200 rounded-3xl px-10 text-white bg-blue-500 hover:bg-blue-600 hover:text-white dark:border-none'>
							Dork
						</button>
					</div>

				</form>

			</div>

			<div className="p-5 border border-slate-200 w-[30%] ml-10 rounded-md">
				<p className="text-sm dark:text-white">Current number of queries: <strong>{dork_data.length}</strong></p>
				<div className="mt-2 border border-slate-100 p-2 rounded-xl">
					<div className="flex space-x-2 items-center">
						<FaGithub className="w-7 h-7 dark:text-white"/>
						<Link href="https://github.com/Ishanoshada/GDorks" className="text-sm dark:text-white">Source: GDorks</Link>
					</div>
				</div>
				<p className="text-sm mt-4 dark:text-white">Made by <strong>zardoz0x00</strong></p>
			</div>
		</div>

	);

}

export default DomainInput;