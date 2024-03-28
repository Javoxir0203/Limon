'use cilent';
import Image from 'next/image';
import React from 'react';

const Main = () => {
	return (
		<div className='flex gap-5 container mx-auto mb-10 items-center justify-between5'>
			<div>
				<Image className=' ml-32 mb-5' width={100} height={75} src={'https://limonpay.uz/svg/monitoring.png'} alt=' icons' />
				<h2 className=' text-center text-3xl font-semibold mb-5'>Monitoring</h2>
				<p className=' text-center opacity-45 mb-5'>The easiest way to manage your money right from your smartphone. Anywhere in the world. Anytime. In any situation.</p>
			</div>
			<div>
				<Image className=' ml-36 mb-5' width={100} height={75} src={'https://limonpay.uz/svg/transfer.png'} alt=' icons' />
				<h2 className=' text-center text-3xl font-semibold mb-5'>Payments</h2>
				<p className=' text-center opacity-45 mb-5'>More convenient and safer than physical bank cards and cash, and also allows you to protect your personal data when paying in stores.</p>
			</div>
			<div>
				<Image className=' ml-44 mb-5' width={75} height={80} src={'https://limonpay.uz/svg/rocket.png'} alt=' icons' />
				<h2 className=' text-center text-3xl font-semibold mb-5'>Fast reaction</h2>
				<p className=' text-center opacity-45 mb-5'>If you receive a call from an unscrupulous scammer or encounter unpleasant software errors, please contact our call center. We are always in t</p>
			</div>
		</div>
	);
};

export default Main;
