import {CiUser} from "react-icons/ci";
import {useRouter} from 'next/navigation';
import {useSelector, useDispatch} from 'react-redux';
import { RiLogoutCircleRLine } from "react-icons/ri";
import {removeUserName} from '../store/userSlice';

const UserAccountButton = () => {

	const user = useSelector(state => state.user.userName);
	const dispatch = useDispatch();

	const router = useRouter();

	const logOut = () => {
		dispatch(removeUserName());
	}

	return(
		<div className='fixed top-4 left-4 mb-4'>
			<div className="cursor-pointer text-xl p-2 rounded-full bg-gray-200 shadow-lg">
				{user ? 
					(
						<RiLogoutCircleRLine className="text-red-400" title="Logout" onClick={logOut}/>
					) : 
					(
						<CiUser className="text-blue-500" title="User" onClick={() => router.push('/account')}/>
					)
				}
			</div>
		</div>
	);
}

export default UserAccountButton;