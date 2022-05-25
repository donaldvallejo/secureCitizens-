import React from 'react';
import { motion } from 'framer-motion';
import tw, { styled, css } from 'twin.macro';

const DivBg = styled(motion.div)(() => [
	// tw`
	// 2xl:mx-auto 
	// 2xl:container 
	// md:px-20 
	// px-4 
	// md:py-12 
	// py-9 
	// mb-10
	// `,
	tw`rounded-lg`,
	css`
	background: url(https://iconicimages.net/app/uploads/2021/04/LedZepNewsHeader.jpg) no-repeat;
	background-size: cover;
	`,
]);

export default function CTA() {
	return (
		// <div>
		<div className='2xl:mx-auto 2xl:container md:px-20 px-4 md:py-12 py-9 mb-10'>
			<DivBg
			//className='relative rounded-md'
			>
				{/* <img
						//src='https://i.ibb.co/SBpL1cK/pexels-aleksandar-pasaric-325185-1.png'
						src='https://iconicimages.net/app/uploads/2021/04/LedZepNewsHeader.jpg'
						alt='city view'
						className='w-full h-full rounded-md object-center object-fill absolute sm:block hidden'
					/> */}
				{/* <img
						//src='https://i.ibb.co/LQpxBsc/mobile.png'
						src='https://variety.com/wp-content/uploads/2018/07/led-zepplin-16.jpg'
						alt='city view'
						className='w-full h-full rounded-md absolute object-center object-fill sm:hidden'
					/> */}
				<div className='text-xl relative z-20 bg-gradient-to-r from-blue-700 to-transparent w-full h-full z-40 top-0 md:p-16 p-6 flex flex-col justify-between rounded-md '>
					<div>
						<h1 className='md:text-5xl text-3xl font-bold md:leading-10 leading-9 text-white sm:w-auto w-64'>
							Register Before It’s Too Late!
						</h1>
						<p className='text-lg leading-6 text-white xl:w-5/12 lg:w-8/12 md:w-10/12  2xl:pr-12 mt-4'>
							Summer camp registration is open but we have limited seats
							available, so hurry and embrace this fantastic opportunity.
						</p>
					</div>
					<div className='md:mt-12 mt-20'>
						<a href='/summercamp'>
							<button className='text-base font-medium leading-4 text-green-700 bg-white sm:w-auto w-full rounded p-4 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-offset-2 focus:ring-white'>
								Join the Summer Camp
							</button>
						</a>
					</div>
				</div>
			</DivBg>
		</div>
		// </div>
	);
}
