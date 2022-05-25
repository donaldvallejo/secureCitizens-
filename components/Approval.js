import React from 'react';
import StudentEventSection from './StudentEventSection';
function Approval({
	studentState,
	handleApproval,
	studentID,
	token,
	mutateStudent,
}) {
	// console.log("Approval.js studentID", { studentID })
	return (
		<>
			{/* Card is full width. Use in 8 col grid for best view. */}
			{/* Card code block start */}
			<div className='w-4/5 mx-auto bg-white shadow rounded xl:flex lg:flex w-full'>
				<div className='w-full xl:w-2/5 lg:w-2/5 bg-gray-100  py-8 border-gray-300 dark:border-gray-200 xl:border-r rounded-tl xl:rounded-bl rounded-tr xl:rounded-tr-none lg:border-r-2 border-b xl:border-b-0 flex justify-center items-center'>
					<div className='flex flex-col items-center'>

						<p className='mb-6 text-sm text-gray-700 dark:text-gray-400'>
							<span className='italic'>Status: </span>
							{studentState.isApproved ? 'Approved' : 'Not Approved'}
						</p>
						<button
							onClick={handleApproval}
							className='bg-white font-medium transition duration-150 ease-in-out hover:bg-gray-200 rounded text-gray-800 px-6 py-2 text-sm border border-gray-300 dark:border-gray-200 focus:outline-none'
						>
							{studentState.isApproved ? 'Deny Student' : 'Approve Student'}
						</button>
					</div>
				</div>
				<div className='xl:w-3/5 lg:w-3/5 px-6 py-8'>
					<div className='flex flex-wrap justify-between'>
						<StudentEventSection
							studentID={studentID}
							token={token}
							mutateStudent={mutateStudent}
						/>
					</div>
				</div>
			</div>
			{/* Card code block end */}
		</>
	);
}
export default Approval;
