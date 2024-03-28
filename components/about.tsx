import Image from 'next/image';
import React from 'react';

const About = () => {
	return (
		<div className=' bg-gray-900 -z-20 border-b-8  border-b-yellow-500 '>
			<div className='relative '>
				<div className='flex container mx-auto '>
					<div>
						<div>
							<h2 className='text-5xl font-semibold mb-10 text-white'>
								LimonPay - we can do what you <br /> need <span className='text-green-500'>:)</span>
							</h2>
							<p className=' text-xl mb-10 text-white'>
								Through us, you can transfer money and make payments in a convenient and secure way <br /> throughout the country. Pay for purchases through our website and mobile application.
							</p>
							<div className=' flex gap-5'>
								<button className=' w-52 border bg-yellow-500 rounded py-2 px-2 hover:bg-yellow-700'>More Details</button>
								<button className=' w-52 border bg-white rounded py-2 px-2 hover:bg-yellow-500'>Login to you account</button>
							</div>
						</div>
					</div>
					<div>
						<Image width={200} className='absolute z-10 w-[600px] right-0 bottom-0 ' height={200} src={'https://limonpay.uz/svg/half_moon.svg'} alt='loga' />
						<Image width={300} className=' ml-10 w-[350px] relative z-20' height={200} src={'https://limonpay.uz/assets/iphone-4-807d87d7.png'} alt='loga' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
