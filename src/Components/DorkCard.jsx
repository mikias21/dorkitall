'use client';

import {useState} from 'react';
import { FiCopy } from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';

const DorkCard = ({ dork }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(prevState => !prevState);
  };

  const notify = () => toast("Dork copied!");

  const getRiskClasses = (risk) => {
    switch (risk) {
      case 'Low':
        return 'font-bold text-green-600';
      case 'Medium':
        return 'font-bold text-yellow-600';
      case 'High':
        return 'font-bold text-red-600';
      default:
        return 'font-bold text-gray-600';
    }
  };

  const copyDork = (query) => {
  	navigator.clipboard.writeText(query);
  }

  return (
    <div className="border border-slate-200 w-2/4 p-3 rounded-3xl">
      <p className="font-bold text-slate-600 text-xs dark:text-slate-300">{dork.query}</p>
      <p className="mt-2 text-xs dark:text-slate-300">{dork.description}</p>
      {dork?.success_rate ? 
        (<p className="mt-1 text-xs dark:text-slate-300">Success rate: {dork.success_rate}</p>) : 
        (<p className="mt-1 text-xs dark:text-slate-300">Not Tested</p>)
      }

      { isOpen && (

        <div
          className={'text-xs transition-all duration-500 ease-in-out dark:text-slate-300 mt-2 max-h-screen opacity-100'}
        >
          <p className="dark:text-slate-300">Platform: {dork.platform}</p>
          <p className={getRiskClasses(dork.risk_level)}>Risk: {dork.risk_level}</p>
          <div className='flex space-x-1'>
            <p>Tags: </p>
            {
              dork?.tags.map((tag) => (
                <p className='font-bold text-blue-500'>#{tag}</p>
              ))
            }
          </div>
          <p className="dark:text-slate-300">Last updated date: {dork.last_updated}</p>
        </div>

      )}

      <div className='flex items-center space-x-3'>
      		<button 
		        className="mt-2 text-xs text-blue-500 hover:text-blue-700"
		        onClick={toggleDetails}
		      >
		        {isOpen ? '▲ Hide details' : '▼ Show details'}
	      	</button>

	      	<div className="mt-2">
	      		<FiCopy className="text-sm text-blue-500 hover:cursor-pointer" onClick={() => {navigator.clipboard.writeText(dork.query); notify();}}/>
	      	</div>
      </div>

      <ToastContainer
    		position="top-right"
    		autoClose={2500}
    		hideProgressBar={true}
    		newestOnTop={false}
    		closeOnClick={false}
    		rtl={false}
    		pauseOnFocusLoss={false}
    		draggable
    		pauseOnHover
    		theme="light"
    	/>
    </div>
  );
};

export default DorkCard;