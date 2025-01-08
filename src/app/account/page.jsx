const Login = () => {

	const generateUserAccount = (e) => {
		e.preventDefault();
		console.log('generate');
	};

	return(
		<div className="">
			<section className='flex flex-col items-center justify-center mt-32 border border-slate-100 w-[450px] mx-auto rounded-lg p-7'>
				<p className="text-lg font-semibold">Create account and become contributer</p>
				<button className="mt-5 bg-blue-500 p-3 text-white rounded-full">
					Generate account
				</button>
			</section>
		</div>
	);
}

export default Login;