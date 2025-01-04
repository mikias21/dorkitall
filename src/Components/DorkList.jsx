import DorkCard from "./DorkCard";

const DorkList = ({dorks}) => {
	return(
		<div className="flex flex-col justify-center items-center space-y-3 mt-5">
	      {dorks.map(dork => (
	        <DorkCard key={dork.id} dork={dork} />
	      ))}
	    </div>
	);
}

export default DorkList;