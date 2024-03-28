import React from 'react';
import { FaApple } from 'react-icons/fa';
import { IoStarSharp } from 'react-icons/io5';
import { FaGooglePlay } from 'react-icons/fa';

const App_store = () => {
	return (
		<div className=' flex items-center justify-between gap-10 container mx-auto mt-10 mb-10'>
			<div className=' border  rounded py-10 w-[50%]'>
				<div className='flex  ml-6 mr-6 items-center justify-between'>
					<FaApple className=' w-16 h-16' />
					<IoStarSharp className='w-8 h-8 ' />
				</div>
				<div className='flex ml-6 mr-6 items-center mt-10 justify-between'>
					<div>
						<p className='text-xl  opacity-40'>Rating in</p>
						<h3 className='text-2xl font-semibold'>App store</h3>
					</div>
					<div>
						<h3 className='text-xl font-semibold'>
							<span className='text-5xl font-semibold text-yellow-500'>4.9 </span>from
						</h3>
					</div>
				</div>
			</div>
			<div className=' border  rounded py-10 w-[50%]'>
				<div className='flex ml-6 mr-6 items-center justify-between'>
					<FaGooglePlay className=' w-16 h-16' />
					<IoStarSharp className='w-8 h-8 ' />
				</div>
				<div className='flex mt-10 ml-6 mr-6 items-center justify-between'>
					<div>
						<p className='text-xl opacity-40'>Rating in</p>
						<h3 className='text-2xl font-semibold'>Google play</h3>
					</div>
					<div>
						<h3 className='text-xl font-semibold'>
							<span className='text-5xl font-semibold text-yellow-500'>4.6 </span>from
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App_store;
