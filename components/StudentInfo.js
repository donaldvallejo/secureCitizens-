// student info component
export default function StudentInfo({ student }) {

	return (
		<div className='px-4 xl:px-[200px] my-10'>
			<div>
				<h3 className='text-lg leading-6 font-medium text-gray-900'>
					Student Data
				</h3>
				<p className='mt-1 max-w-2xl text-sm text-gray-500'>
					Summer Camp Student Data.
				</p>
			</div>
			<div className='mt-5 border-t border-gray-200'>
				<dl className='sm:divide-y sm:divide-gray-200'>
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>Student name</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							{student.studentName}
						</dd>
					</div>
					{/* field end */}
					{/* field */}
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>Email</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							{student.email}
						</dd>
					</div>
					{/* field end */}
					{/* field */}
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>Gender</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							{student.gender}
						</dd>
					</div>
					{/* field end */}
					{/* field */}
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>Age</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							{student.age}
						</dd>
					</div>
					{/* field end */}
					{/* field */}
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>
							Any previous experience?
						</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							{student.experience}
						</dd>
					</div>
					{/* field end */}
					{/* field */}
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>
							Instruments played:
						</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							{student.instrumentsPlayed}
						</dd>
					</div>
					{/* field end */}
					{/* field */}
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>
							Instruments to play:{' '}
						</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							<ul>
								{student.instrumentsToPlay.map((instrument) => (
									<li key={instrument}>{instrument}</li>
								))}
							</ul>
						</dd>
					</div>
					{/* field end */}
					{/* field */}
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>Do you Sing?</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							{student.sing}
						</dd>
					</div>
					{/* field end */}
					{/* field */}
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>
							Weeks Interested
						</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							{student.weeksInterested.map((week) => (
								<div key={week._id}>
									<ul>
										<li>
											<span>Name: </span>
											{week.name}
										</li>
										<li>
											<span>Description: </span>
											{week.description}
										</li>
										<li>
											<span>Start date: </span>
											{new Date(week.startTime).toDateString()}
										</li>
										<li>
											<span>End date: </span>
											{new Date(week.endTime).toDateString()}
										</li>
										<li>
											<span>Current Attendees: </span>
											{week.attendees.length}
											{/* <ul>
												{week.attendees.map((attendee) => (
													<li key={attendee}>{attendee}</li>
												))}
											</ul> */}
										</li>
									</ul>
									<hr className='my-2' />
								</div>
							))}
						</dd>
					</div>
					{/* field end */}
					{/* field */}
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>Parents</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							<ul>
								<li>
									<span className='italic'>Parent 1: </span>
									{student.parentNames.parent1}
								</li>
								{student.parent2 ? (
									<li>
										<span className='italic'>Parent 2: </span>
										{student.parentNames.parent2}
									</li>
								) : null}
							</ul>
						</dd>
					</div>
					{/* field end */}
					{/* field */}
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>
							Contact Numbers
						</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							<ul>
								<li>
									<span className='italic'>Phone1: </span>
									{student.contactNumbers.phone1}
								</li>
								<li>
									<span className='italic'>Phone2: </span>
									{student.contactNumbers.phone2}
								</li>
							</ul>
						</dd>
					</div>
					{/* field end */}
					{/* field */}
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>
							Emergency Contacts
						</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							<ul>
								<li>
									<span className='italic'>Contact 1 name: </span>
									{student.emergencyContacts.emC1Name}
								</li>
								<li>
									<span className='italic'>Relationship: </span>
									{student.emergencyContacts.emC1Relationship}
								</li>
								<li>
									<span className='italic'>Phone: </span>
									{student.emergencyContacts.emC1Ph}
								</li>
								<li>&nbsp;</li>
								<li>
									<span className='italic'>Contact 2 name: </span>
									{student.emergencyContacts.emC2Name}
								</li>
								<li>
									<span className='italic'>Relationship: </span>
									{student.emergencyContacts.emC2Relationship}
								</li>
								<li>
									<span className='italic'>Phone: </span>
									{student.emergencyContacts.emC2Ph}
								</li>
							</ul>
						</dd>
					</div>
					{/* field end */}
					{/* field */}
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>
							Physician Contact
						</dt>
						{student.physicianContact ? (
							<>
								<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
									<ul>
										<li>
											<span className='italic'>Name: </span>
											{student.physicianContact?.name ? 'name' : 'no name'}
										</li>
										<li>
											<span className='italic'>Phone: </span>
											{student.physicianContact.phone}
										</li>
									</ul>
								</dd>
							</>
						) : (
							<dd className='text-sm font-medium text-gray-500'>
								No Physician Contact info provided
							</dd>
						)}
					</div>
					{/* field end */}
					{/* field */}
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>

						<dt className='text-sm font-medium text-gray-500'>Medical</dt>
						{student.medical ? (
							<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
								<ul>
									<li>
										<span className='italic'>Conditions: </span>
										{student.medical.conditions}
									</li>
									<li>
										<span className='italic'>Medications: </span>
										{student.medical.medications}
									</li>
								</ul>
							</dd>
						) : (
							<dd>
								No Medical information provided.
							</dd>
						)}
					</div>
					{/* field end */}
					{/* field */}
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>
							How did you hear about Rockademy?
						</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							{student.howHear}{' '}
							<p>
								<span>Details: </span>
								{student.howHearDetails}
							</p>
						</dd>
					</div>
					{/* field end */}
					{/* field */}
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>
							Liability Check:
						</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							{student.liabilityCheck ? 'Yes' : 'No'}
						</dd>
					</div>
					{/* field end */}
					{/* field */}
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>
							Date Completed
						</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							{new Date(student.dateCompleted).toDateString()}
						</dd>
					</div>
					{/* field end */}

					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>
							Payment Method:
						</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							{student.paymentMethod}
						</dd>
					</div>
					{student.paymentMethod === 'Venmo' ?
						(
							<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
								<dt className='text-sm font-medium text-gray-500'>Venmo:</dt>
								<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
									{student.venmo}
								</dd>
							</div>
						) : null
					} 
					<div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4'>
						<dt className='text-sm font-medium text-gray-500'>Signature</dt>
						<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
							<img src={student.signature} alt='signature' className="border p-2 shadow" />
						</dd>
					</div>
					
				</dl>
			</div>
		</div>
	);
}
