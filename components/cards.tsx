import Image from 'next/image';
import arrow from '../assets/icons/arrow_up.svg';
import arrow_down from '../assets/icons/arrow-down.svg';
import CHF from '../assets/icons/CHF.svg';
import euro from '../assets/icons/EURO.svg';
import inr from '../assets/icons/INR.svg';
import kz from '../assets/icons/KZ.svg';
import Rus from '../assets/icons/RUS.svg';
import tjs from '../assets/icons/TJS.svg';
import jpy from '../assets/icons/JPY.svg';
import grp from '../assets/icons/GRP.svg';
import krw from '../assets/icons/KRW.svg';
import bank from '../assets/icons/bank.svg';
import usa from '../assets/icons/USA.svg';
import bankno from '../assets/icons/banknote.svg';
import React from 'react';

const Cards = () => {
	return (
		<div className='container mx-auto '>
			<div className=' flex items-center justify-between'>
				<h2 className='text-3xl font-semibold'>Exchange Rates</h2>
				<Image src={bank} alt='bank' />
			</div>
			<div className=' flex my-8 gap-5'>
				<div className=' border rounded'>
					<div className=' '>
						<div className='flex mt-5 ml-6 mr-6 justify-between'>
							<input type='number' className='w-[75%] p-3 border-b-2 border-gray-200 outline-none text-4xl text-gray-400 placeholder-[0]' />
							<select className='border-b-2 border-gray-200 p-3 outline-none text-4xl text-gray-200'>
								<option value='USD'>USD</option>
								<option value='UZS'>UZS</option>
							</select>
						</div>
						<div className='flex ml-6 mr-6 justify-between mb-10'>
							<input type='number' className='bg-transparent w-[75%] p-3 border-b-2 border-gray-200 outline-none text-4xl text-gray-400 placeholder-[0]' />
							<select className='bg-transparent border-b-2 border-gray-200 p-3 outline-none text-4xl text-gray-200'>
								<option value='UZS'>UZS</option>
								<option value='USD'>USD</option>
							</select>
						</div>
						<div className='flex gap-3 ml-6 items-center mb-6'>
							<Image src={bankno} alt='' />
							<h3 className=''>1 USD = 12590.00 UZB</h3>
						</div>
					</div>
					<div className='flex gap-3 items-center ml-6'>
						<Image src={bankno} alt='' />
						<h2 className=''>The course is automatically updated every 10 minutes</h2>
					</div>
				</div>
				<div className='  border rounded '>
					<div className='flex items-center gap-20'>
						<div className=' flex items-center  gap-1 p-4'>
							<Image width={50} className=' rounded-full' height={50} src={usa} alt='' />
							<div>
								<h4>USD</h4>
								<p>1259.00</p>
							</div>
						</div>
						<div className='h-full flex items-center gap-5 '>
							<p className=' text-red-400'>-7.07</p>
							<Image src={arrow_down} alt='' />
						</div>
						<div className='flex items-center gap-20'>
							<div className=' flex items-center gap-1'>
								<Image className=' rounded-full' width={50} height={50} src={CHF} alt='' />
								<div>
									<h4>CHF</h4>
									<p>13918.19</p>
								</div>
							</div>
							<div className=' flex items-center gap-2'>
								<p className=' text-red-400'>-7.07</p>
								<Image src={arrow_down} alt='' />
							</div>
						</div>
					</div>
					<div className='flex items-center gap-20'>
						<div className=' flex items-center gap-1 p-4'>
							<Image width={50} className=' rounded-full' height={50} src={euro} alt='' />
							<div>
								<h4>EUR</h4>
								<p>13642.17</p>
							</div>
						</div>
						<div className='h-full flex items-center gap-5'>
							<p className=' text-green-400'>-7.07</p>
							<Image src={arrow} alt='' />
						</div>
						<div className='flex items-center gap-20'>
							<div className=' flex items-center gap-1'>
								<Image className=' rounded-full' width={50} height={50} src={inr} alt='' />
								<div>
									<h4>INR </h4>
									<p>151.14</p>
								</div>
							</div>
							<div className=' flex items-center gap-2'>
								<p className=' text-green-400'>-7.07</p>
								<Image src={arrow} alt='' />
							</div>
						</div>
					</div>
					<div className='flex items-center gap-20'>
						<div className=' flex items-center gap-1 p-4'>
							<Image width={50} className=' rounded-full' height={50} src={kz} alt='' />
							<div>
								<h4>KZT</h4>
								<p>28243.05</p>
							</div>
						</div>
						<div className='h-full flex items-center gap-5 '>
							<p className=' text-green-400'>-7.07</p>
							<Image src={arrow} alt='' />
						</div>
						<div className='flex items-center gap-20'>
							<div className=' flex items-center gap-1'>
								<Image className=' rounded-full' width={50} height={50} src={Rus} alt='' />
								<div>
									<h4>RUB</h4>
									<p>135.92</p>
								</div>
							</div>
							<div className=' flex items-center gap-2'>
								<p className=' text-red-400'>-7.07</p>
								<Image src={arrow_down} alt='' />
							</div>
						</div>
					</div>
					<div className='flex items-center gap-20'>
						<div className=' flex items-center gap-1 p-4'>
							<Image width={50} className=' rounded-full' height={50} src={tjs} alt='' />
							<div>
								<h4>TJS</h4>
								<p>115123.22</p>
							</div>
						</div>
						<div className='h-full flex items-center gap-5 '>
							<p className=' text-red-400'>-7.07</p>
							<Image src={arrow_down} alt='' />
						</div>
						<div className='flex items-center gap-20'>
							<div className=' flex items-center gap-1'>
								<Image className=' rounded-full' width={50} height={50} src={jpy} alt='' />
								<div>
									<h4>JPY</h4>
									<p>125.00</p>
								</div>
							</div>
							<div className=' flex items-center gap-2'>
								<p className=' text-green-400'>-7.07</p>
								<Image src={arrow} alt='' />
							</div>
						</div>
					</div>
					<div className='flex items-center gap-20'>
						<div className=' flex items-center gap-1 p-4'>
							<Image width={50} className=' rounded-full' height={50} src={krw} alt='' />
							<div>
								<h4>KRW</h4>
								<p>125431.00</p>
							</div>
						</div>
						<div className='h-full flex items-center gap-5 '>
							<p className=' text-red-400'>-7.07</p>
							<Image src={arrow_down} alt='' />
						</div>
						<div className='flex items-center gap-20'>
							<div className=' flex items-center gap-1'>
								<Image className=' rounded-full' width={50} height={50} src={grp} alt='' />
								<div>
									<h4>GRP</h4>
									<p> 13.53</p>
								</div>
							</div>
							<div className=' flex items-center gap-2'>
								<p className='text-green-400'>-7.07</p>
								<Image src={arrow} alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
