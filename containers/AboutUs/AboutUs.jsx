import Image from 'next/image';

import DrummerImg from '../../public/drummer1.jpg';

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
	// ...
	plugins: [
	  // ...
	  require('@tailwindcss/typography'),
	],
  }
  ```
*/
export default function AboutUs({ info }) {
	return (
		<div className='py-16 bg-gray-800 overflow-hidden'>
			<div className='max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8'>
				<div className='text-base max-w-prose mx-auto lg:max-w-none'>
					<h1 className='text-green-600 text-xl font-semibold uppercase'>
						{info.about[0].heading}
					</h1>

					<p className='mt-2 text-white'>What makes us different</p>
				</div>
				<div className='relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72'>
					<p className='text-lg text-gray-500'>{info.about[0].description}</p>
				</div>
				<div className='lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start'>
					<div className='relative z-10'>
						{/* <h3>{info.about[1].heading}</h3> */}
						<div className='prose prose-indigo text-gray-500 mx-auto lg:max-w-none'>
							<h3 className="text-white">{info.about[1].heading}</h3>
							<p>{info.about[1].description}</p>
							<h3 className="text-white">{info.about[2].heading}</h3>
							<p>{info.about[2].description}</p>
							<h3 className="text-white">{info.about[3].heading}</h3>
							<p>We offer our students instruction in:</p>
							<ul role='list'>
								<li>Individual Instrument Lessons</li>
								<li>Artist Development</li>
								<li>Band Development</li>
								<li>Song Writing</li>
								<li>Demo Production</li>
								<li>Performance</li>
							</ul>

							{/* <h3>Your success, our drive</h3>
							<p>
								Our low-key comfortable teaching style, as Kristy Myers put it,
								encourages you to try, do and succeed!
							</p> */}
						</div>
						<div className='mt-10 flex text-base max-w-prose mx-auto lg:max-w-none'>
							{/* <div className='rounded-md shadow'>
								<a
									href='/summercamp'
									className='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-green-700'
								>
									Join the Summer camp
								</a>
							</div>
							<div className='rounded-md shadow ml-4'>
								<a
									href='/lessons'
									className='w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50'
								>
									Lessons offered
								</a>
							</div> */}
						</div>
					</div>
					<div className='mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none'>
						{/* image  */}
						<div className='relative text-base mx-auto max-w-prose lg:max-w-none'>
							<figure>
								<div className='aspect-w-12 aspect-h-7 lg:aspect-none'>
									<Image
										className='rounded-lg shadow-lg object-cover object-center'
										//src='https://images.unsplash.com/photo-1543062094-d22540cadf2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
										//alt='Whitney leaning against a railing on a downtown street'
										src={DrummerImg}
										alt="drummer playing drum"
										width={1184}
										height={1376}
									/>
								</div>
								{/* <figcaption className='mt-3 flex text-sm text-gray-500'>
									<CameraIcon
										className='flex-none w-5 h-5 text-gray-400'
										aria-hidden='true'
									/>
									<span className='ml-2'>Photograph by Oleg Ivanov</span>
								</figcaption> */}
							</figure>
						</div>
						{/* image end  */}
						{/* <svg
							className='absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20'
							// style={{ opacity: }}
							width={404}
							height={384}
							fill='none'
							viewBox='0 0 404 384'
							aria-hidden='true'
						>
							<defs>
								<pattern
									id='bedc54bc-7371-44a2-a2bc-dc68d819ae60'
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits='userSpaceOnUse'
								>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className='text-blue-200 opacity-25'
										fill='currentColor'
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={384}
								fill='url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)'
							/>
						</svg> */}
						<blockquote className='relative bg-white rounded-lg shadow-lg'>
							<div className='rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8'>
								{/* <img
									src='https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg'
									alt='Workcation'
									className='h-8'
								/> */}
								<div className='relative text-lg text-gray-700 font-medium mt-8'>
									<svg
										className='absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200'
										fill='currentColor'
										viewBox='0 0 32 32'
										aria-hidden='true'
									>
										<path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
									</svg>
									<p className='relative'>{info.testimonials[1].testimonial}</p>
								</div>
							</div>
							<cite className='relative flex items-center sm:items-start bg-gray-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10'>
								<div className='relative rounded-full border-white sm:top-0  '>
									{/* <img
										className='w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-green-300'
										src='https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=160&h=160&q=80'
										alt=''
									/> */}
								</div>
								<span className='relative text-green-300 font-semibold leading-6 sm:pl-1'>
									<p className='text-white text-xl font-semibold sm:inline'>
										{info.testimonials[1].author}
									</p>
									{/* <p className='sm:inline'></p> */}
								</span>
							</cite>
						</blockquote>
					</div>
				</div>
			</div>
		</div>
	);
}
