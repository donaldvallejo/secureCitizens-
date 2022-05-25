import React from 'react';
import auth from '../utils/auth';

function AttendingEvent({ data, studentID }) {
	//console.log({ data })

	async function handleRemoveClick(e) {
		e.preventDefault();
		try {
			const response = await fetch(`/api/events/removeattendee/${data._id}/${studentID}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${auth.getToken()}`,
				},
			});
			const updatedEvent = await response.json();

			// const studentResponse = await fetch(`/api/students/${studentID}`);
			// const studentObj = await studentResponse.json();
			// console.log({ updatedEvent })

			location.reload();
			// setIsAttending(true)
		} catch (err) {
			console.error(err);
		}
	}


	return (
		<>
			<div className='w-4/5 md:w-2/5 lg:w-1/4 m-2 flex items-center justify-center'>
				<div className='p-2 w-full flex flex-col items-center py-6 md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg'>
					<div className='w-full flex items-center justify-center'>
						<div className='flex flex-col items-center'>
							{/* <img
								src='https://cdn.tuk.dev/assets/templates/olympus/profile.png'
								alt='profile'
							/> */}
							<p className='text-xl text-gray-300'>Event:</p>

							<p className='mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-white'>
								{data.name}
							</p>
						</div>
					</div>
					<div className='flex justify-center items-center mt-7 flex-col'>
						<div className="text-center">
							<p className='text-xs text-gray-300'>Event Dates:</p>
							<p className='mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50'>
								{new Date(data.startTime).toDateString()} -{' '}
								{new Date(data.endTime).toDateString()}
							</p>
						</div>
						<br />
						<div>
							<p className='text-xs text-gray-300'>Current Event Attendance:</p>
							<p className='mt-2 text-center text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50'>
								{data.attendees.length} students
							</p>
						</div>
						<button
							onClick={handleRemoveClick}
							className="text-xl mt-4 border p-2 text-white bg-gray-600 rounded shadow-xl"
						>Remove Attendee</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default AttendingEvent;
