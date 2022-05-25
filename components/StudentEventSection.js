import React, { useEffect, useState } from 'react';
import useSWR from 'swr';

// define base url for data fetching
const baseURL = process.env.NEXT_PUBLIC_CONNECTION_BASE_URL || '';

//const fetcher = (url) => fetch(url).then((res) => res.json());

// DATA FETCHING USED IN MULTIPLE useSWR HOOKS ON THIS PAGE
const fetcherWithAuth = (url, token) => { 
	return fetch(url, {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		}
	}).then(res => res.json());
}

const StudentEventSection = ({ studentID, token, mutateStudent }) => {
	//console.log("hello from StudentEventSection.js", { token })
	const [addEvent, setAddEvent] = useState();
	const [displayEvent, setDisplayEvent] = useState();

	const { data, mutate, error } = useSWR(token && token !== '' ? [`/api/events/admin`, token] : null, fetcherWithAuth );

	function selectEvent(e) {
		const event = data.find((obj) => obj._id === e.target.value);
		setAddEvent(e.target.value);
		setDisplayEvent(event);
		// console.log("event selected", { addEvent })
	}

	async function handleAddClick(e) {
		e.preventDefault();
		try {
			const response = await fetch(`/api/events/addattendee/${addEvent}/${studentID}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${token}`,
				},
			});
			const updatedEvent = await response.json();

			const studentResponse = await fetch(`/api/students/${studentID}`);
			const studentObj = await studentResponse.json();
			// console.log({ updatedEvent })

			mutate(updatedEvent);
			// mutateStudent(studentObj);
			location.reload();
			// setIsAttending(true)
		} catch (err) {
			console.error(err);
		}
	}
	if (!token) return <div>AAA...</div>;

	if (error) return <div>There was an error...</div>;
	if (!data) return <div>Loading...</div>;
	if (data.err) return <div>{data.message}</div>;

	if (data)
		return (
			<div
				style={{
					// width: '60%',
					margin: '40px auto',
					display: 'flex',
					// border: '1px solid black',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					textAlign: 'center',
					padding: '1.6rem',
				}}
			>
				{displayEvent ? (
					<div>
						<h3>
							<span className='italic'>Selected Event:</span>{' '}
							{displayEvent.name}
						</h3>
						<p>
							<span className='italic'>Event Dates:</span>{' '}
							{/* {new Date(displayEvent.startTime).toDateString()} -{' '}
							{new Date(displayEvent.endTime).toDateString()} */}
							{displayEvent.startTime.split('T')[0]}
							{displayEvent.endTime.split('T')[0]}
						</p>
						<p>
							<span className='italic'>Current Attendance:</span>{' '}
							{displayEvent.attendees.length} students
						</p>
					</div>
				) : null}
				<select
					defaultValue=''
					value={addEvent}
					// className='p-3 mb-5 onFocus'
					style={{
						width: '60%',
						margin: 10,
						border: '1px solid black',
						padding: 5,
					}}
					onChange={selectEvent}
				>
					<option value='' disabled>
						select a summercamp for this student:
					</option>
					{data.map((eventObj) => {
						return (
							<option key={eventObj._id} value={eventObj._id}>
								{eventObj.name}
							</option>
						);
					})}
				</select>
				<button
					onClick={handleAddClick}
					className='bg-white font-medium transition duration-150 ease-in-out hover:bg-gray-200 rounded text-gray-800 px-6 py-2 text-sm border border-gray-300 dark:border-gray-200 focus:outline-none'
				>
					Add Student to Event
				</button>
			</div>
		);
};

export default StudentEventSection;
