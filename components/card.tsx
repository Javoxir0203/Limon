'use client';

import Image from 'next/image';
import card from '../assets/images/card.svg';
import card2 from '../assets/images/card2.svg';
import card3 from '../assets/images/card3.svg';
import card4 from '../assets/images/card4.svg';
import card5 from '../assets/images/card5.svg';
import card6 from '../assets/images/card6.svg';
import React from 'react';

const Card = () => {
	return (
		<div className='container mx-auto '>
			<div className=' mt-10 flex items-center justify-between mb-10'>
				<h2 className='text-2xl font-semibold'>Other categories</h2>
				<h2 className=' text-2xl opacity-50'>All categories</h2>
			</div>
			<div className='  flex items-center mt-10 justify-between'>
				<div className=' hover:bg-yellow-500 p-4 border rounded'>
					<Image className='ml-12 mb-3' src={card3} alt='card' />
					<h3 className=' text-md font-semibold'>Internet providers</h3>
				</div>
				<div className='  hover:bg-yellow-500 p-4 border rounded'>
					<Image className='ml-12 mb-3' src={card} alt='card' />
					<h3 className=' text-md  text-center font-semibold'>Television and online </h3>
				</div>
				<div className=' hover:bg-yellow-500  p-4 border rounded'>
					<Image className='ml-12 mb-3' src={card6} alt='card' />
					<h3 className=' text-md font-semibold'>Insurance and call</h3>
				</div>
				<div className=' hover:bg-yellow-500  p-4 border rounded'>
					<Image className='ml-12 mb-3' src={card2} alt='card' />
					<h3 className=' text-md font-semibold'>
						Games and
						social
					</h3>
				</div>
				<div className=' hover:bg-yellow-500  p-4 border rounded'>
					<Image className='ml-12 mb-3' src={card4} alt='card' />
					<h3 className=' text-md font-semibold'>Hosting providers</h3>
				</div>
				<div className=' hover:bg-yellow-500  p-4 border rounded'>
					<Image className='ml-12 mb-3' src={card5} alt='card' />
					<h3 className=' text-md font-semibold'>Air and train tickets</h3>
				</div>
			</div>
		</div>
	);
};

export default Card;
