'use client';
import Image from 'next/image';
import React from 'react';

const Aside = () => {
	return (
		<div className='bg-gray-100 p-10 mb-10'>
			<div className='flex container mx-auto gap-40 items-center'>
				<div>
					<h2 className=' text-3xl font-semibold mb-10'>Limon Pay</h2>
					<p className=' text-2xl mb-9'>
						Through us, you can transfer money and make payments in a <br /> convenient and secure way throughout the country. Pay for <br /> purchases through our website and mobile application.
					</p>
					<button className=' bg-yellow-500 border rounded p-2 w-48'>More details</button>
				</div>
				<div>
					<Image width={400} height={200} src={'https://limonpay.uz/assets/pillow-72a0f928.png'} alt='' />
				</div>
			</div>
		</div>
	);
};

export default Aside;
