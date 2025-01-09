'use client';

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import dork_data from "../../data/dorker.js";
import DorkList from "../../Components/DorkList";

const Results = () => {

	const selectedTag = useSelector(state => state.tag.selectedTag);
	const domain = useSelector(state => state.domain.domainName);
	const [loading, setLoading] = useState(true);
	const [dorks, setDorks] = useState([]);

	useEffect(() => {
		setLoading(true);
		
		const filteredDorks = dork_data.filter(dork => dork.category === selectedTag);
		const updatedDorks = filteredDorks.map(dork => ({
			...dork,
			query: `site:${domain} ${dork.query}`
		}));

		setTimeout(() => {
			setDorks(updatedDorks);
			setLoading(false);
		}, 2000);

	}, [selectedTag, domain]);

	return(

		<div className='mb-10 dark:bg-black min-h-screen flex flex-col'>

			{loading ? (
					<div className="mt-7 flex flex-col items-center space-y-4">
						<Skeleton width={600} height={60} className='custom-skeleton'/>
						<Skeleton width={600} height={30} />
						<Skeleton width={600} height={20} />
					</div>
				) : dorks.length > 0 ? (
					
					<>
						<h3 className='mt-7 text-center p-2 text-xl font-bold tracking-wide dark:text-slate-300'>
							Dorks on <span className='text-blue-500 underline'>{domain}</span> for '{selectedTag}'
						</h3>
						<DorkList dorks={dorks}/>
					</>

				) : (

					<div className='mt-7 text-center font-bold text-red-400 dark:text-slate-300'>
						No dorks find
					</div>
				)
			}
			
		</div>

	);
}

export default Results;