'use client';
import Logo from '../assets/images/logo.svg';
import Apple from '../assets/images/appstore.svg';
import Google from '../assets/images/googleplay.svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
	const appClick = () => {
		window.open('https://www.apple.com/ru/app-store/');
	};
	const googleClick = () => {
		window.open('https://play.google.com/store/games?hl=ru&gl=US');
	};
	return (
		<div className='w-full'>
			<div className=' bg-gray-900'>
				<div className=' container mx-auto py-12'>
					<div className=' flex items-center  justify-between'>
						<Link href={'/'}>
							<div>
								<Image width={200} height={100} src={Logo} alt='Logo' />
							</div>
						</Link>

						<div className='flex gap-4 text-white'>
							<Link href={'/about'}>About the project</Link>
							<Link href={'/new'}>New</Link>
						</div>

						<select className='hover:bg-slate-200 p-3 rounded outline-none duration-200 ml-11' name='' id=''>
							<option value=''>English</option>
							<option value=''>Rus</option>
							<option value=''>Uzbek</option>
						</select>

						<div className='flex gap-5'>
							<button>
								<Image width={200} height={80} onClick={() => appClick()} src={Apple} alt='Apple' />
							</button>
							<button>
								<Image width={200} height={100} onClick={() => googleClick()} src={Google} alt='Google' />
							</button>
						</div>
					</div>
					<hr className='mt-6 opacity-50' />
				</div>
			</div>
		</div>
	);
};

export default Header;
