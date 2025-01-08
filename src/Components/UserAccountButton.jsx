import {CiUser} from "react-icons/ci";
import {useRouter} from 'next/navigation';

const UserAccountButton = () => {

	const router = useRouter();

	return(
		<div className='fixed top-4 left-4 mb-4'>
			<div className="cursor-pointer text-xl p-2 rounded-full bg-gray-200 shadow-lg" onClick={() => router.push('/account')}>
				<CiUser className="text-blue-500" title="User"/>
			</div>
		</div>
	);
}

export default UserAccountButton;