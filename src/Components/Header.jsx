const Header = () => {
	return(

		<header className="flex flex-col items-center justify-center bg-grey-900 py-3 dark:text-green-400">
			
			<pre className='text-center text-sm sm:text-base md:text-lg leading-none'>
				<span>
					{
						`
██████   ██████  ██████  ██   ██ ██ ████████  █████  ██      ██      
██   ██ ██    ██ ██   ██ ██  ██  ██    ██    ██   ██ ██      ██      
██   ██ ██    ██ ██████  █████   ██    ██    ███████ ██      ██      
██   ██ ██    ██ ██   ██ ██  ██  ██    ██    ██   ██ ██      ██      
██████   ██████  ██   ██ ██   ██ ██    ██    ██   ██ ███████ ███████ 
						`
					}
				</span>
			</pre>

		</header>


	);
}

export default Header;