const ContactSectionNew = () => {
	return (
		<div className='bg-gray-800 text-gray-400'>
			<div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
				<div className='divide-y-2 divide-gray-200'>
					<div className='lg:grid lg:grid-cols-3 lg:gap-8'>
						<h2 className='text-2xl text-gray-200 font-extrabold sm:text-3xl'>
							Get in touch
						</h2>
						<div className='mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2'>
							<div>
								<h3 className='text-lg leading-6 font-medium text-gray-200'>
									Address
								</h3>
								<dl className='mt-2 text-base'>
									<div>
										<dt className='sr-only text-gray-200'>Address</dt>
										<dd>The Rockademy</dd>
										<dd>524 Stevens Ave Ste 5</dd>
										<dd>Solana Beach, CA 92075</dd>
									</div>
									{/* <div className='mt-1'>
										<dt className='sr-only'>Phone number</dt>
										<dd>+1 (555) 123-4567</dd>
									</div> */}
								</dl>
							</div>
							<div>
								<h3 className='text-lg leading-6 font-medium text-gray-200'>
									Email
								</h3>
								<dl className='mt-2 text-base'>
									<div>
										<dt className='sr-only'>Email</dt>
										<dd>rockademy@hotmail.com</dd>
									</div>
									{/* <div className='mt-1'>
										<dt className='sr-only'>Phone number</dt>
										<dd>+1 (555) 123-4567</dd>
									</div> */}
								</dl>
							</div>
							<div>
								<h3 className='text-lg leading-6 font-medium text-gray-200'>
									Join our team
								</h3>
								<dl className='mt-2 text-base'>
									<div>
										<dt className='sr-only'>Email</dt>
										<dd>rockademy@hotmail.com</dd>
									</div>
									<div className='mt-1'>
										<dt className='sr-only'>Phone number</dt>
										<dd>+1 858-254-0805</dd>
									</div>
								</dl>
							</div>
							<div>
								<h3 className='text-lg leading-6 font-medium text-gray-200'>
									Support
								</h3>
								<dl className='mt-2 text-base'>
									<div>
										<dt className='sr-only'>Email</dt>
										<dd>rockademy@hotmail.com</dd>
									</div>
									<div className='mt-1'>
										<dt className='sr-only'>Phone number</dt>
										<dd>+1 858-254-0805</dd>
									</div>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export { ContactSectionNew };
