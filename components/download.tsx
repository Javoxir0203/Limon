'use client';
import React from 'react';
import Image from 'next/image';
import Apple from '../assets/images/appstore.svg';
import Google from '../assets/images/googleplay.svg';

const Download = () => {
	const appClick = () => {
		window.open('https://www.apple.com/ru/app-store/');
	};

	const googleClick = () => {
		window.open('https://play.google.com/store/games?hl=ru&gl=US');
	};

	return (
		<div className='container mx-auto items-center mt-10 justify-between '>
			<div className=' flex items-center bg-yellow-500  justify-between border rounded mb-10 py-10'>
				<div>
					<h2 className='text-4xl ml-6  mb-3 font-semibold'>Download the app for your device</h2>
					<h2 className='text-xl  ml-6 mb-10'>The application supports iOS and Android systems.</h2>
					<div className='flex ml-6  gap-3'>
						<Image onClick={() => appClick()} src={Apple} alt='' width={150} height={250} />
						<Image onClick={() => googleClick()} src={Google} alt='' width={150} height={250} />
					</div>
				</div>
				<Image width={200} height={100} src={'https://limonpay.uz/assets/group_iphone-33321018.png'} alt='' />
			</div>
		</div>
	);
};

export default Download;
