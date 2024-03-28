import Image from 'next/image';
import React from 'react';

const News = () => {
	return (
		<div className=' container mx-auto'>
			<div>
				<h2 className='text-4xl font-semibold mt-10 mb-6'>All news</h2>
				<div className=' border rounded items-center w-[28%] bg-gray-900 h-40 mb-5'>
					<h2 className='text-2xl font-semibold ml-2 mt-4 text-white mb-3'>LimonPay - we can do what you need</h2>
					<button className='border bg-white hover:bg-yellow-500  rounded p-2 ml-2 w-36'>To come in</button>
				</div>
				<div className='mb-10'>
					<Image width={360} height={300} src={'https://limonpay.uz/assets/limonpay-banner-435ce6ac.jpg'} alt='logo' className='border rounded' />
				</div>
			</div>
		</div>
	);
};

export default News;
