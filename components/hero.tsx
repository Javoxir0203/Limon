'use client';
import Carousel from 'react-multi-carousel';
import artel from '../assets/images/artel.svg';
import belissimo from '../assets/images/belissimo.svg';
import blackstar from '../assets/images/blackstar.svg';
import broccoli from '../assets/images/broccoli.svg';
import express from '../assets/images/express.svg';
import Image from 'next/image';
import React from 'react';

const responsive = {
	superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
	desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
	tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
	mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const Hero = () => {
	return (
		<div className='py-12 flex flex-col gap-12'>
			<Carousel autoPlay={true} infinite={true} transitionDuration={500} autoPlaySpeed={2000} arrows={false} className='flex container rotate-180 mx-auto items-center gap-12' responsive={responsive}>
				<div className='border flex items-center justify-center rounded-lg p-8 border-gray-300 mr-4'>
					<Image src={artel} alt='artel' className='w-52 h-16 rotate-180' />
				</div>

				<div className='border flex items-center justify-center rounded-lg p-8 border-gray-300 mr-4'>
					<Image src={belissimo} alt='bellissimo' className='w-52 h-16 rotate-180' />
				</div>

				<div className='border flex items-center justify-center rounded-lg p-8 border-gray-300 mr-4'>
					<Image src={blackstar} alt='' className='w-52 h-16 rotate-180' />
				</div>

				<div className='border flex items-center justify-center rounded-lg p-8 border-gray-300 mr-4'>
					<Image src={broccoli} alt='' className='w-52 h-16 rotate-180' />
				</div>
				<div className='border flex items-center justify-center rounded-lg p-8 border-gray-300 mr-4'>
					<Image src={express} alt='' className='w-52 h-16 rotate-180' />
				</div>
			</Carousel>

			<Carousel autoPlay={true} infinite={true} transitionDuration={500} autoPlaySpeed={2000} arrows={false} className='flex container mx-auto items-center gap-12' responsive={responsive}>
				<div className='border flex items-center justify-center rounded-lg p-8 border-gray-300 mr-4'>
					<Image src={blackstar} alt='' className='w-52 h-16' />
				</div>
				<div className='border flex items-center justify-center rounded-lg p-8 border-gray-300 mr-4'>
					<Image src={artel} alt='artel' className='w-52 h-16' />
				</div>
				<div className='border flex items-center justify-center rounded-lg p-8 border-gray-300 mr-4'>
					<Image src={belissimo} alt='bellissimo' className='w-52 h-16' />
				</div>
				<div className='border flex items-center justify-center rounded-lg p-8 border-gray-300 mr-4'>
					<Image src={express} alt='' className='w-52 h-16 ' />
				</div>

				<div className='border flex items-center justify-center rounded-lg p-8 border-gray-300 mr-4'>
					<Image src={broccoli} alt='' className='w-52 h-16' />
				</div>
			</Carousel>
		</div>
	);
};

export default Hero;
