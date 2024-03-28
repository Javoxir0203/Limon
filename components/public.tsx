'use client';
import card from '../assets/images/card.png';
import Image from 'next/image';
import coldWaterIcon from '../assets/icons/cold.svg';
import ThunderIcon from '../assets/icons/cold2.svg';
import hotWaterIcon from '../assets/icons/cold3.svg';
import gasIcon from '../assets/icons/cold4.svg';
import sewerageIcon from '../assets/icons/cold5.svg';
import trashIcon from '../assets/icons/cold6.svg';
import FormatNumber from './format';
import tree from '@/assets/images/card.png';

const utils = [
	{
		id: 1,
		img: coldWaterIcon,
		title: 'Sovuq suv',
	},
	{
		id: 2,
		img: ThunderIcon,
		title: 'Elektr toki',
	},
	{
		id: 3,
		img: hotWaterIcon,
		title: 'Issiq suv',
	},
	{
		id: 4,
		img: trashIcon,
		title: 'Axlat',
	},
	{
		id: 5,
		img: gasIcon,
		title: 'Gaz',
	},
	{
		id: 6,
		img: sewerageIcon,
		title: 'Kanalizatsiya',
	},
];

const Payment = () => {
	return (
		<div className='bg-gray-100/75 w-full py-10'>
			<div className='container flex gap-5 mx-auto'>
				<div className='w-1/2'>
					<h3 className='text-[24px] font-bold leading-[33px] text-[#17171C] mb-8'>Public utilities</h3>
					<div className='flex items-center justify-between gap-8'>
						<div className='flex flex-col w-full'>
							{utils.map(({ id, img, title }) => (
								<button key={id} className='flex rounded-[10px] bg-white p-[8px] mb-[8px] items-center communal_service_section hover:translate-y-[-3px] transition-all duration-300 border-[#E6E9EF] border-[1px] cursor-pointer'>
									<Image src={img} alt='cold_water_icon' className='mr-[10px]'></Image>
									<span className='font-semibold text-[11px] leading-[13px] text-[#17171C]'>{title}</span>
								</button>
							))}
						</div>
						<Image className='w-full' width={100} height={100} src={tree} alt='tree' />
					</div>
				</div>
				<div className='w-1/2'>
					<h3 className='text-[24px] font-bold leading-[33px] text-[#17171C] mb-8'>Express payment</h3>
					<form className='flex flex-col'>
						<div className='flex flex-col  mb-6 relative'>
							<label htmlFor='formatNumber' className='font-semibold mb-3 text-[14px] leading-[18px] text-[#2B2B30]'>
								Phone number
							</label>
							<FormatNumber />
							<div className='flex-auto'>
								<label htmlFor='minmax' className='font-semibold mb-3 text-[14px] leading-[18px] block text-[#2B2B30] mt-5'>
									Amount of payment
								</label>
								<input type='text' placeholder='10 000' className='border-[#E6E9EF] placeholder:font-semibold py-[13px] px-[16px] rounded-[8px] focus:outline-[#ffc007] focus:outline-[1px] border text-[14px] leading-[18px] placeholder:text-[#A5AAB4] w-[80%]' />
							</div>
						</div>
						<button className='py-3 px-4 raise transition max-w-[164px] bg-white rounded-[8px] border-yellow inline-block border-[1px] duration-300 hover:bg-yellow-500 hover:border-[#FFC007]'>Pay</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Payment;
