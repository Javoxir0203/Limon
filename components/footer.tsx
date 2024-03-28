'use client';
import Image from 'next/image';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';

import appstore from '../assets/images/appstore.svg';
import google from '../assets/images/googleplay.svg';
import Logo from '../assets/images/logo.svg';

const Footer = () => {
	const appClick = () => {
		window.open('https://www.apple.com/ru/app-store/');
	};

	const googleClick = () => {
		window.open('https://play.google.com/store/games?hl=ru&gl=US');
	};

	return (
		<footer className='pt-4 bg-gray-900'>
			<div className='container mx-auto px-4'>
				<div className='flex items-center justify-between gap-8 mb-10'>
					<div className='flex items-center mb-5'>
						<Image src={Logo} alt='' width={100} height={100} />
					</div>
					<div className=''>
						<div className='text-white flex gap-4'>
							<div className='flex items-center gap-2'>
								<HiOutlineLocationMarker size={'20px'} style={{ color: '#32B141' }} />
								<p className='m-0'>122/1 Mirzo Ulug bek ko`chasi, Tashkent, Uzbekistan 100015</p>
							</div>
							<div className='flex items-center gap-2'>
								<BsTelephone size={'20px'} color='#32B141' />
								<p className='m-0'>+998 78 200 00 07</p>
							</div>
						</div>
					</div>
				</div>
				<hr className='my-6 border-t border-gray-700' />
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-10 '>
					<div>
						<div className='text-white font-bold mb-3'>About the service</div>
						<ul className='text-gray-400'>
							<li>About company</li>
							<li>About the application`s capabilities</li>
							<li>News</li>
							<li>Safety</li>
							<li>Rates</li>
						</ul>
					</div>
					<div>
						<div className='text-white font-bold mb-3'>Partners</div>
						<ul className='text-gray-400'>
							<li>How to become a partner?</li>
							<li>Business automation</li>
							<li>Benefits</li>
							<li>Payment system integrations</li>
						</ul>
					</div>
					<div>
						<div className='text-white font-bold mb-3'>Help</div>
						<ul className='text-gray-400'>
							<li>Public offer</li>
							<li>Non-disclosure agreement</li>
							<li>Privacy Policy</li>
							<li>License</li>
							<li>FAQ</li>
							<li>Feedback</li>
						</ul>
					</div>
					<div>
						<div className='text-white text-xl  font-bold mb-3'>Download the application:</div>
						<div className='flex gap-4'>
							<Image onClick={() => appClick()} src={appstore} alt='' width={150} height={150} />
							<Image onClick={() => googleClick()} src={google} alt='' width={150} height={150} />
						</div>
					</div>
				</div>
			</div>
			<div className='bg-yellow-400 py-4'>
				<div className='container mx-auto px-4'>
					<div className=''>
						<p className='text-white  text-center'>© LimonPay LLC. All rights reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
