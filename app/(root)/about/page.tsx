import Image from 'next/image';
import React from 'react';

const About = () => {
	return (
		<div className=' container mx-auto mb-10 py-20'>
			<div className=' flex items-center gap-10 h-[50%] justify-between border rounded'>
				<div className=' mb-10 mt-10 ml-10'>
					<Image width={500} height={200} src={'https://limonpay.uz/svg/monitoring.png'} alt='' />
				</div>
				<div>
					<p className='ml-6 mr-6 mb-6'>
						The main point of diversification is to reduce risks: even if some securities in your portfolio fall in price, this will most likely be compensated by the growth of its other components. Read more about diversification. Study materials from analysts - trading ideas from analytical
						companies can help with choosing assets to buy. These ideas typically describe a price target—the price at which analysts recommend buying or selling a particular security.
					</p>
					<button className=' text-white ml-6 border bg-yellow-500 rounded p-1 w-24'>Go</button>
				</div>
			</div>
		</div>
	);
};

export default About;
