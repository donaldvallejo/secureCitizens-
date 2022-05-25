import React from 'react';

export default function Testimonials({ testimonials }) {
	return (


	<div className='py-16 bg-gray-800 overflow-hidden'>
		{/* <div className='mt-6 mb-6 w-1/2 mx-auto flex justify-center flex-row '> */}
		<div className='mt-6 flex justify-center flex-col lg:flex-row w-full'>
				<img 
					className='m-2 lg:w-2/5 md:w-4/5' 
					src='/images/image43.jpeg' alt='band playing on stage' 
					style={{ margin: '2rem auto' }}
				/>
				<img 
					className='m-2 lg:w-2/5 md:w-4/5' 
					src='/images/image35.jpeg' alt='band playing on stage' 
					style={{transform: 'scaleX(1)', margin: '2rem auto' }}
				/>
				
			</div>
			<div className='max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8 mt-10'>
				<div className='text-base max-w-prose mx-auto lg:max-w-none'>
					<h1 className='text-center text-green-600  text-xl font-semibold uppercase'>
						Testimonials
					</h1>
					<p className='mb-16 mt-5 text-center text-white'>
						What our clients are saying
					</p>
				</div>

				<div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start'>
					{/* new card */}
					{/* <div className='mb-5'>
						<blockquote className='relative bg-white rounded-lg shadow-lg mb-4'>
							<div className='bg-gray-600 rounded-t-lg text px-4 py-5 border-b border-gray-200 sm:px-6'>
								<span className='text-green-300 font-semibold leading-6 sm:pl-1'>
									<p className='text-white font-semibold sm:inline'>
										{testimonials.testimonials[4].author}
									</p>{' '}
									<p className='sm:inline'>, Parent.</p>
								</span>
							</div>
							<div className='rounded-t-lg px-6 py-8 sm:px- sm:pt-10 sm:pb-8'>
								<div className='relative text-lg text-gray-700 font-medium'>
									<svg
										className='absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200'
										fill='currentColor'
										viewBox='0 0 32 32'
										aria-hidden='true'
									>
										<path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
									</svg>
									<p className='relative'>
										{testimonials.testimonials[4].testimonial}
									</p>
								</div>
							</div>
						</blockquote>
					</div>
					<div className='mb-5'>
						<blockquote className='relative bg-white rounded-lg shadow-lg mb-4'>
							<div className='bg-gray-600 rounded-t-lg text px-4 py-5 border-b border-gray-200 sm:px-6'>
								<span className='text-green-300 font-semibold leading-6 sm:pl-1'>
									<p className='text-white font-semibold sm:inline'>
										{testimonials.testimonials[2].author}
									</p>{' '}
									<p className='sm:inline'>, Parent.</p>
								</span>
							</div>
							<div className='rounded-t-lg px-6 py-8 sm:px- sm:pt-10 sm:pb-8'>
								<div className='relative text-lg text-gray-700 font-medium'>
									<svg
										className='absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200'
										fill='currentColor'
										viewBox='0 0 32 32'
										aria-hidden='true'
									>
										<path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
									</svg>
									<p className='relative'>
										{testimonials.testimonials[2].testimonial}
									</p>
								</div>
							</div>
						</blockquote>
					</div>
					<div className='mb-5'>
						<blockquote className='relative bg-white rounded-lg shadow-lg mb-4'>
							<div className='bg-gray-600 rounded-t-lg text px-4 py-5 border-b border-gray-200 sm:px-6'>
								<span className='text-green-300 font-semibold leading-6 sm:pl-1'>
									<p className='text-white font-semibold sm:inline'>
										{testimonials.testimonials[3].author}
									</p>{' '}
									<p className='sm:inline'>, Parent.</p>
								</span>
							</div>
							<div className='rounded-t-lg px-6 py-8 sm:px- sm:pt-10 sm:pb-8'>
								<div className='relative text-lg text-gray-700 font-medium'>
									<svg
										className='absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200'
										fill='currentColor'
										viewBox='0 0 32 32'
										aria-hidden='true'
									>
										<path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
									</svg>
									<p className='relative'>
										{testimonials.testimonials[3].testimonial}
									</p>
								</div>
							</div>
						</blockquote>
					</div> */}
					{/* new  */}
					{/* array index 4 */}
					<div className='mb-5'>
						<blockquote className='relative bg-white rounded-lg shadow-lg mb-4'>
							<div className='bg-gray-600 rounded-t-lg text px-4 py-5 border-b border-gray-200 sm:px-6'>
								<span className='flex justify-between items-center text-alternative-400 font-semibold leading-6 sm:pl-1'>
									<p className='text-white font-semibold text-xl sm:inline'>
										{testimonials.testimonials[4].author}
									</p>{' '}
									<p className='sm:inline text-xl'> Parent</p>
								</span>
							</div>
							<h2 className='text-md text-bold italic leading-none pl-5 pt-6 text-gray-400'>
								Kids learn how to try, do and succeed on their own!
							</h2>
							{/* <hr className='border-gray-300  w-1/12 mt-3 ml-[200px]' /> */}
							<div className='rounded-t-lg px-6 py-8 sm:px- sm:pt-7 sm:pb-8'>
								<div className='relative text-lg text-gray-700 font-medium'>
									<svg
										className='absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200'
										fill='currentColor'
										viewBox='0 0 32 32'
										aria-hidden='true'
									>
										<path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
									</svg>
									{/* &nbsp; */}
									<p className='relative px-5 text-gray-600 italic text-sm '>
										{testimonials.testimonials[4].testimonial}
									</p>
								</div>
							</div>
						</blockquote>
					</div>
					{/* array index 4 end */}

					{/* array index 2 */}
					<div className='mb-5'>
						<blockquote className='relative bg-white rounded-lg shadow-lg mb-4'>
							<div className='bg-gray-600 rounded-t-lg text px-4 py-5 border-b border-gray-200 sm:px-6'>
								<span className='flex justify-between items-center text-alternative-400 font-semibold leading-6 sm:pl-1'>
									<p className='text-white font-semibold text-xl sm:inline'>
										{testimonials.testimonials[2].author}
									</p>{' '}
									<p className='sm:inline text-xl'> Parent</p>
								</span>
							</div>
							<h2 className='text-md text-bold italic leading-none pl-5 pt-6 text-gray-400'>
								All Kids with varied abilities benefit!
							</h2>
							{/* <hr className='border-gray-300  w-1/12 mt-3 ml-[200px]' /> */}
							<div className='rounded-t-lg px-6 py-8 sm:px- sm:pt-7 sm:pb-8'>
								<div className='relative text-lg text-gray-700 font-medium'>
									<svg
										className='absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200'
										fill='currentColor'
										viewBox='0 0 32 32'
										aria-hidden='true'
									>
										<path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
									</svg>
									{/* &nbsp; */}
									<p className='relative px-5 text-gray-600 italic text-sm '>
										{testimonials.testimonials[2].testimonial}
									</p>
								</div>
							</div>
						</blockquote>
					</div>
					{/* array index 2 end */}

					{/* array index 3 */}
					<div className='mb-5'>
						<blockquote className='relative bg-white rounded-lg shadow-lg mb-4'>
							<div className='bg-gray-600 rounded-t-lg text px-4 py-5 border-b border-gray-200 sm:px-6'>
								<span className='text-alternative-400 font-semibold leading-6 sm:pl-1 flex justify-between items-center'>
									<p className='text-white font-semibold text-xl sm:inline'>
										{testimonials.testimonials[3].author}
									</p>{' '}
									<p className='sm:inline text-xl'> Parent</p>
								</span>
							</div>
							<h2 className='text-md text-bold italic leading-none pl-5 pt-6 text-gray-400'>
								Overall, An Outstanding Experience!
							</h2>
							{/* <hr className='border-gray-300  w-1/12 mt-3 ml-[200px]' /> */}
							<div className='rounded-t-lg px-6 py-8 sm:px- sm:pt-7 sm:pb-8'>
								<div className='relative text-lg text-gray-700 font-medium'>
									<svg
										className='absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200'
										fill='currentColor'
										viewBox='0 0 32 32'
										aria-hidden='true'
									>
										<path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
									</svg>
									{/* &nbsp; */}
									<p className='relative px-5 text-gray-600 italic text-sm '>
										{testimonials.testimonials[3].testimonial}
									</p>
								</div>
							</div>
						</blockquote>
					</div>
					{/* array index 3 end */}

					{/* array index 0  */}
					<div className='mb-5'>
						<blockquote className='relative bg-white rounded-lg shadow-lg mb-4'>
							<div className='bg-gray-600 rounded-t-lg text px-4 py-5 border-b border-gray-200 sm:px-6'>
								<span className='flex justify-between items-center text-alternative-400 font-semibold leading-6 sm:pl-1 text-justify'>
									<p className='text-white font-semibold text-xl sm:inline'>
										{testimonials.testimonials[0].author}
									</p>{' '}
									<p className='sm:inline text-xl'> Parent</p>
								</span>
							</div>
							<h2 className='text-md text-bold italic leading-none pl-5 pt-6 text-gray-400'>
								Talented Teachers, Role Models!
							</h2>
							{/* <hr className='border-gray-300  w-1/12 mt-3 ml-[200px]' /> */}
							<div className='rounded-t-lg px-6 py-8 sm:px- sm:pt-7 sm:pb-8'>
								<div className='relative text-lg text-gray-700 font-medium'>
									<svg
										className='absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200'
										fill='currentColor'
										viewBox='0 0 32 32'
										aria-hidden='true'
									>
										<path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
									</svg>
									{/* &nbsp; */}
									<p className='relative px-5 text-gray-600 italic text-sm '>
										{testimonials.testimonials[0].testimonial}
									</p>
								</div>
							</div>
						</blockquote>
					</div>
					{/* array index 0 end */}

					{/* new end */}

					{/* new card end */}
					{/* old card */}
					{/* <div className='flex justify-start shadow border rounded-2xl border-gray-200 p-6 bg-white  items-start flex-col space-y-6'>
							<div className='flex justify-start items-center space-x-2'>
								<div>
									<img
										src='https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_6_Ellipse1.png'
										alt='girl avatar'
									/>
								</div>
								<div className='flex  flex-col justify-start items-center space-y-2'>
									<p className=' text-base font-semibold leading-4 text-gray-800'>
										{testimonials.testimonials[0].author}
									</p>
									<p className='text-sm leading-none text-gray-600'>Parent</p>
								</div>
							</div>
							<div className='mt-6 flex justify-start items-start flex-col'>
								<h2 className='text-sm font-semibold leading-none text-gray-700'>
									Talented Teachers, Role Models!
								</h2>
								<p className='mt-4 w-72 lg:w-96 text-base leading-normal text-gray-600'>
									{testimonials.testimonials[0].testimonial}
								</p>
							</div>
						</div> */}

					{/* <div className='flex justify-start shadow border rounded-2xl border-gray-200 p-6 bg-white  items-start flex-col space-y-6'>
							<div className='flex justify-start items-center space-x-2'>
								<div>
									<img
										src='https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_6_Ellipse2.png'
										alt='girl avatar'
									/>
								</div>
								<div className='flex  flex-col justify-start items-start space-y-2'>
									<p className=' text-base font-semibold leading-4 text-gray-800'>
										{testimonials.testimonials[2].author}
									</p>
									<p className='text-sm leading-none text-gray-600'>Parent</p>
								</div>
							</div>
							<div className='mt-6 flex justify-start items-start flex-col'>
								<h2 className='text-sm font-semibold leading-none text-gray-700'>
									All Kids with varied abilities benefit!
								</h2>
								<p className='mt-4 w-72 lg:w-96 text-base leading-normal text-gray-600'>
									{testimonials.testimonials[2].testimonial}
								</p>
								
							</div>
						</div> */}
					{/* <div className='flex justify-start shadow border rounded-2xl border-gray-200 p-6 bg-white  items-start flex-col space-y-6'>
							<div className='flex justify-start items-center space-x-2'>
								<div>
									<img
										src='https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_6_Ellipse3.png'
										alt='girl avatar'
									/>
								</div>
								<div className='flex  flex-col justify-start items-start space-y-2'>
									<p className=' text-base font-semibold leading-4 text-gray-800'>
										{testimonials.testimonials[3].author}
									</p>
									<p className='text-sm leading-none text-gray-600'>Parent</p>
								</div>
							</div>
							<div className='mt-6 flex justify-start items-start flex-col'>
								<h2 className='text-sm font-semibold leading-none text-gray-700'>
									Overall An Outstanding Experience !
								</h2>
								<p className='mt-4 w-72 lg:w-96 text-base leading-normal text-gray-600'>
									{testimonials.testimonials[3].testimonial}
								</p>
								
							</div>
						</div> */}
					{/* <div className='flex justify-start shadow border rounded-2xl border-gray-200 p-6 bg-white  items-start flex-col space-y-6'>
							<div className='flex justify-start items-center space-x-2'>
								<div>
									<img
										src='https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials_6_Ellipse4.png'
										alt='girl avatar'
									/>
								</div>
								<div className='flex  flex-col justify-start items-start space-y-2'>
									<p className=' text-base font-semibold leading-4 text-gray-800'>
										{testimonials.testimonials[4].author}
									</p>
									<p className='text-sm leading-none text-gray-600'>Parent</p>
								</div>
							</div>
							<div className='mt-6 flex justify-start items-start flex-col'>
								<h2 className='text-sm font-semibold leading-none text-gray-700'>
									Kids learn how to try, do and succeed on their own!
								</h2>
								<p className='mt-4 w-72 lg:w-96 text-base leading-normal text-gray-600'>
									{testimonials.testimonials[4].testimonial}
								</p>
								
							</div>
						</div> */}
					{/* old card end */}
				</div>
			</div>
		</div>
	);
}
