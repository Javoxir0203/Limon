import React from 'react';

const Section = () => {
	return (
		<div className='bg-gray-100 mb-16 py-12'>
			<div className='flex container  mx-auto   gap-3'>
				<div>
					<iframe
						width='630'
						height='415'
						src='https://www.youtube.com/embed/mnKQa3ow4CY?si=UF0ttRuExSaXNQZB'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
						className=' border  rounded-xl'
					></iframe>
				</div>
				<div>
					<iframe
						width='630'
						height='415'
						src='https://www.youtube.com/embed/kGD-hYg4ITY?si=bE8XJm3vPetR-TuC'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
						referrerPolicy='strict-origin-when-cross-origin'
						allowFullScreen
						className='border rounded-xl'
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Section;
