import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Auth from '../../../utils/auth';
import useSWR from 'swr';
import ErrorInfo from '../../../components/ErrorInfo';
//import ErrorRed from '../../../components/ErrorRed';
import StudentNewInfo from '../../../components/StudentInfo';
import AttendingNewEvent from '../../../components/AttendingEvent';
import Approval from '../../../components/Approval';
import Link from 'next/link';

// define base url for data fetching
const baseURL = process.env.NEXT_PUBLIC_CONNECTION_BASE_URL || '';


// DATA FETCHING USED IN MULTIPLE useSWR HOOKS ON THIS PAGE

//const fetcher = (url) => fetch(url).then((res) => res.json());
const fetcherWithAuth = (url, token) => { 
	return fetch(url, {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json',
		}
	}).then(res => res.json());
}

// PRIMARY COMPONENT
export default function Student() {
	const router = useRouter();
	const { id: studentID } = router.query;
	const [token, setToken] = useState(null);
	const [isAttending, setIsAttending] = useState(false);

	useEffect(() => {

		document.title = 'Student details';
		// get token
		let userToken = Auth.getToken() || ''
		setToken(userToken);
	}, [])

	const { data, error, mutate } = useSWR(router.isReady && token !== '' ? [`/api/students/${studentID}`, token] : null, fetcherWithAuth);

	if (error)
		return (
			<div>
				<p>There was an error...</p>
				<Link passHref href="/admin/dashboard">
					<a >Go Back to Dashboard</a>
				</Link>
			</div>
		);
	if (!data) {
		// console.log(data);
		return <div>Loading...</div>;
	}
	if (data.error && data.error.message) {
		return (
			<div>
				<h2>Ooops! {data.error.message}</h2>
				<Link passHref href="/admin/dashboard">
					<a>Click here to go to admin portal</a>
				</Link>
			</div>
		)
	}
	if (data) {
		return (
			<>
				<div className="w-full mt-6 p-4 text-center">
					<Link passHref href="/admin/dashboard" >
						<a className="p-4 text-2xl border rounded shadow" >Go Back</a>
					</Link>
				</div>

				{/* <StudentNewInfo /> */}
				{/* RENDER STUDENT DATA PLUS EXTRA FUNCTIONALITY */}
				<StudentInfo
					student={data}
					studentID={studentID}
					mutate={mutate}
					//isAttending={isAttending}
					//setIsAttending={setIsAttending}
				/>
				{/* RENDER SUMMERCAMP STUDENT IS SET TO ATTEND */}

				<AttendingEvent studentID={studentID} token={token} setIsAttending={setIsAttending} />
			</>
		);
	}
}

// SUMMERCAMP STUDENT IS CURRENTLY ATTENDING, IF ANY
// RENDERS H1 STRING IF STUDENT IS NOT ASSIGNED TO EVENT
function AttendingEvent({ studentID, token, setIsAttending }) {
	const { data, error } = useSWR(token && token !== '' ? [`/api/events/attending/${studentID}`, token] : null, fetcherWithAuth);
	if (error)
		return <div>{/* <ErrorRed message='There was an error...' /> */}</div>;
	if (!data || data.length === 0)
		return (
			<ErrorInfo message='This student is not assigned to an event yet...' />
		);
	if (data.err) return <div>{/* <ErrorRed message={data.message} /> */}</div>;
	if (data.error) {
		return (
			<div>
				<p> Oops! {data.error} </p>
			</div>
		)
	}
	if (data.length > 0) {
		//setIsAttending(true);
		return (
			<>
				<h3 className="text-2xl text-center font-bold mt-12">{`This Student is attending the following event${data.length > 1 ? 's' : ''}:`}</h3>

				<div
					style={{
						width: '100%',
						margin: '10px auto 40px auto',
						padding: '1.6rem',
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
						flexWrap: 'wrap'
						// flexDirection: 'column',
					}}
				>

					{data.map(eventObj => {
						return <AttendingNewEvent data={eventObj} key={eventObj._id} studentID={studentID} />
					})}

				</div>
			</>
		);
	}
}

// RAW STUDENT DATA PLUS APPROVE AND EVENT ASSIGNMENT FUNCTIONALITY
// (SEE BELOW)
function StudentInfo({
	student,
	studentID,
	mutate,
	isAttending,
	setIsAttending,
}) {
	const [token, setToken] = useState();
	// console.log("studentInfo studentID", { studentID })

	useEffect(() => {
		const userToken = Auth.getToken() || '';
		setToken(userToken);
	}, []);

	async function handleApproval(e) {
		e.preventDefault();

		try {
			const response = await fetch(`/api/students/approve/${studentID}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${token}`,
				},
				body: JSON.stringify({ isApproved: !student.isApproved }),
			});
			const approveData = await response.json();
			mutate(approveData.updatedStudent);
		} catch (err) {
			console.log(err);
			alert('there was a problem, check the console for error output');
		}
	}
	// console.log(student);
	// console.log(student.birthday);
	// console.log(student.contactNumbers);
	// console.log(student.studentName);
	return (
		<div>
			<StudentNewInfo student={student} />

			<ApprovalSection 
				studentID={studentID} 
				token={token} 
				studentState={student} 
				handleApproval={handleApproval} 
				mutateStudent={mutate} 
			/>
		</div>
	);
}

// APPROVAL PLUS BUTTON TO UPDATE
function ApprovalSection({
	studentState,
	handleApproval,
	studentID,
	token,
	mutateStudent,
}) {
	// console.log("ApprovalSection primary studentID", { token })
	return (
		<>
			<div className='items-center mx-4 xl:mx-[200px]'>
				<Approval
					studentState={studentState}
					handleApproval={handleApproval}
					studentID={studentID}
					token={token}
					mutateStudent={mutateStudent}
				/>
			</div>
		</>
	);
}