import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import tw, { styled } from 'twin.macro'

import { Calendar } from '../../../components'
import { AddEventForm } from '../../../components'
import { AdminEventModal, AdminUserTextModal } from '../../../components'
import Auth from '../../../utils/auth'

// import AddStudentForm from './AddStudentForm'

const Neumorphism = styled(motion.div)(() => [
    `
    border-radius: 22px;
    background: #1f2937;
    box-shadow:  5px 5px 10px #141a23, -5px -5px 10px #2a384b;
    `,
    tw`
    p-4
    `
]);

const LogoutButton = styled(motion.div)(() => [
    `
    border-radius: 22px;
    background: #1f2937;
    box-shadow:  5px 5px 10px #141a23, -5px -5px 10px #2a384b;
    `,
    tw`
    p-4
    md:w-1/6
    lg:w-1/3
    w-3/4
    text-center
    m-4
    `
]);

const HomeButton = styled(motion.div)(() => [
    `
    border-radius: 22px;
    background: #1f2937;
    box-shadow:  5px 5px 10px #141a23, -5px -5px 10px #2a384b;
    `,
    tw`
    p-4
    md:w-1/6
    lg:w-1/3
    w-3/4
    text-center
    m-4
    `
]);

const EventCard = styled(motion.div)(() => [
    `
    border-radius: 22px;
    background: #1f2937;
    box-shadow: inset 5px 5px 10px #141a23,inset -5px -5px 10px #2a384b;
    `,
    tw`
    mb-3
    text-center
    `
])

const EventCardButton = styled(motion.button)(() => [
    tw`
    bg-[#2C3E50]
    rounded-lg
    p-1
    px-3
    mx-1
    `
])

const baseURL = process.env.NEXT_PUBLIC_CONNECTION_BASE_URL || '';

// aux function to get data
function getFetcher(url, token) {
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${token}`,
        },
    });
}


export default function AdminDashboard({ userText }) {
    const router = useRouter();

    // ===== //
    // STATE //
    // ===== //

    const [students, setStudents] = useState([])
    const [modifiableStudents, setModifiableStudents] = useState([])
    const [events, setEvents] = useState([])
    const [userTextState, setUserTextState] = useState(userText)
    const [token, setToken] = useState('') // BEARER TOKEN MUST BE PRESENT IN ALL PROTECTED QUERIES
    const [loggedIn, setLoggedIn] = useState(false);
    const [showEventModal, setShowEventModal] = useState(false);
    const [showUserTextModal, setShowUserTextModal] = useState(false)
    const [eventModalContent, setEventModalContent] = useState(null)
    const [studentFilter, setStudentFilter] = useState('')

    // ======= //
    // EFFECTS //
    // ======= //

    useEffect(async () => {
        document.title = 'Dashboard';
        // check if logged in
        const loggedIn = Auth.loggedIn();
        const userToken = Auth.getToken() || '';
        setToken(userToken);
        setLoggedIn(loggedIn);
    }, []);

    useEffect(async () => {
        if (token === '') return;

        // fetch student and event data in parallel
        const [allStudents, allEvents] = await Promise.all([getStudents(), getEvents()]);
        setModifiableStudents(allStudents);
        setEvents(allEvents);

    }, [token])

    // ========== //
    // FETCH DATA //
    // ========== //
    
    // get students
    async function getStudents() {
        try {
            const response = await getFetcher(`/api/students`, token);
            if (response.status !== 200) {
                //throw new Error()
                const { error } = await response.json();
                throw new Error(error ? error : 'there is an error');
            }
            return response.json();
        } catch (err) {
            console.log(err.name, err.message);
            return [];
        }
    }

    // get events
    async function getEvents() {
        try {
            const response = await getFetcher(`/api/events/admin`, token);
            if (response.status !== 200) {
                //console.log(response)
                const { error } = await response.json();
                throw new Error(error ? error : 'there is an error');
            }
            return response.json();
        } catch (err) {
            console.log(err.name, err.message);
            return [];
        }
    } 


    // ============= //
    // FORM HANDLERS //
    // ============= //


    async function handleEventDelete(eventId) {
        try {
            const response = await fetch(`/api/events/${eventId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`
                },
            })

            const removeData = await response.json()
            setEvents(removeData)
        } catch (err) {
            console.log(err)
            alert("there was a problem, check the console for error output")
        }
    }

    function handleEventModal(event) {
        if (!showEventModal) {
            setEventModalContent(event);
            setShowEventModal(true);
        } else {
            setEventModalContent(null);
            setShowEventModal(false);
        }
    }

    async function handleApproval(studentID, currentAppr, idx) {
        // e.preventDefault()

        try {
            const response = await fetch(`/api/students/approve/${studentID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`,
                    //'authorization': `Bearer ${''}`,
                },
                body: JSON.stringify({ isApproved: !currentAppr })
            })
            const { updatedStudent, error } = await response.json();
            //console.log(updatedStudent, error)
            if (error) {
               throw new Error(error);
            }
            if (!updatedStudent) {
                throw new Error('there is an error');
            }
            setModifiableStudents(prevStudents => [
                ...prevStudents.slice(0, idx), updatedStudent, ...prevStudents.slice(idx+1)
            ]);
            
            //location.reload();
            // if (response.status < 300) {
            //     console.log(response.status)
            // refreshData();
            // }
            // mutate(approveData.updatedStudent)
        } catch (err) {
            console.log(err)
            alert("there was a problem, check the console for error output")
        }
    }

    async function handleUpdatePaid(studentID, currentPaid, idx) {
        try {
            const response = await fetch(`/api/students/paid/${studentID}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify({ hasPaid: !currentPaid })
            });

            const { updatedStudent, error } = await response.json();
            //console.log(updatedStudent, error)
            if (error) {
               throw new Error(error);
            }
            if (!updatedStudent) {
                throw new Error('there is an error');
            }
            setModifiableStudents(prevStudents => [
                ...prevStudents.slice(0, idx), updatedStudent, ...prevStudents.slice(idx+1)
            ]);
            // const paidData = await response.json();
            // console.log(paidData)
            //location.reload();

            // refreshData();

        } catch (err) {
            console.log(err)
            alert("there was a problem, check the console for error output")
        }
    }

    // const refreshData = () => {
    //     router.replace('/admin/dashboard');
    // }

    function handleFilter(e) {
        setStudentFilter(e.target.value);
    }


    return (
        <div className="bg-gray-800 text-gray-400">
            {loggedIn ? (
                <>
                    {showEventModal ? <AdminEventModal setEvents={setEvents} token={token} setShowEventModal={setShowEventModal} event={eventModalContent} /> : null}
                    {showUserTextModal ? <AdminUserTextModal setUserTextState={setUserTextState} userTextState={userTextState} token={token} setShowUserTextModal={setShowUserTextModal} /> : null}
                    <h1 className='text-3xl text-center text-slate-200 pt-4'>Admin Dashboard</h1>
                    <br />
                    {/* <h1>Logged In? {loggedIn ? 'true' : 'false'}</h1> */}
                    <div className='flex w-full justify-center mb-8'>

                        <HomeButton>

                            <Link passHref href="/">
                                <a>Return Home</a>
                            </Link>
                        </HomeButton>

                        <LogoutButton>
                            <button onClick={(() => Auth.logout())}>Logout</button>
                        </LogoutButton>
                    </div>
                    <hr className="border-gray-600 w-3/4 text-center mx-auto my-6" />
                    <div className="flex justify-center w-full">
                        <HomeButton>
                            <button onClick={() => setShowUserTextModal(true)}>Custom Text</button>
                        </HomeButton>
                    </div>
                    <hr className="border-gray-600 w-3/4 text-center mx-auto my-6" />
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                        <input style={{ width: '60%', margin: '0 auto', padding: '.8rem', backgroundColor: '#1f2937', borderRadius: '25px', boxShadow: 'inset 5px 5px 10px #141a23, inset -5px -5px 10px #2a384b' }} type="text" value={studentFilter} placeholder="Search for Student by name" onChange={handleFilter} />
                    </div>

                    <div style={{ width: '90%', margin: '0 auto', height: '60vh', overflow: 'auto', marginBottom: 80 }}>
                        <table style={{ width: '100%' }}>
                            <thead className="bg-[#2C3E50] text-lg text-slate-200" style={{ position: 'sticky', top: 0 }}>
                                <tr>
                                    <th>Student Name</th>
                                    <th>Approved?</th>
                                    <th>Paid?</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {modifiableStudents && modifiableStudents.length > 0 ? (
                                    // modifiableStudents
                                    // .filter(student => )
                                    // .map((student, idx) => {
                                    modifiableStudents.map((student, idx) => {
                                        if (!student.studentName.toLowerCase().includes(studentFilter.toLowerCase())) return null;
                                        return (
                                            <tr 
                                                key={student._id}
                                                style={{ minHeight: '4.5rem', backgroundColor: '#1f2937', borderRadius: '25px', boxShadow: '10px 10px 20px #141a23, -10px -10px 20px #2a384b' }}
                                            >
                                                <th>
                                                    {student.studentName}
                                                </th>
                                                <td>
                                                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '.3rem' }}>
                                                        <span style={{ color: student.isApproved ? 'green' : 'red' }}>
                                                            {student.isApproved ? "YES" : "NO"}
                                                        </span>
                                                        <button
                                                            onClick={() => handleApproval(student._id, student.isApproved, idx)}
                                                            className="bg-[#2C3E50] rounded-lg p-2 mb-2"
                                                        //className="rounded-lg p-2 text-slate-200"
                                                        //style={{ background: student.isApproved ? 'red' : 'green' }}
                                                        >
                                                            {student.isApproved ? "Deny" : "Approve"}
                                                        </button>
                                                    </div>
                                                </td>
                                                <td >
                                                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', padding: '.3rem' }}>
                                                        <span style={{ color: student.hasPaid ? 'green' : 'red' }}>
                                                            {student.hasPaid ? "PAID" : "UNPAID"}
                                                        </span>
                                                        <button
                                                            onClick={() => handleUpdatePaid(student._id, student.hasPaid, idx)}
                                                            className="bg-[#2C3E50] rounded-lg p-2 mb-2"
                                                        //className="rounded-lg p-2 text-slate-200"
                                                        //style={{ background: student.hasPaid ? 'red' : 'green' }}
                                                        >
                                                            {student.hasPaid ? "Mark as UNPAID" : "Mark as PAID"}
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className='flex justify-center flex-col items-center p-1.5'
                                                    //style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', padding: '.3rem' }}
                                                    >
                                                        <button
                                                            id={student._id}
                                                            className="bg-[#2C3E50] rounded-lg p-2 mb-2"
                                                            onClick={() => {
                                                                window.location.href = '/admin/student/' + student._id
                                                            }}
                                                        >
                                                            View Student Details
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                ) : (<tr className="flex justify-center">
                                        <td>
                                            No student added
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div style={{ display: 'flex', padding: '2rem', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                        <Neumorphism className="w-full lg:w-1/4 mx-auto h-full mb-6">
                            <div style={{ display: 'flex', flexDirection: 'column', overflow: 'auto', height: 700, padding: '.6rem' }}>
                                {events && events.length > 0 ? (
                                    events.map(event => {
                                        //const start = new Date(event.startTime).toLocaleDateString() + "--" + new Date(event.startTime).toLocaleTimeString()
                                        //const end = new Date(event.endTime).toLocaleDateString() + "--" + new Date(event.endTime).toLocaleTimeString()
                                        const start = event.startTime.split('T')[0];
                                        const end = event.endTime.split('T')[0];

                                        // console.log({ event })
                                        return (
                                            <EventCard key={event._id} >
                                                <div id={event._id} style={{ padding: '1.5rem', marginBottom: 8 }}>
                                                    <h1 className="text-center">{event.name.toUpperCase()}</h1>
                                                    <hr className="border-gray-600 w-2/3 text-center mx-auto my-2" />
                                                    <p className="mb-2">Start: <br /><span className="text-gray-200">{start}</span></p>
                                                    <p className="mb-2">End: <br /><span className="text-gray-200">{end}</span></p>
                                                    <hr className="border-gray-600 w-1 text-center mx-auto my-2" />
                                                    <p className="mb-2">Description: <br /><span className="text-gray-200">{event.description}</span></p>
                                                    <EventCardButton onClick={() => handleEventModal(event)}>
                                                        {/* <button> */}
                                                            Show Info
                                                        {/* </button> */}
                                                    </EventCardButton>
                                                    <EventCardButton 
                                                        id={event._id}
                                                        onClick={() => handleEventDelete(event._id)}
                                                    >
                                                        {/* <button> */}
                                                            Delete
                                                        {/* </button> */}
                                                    </EventCardButton>
                                                </div>
                                            </EventCard>

                                        )
                                    })

                                ) : (
                                    <p>No Events yet</p>
                                )}
                            </div>
                        </Neumorphism>

                        {/* <div
                            className="w-full md:w-3/4"
                        // style={{ width: '70%' }}
                        > */}
                        <Neumorphism className="w-full lg:w-3/5 mx-auto">
                            <Calendar events={events} style={{}} />
                        </Neumorphism>
                        {/* </div> */}
                    </div>

                    <AddEventForm token={token} setEvents={setEvents} />
                    {/* <div className="w-full flex justify-center">
                        <form>
                            <label htmlFor="headline">Headline</label>
                            <input type="text" id="headline" name="headline" value={ }></input>
                        </form>


                    </div> */}
                </>
            ) : (
                <div
                    className="w-full py-16 text-center font-2xl h-screen"
                >

                    <h1>
                        You have been logged out
                        <br />
                        <Link passHref href="/admin">
                            <a className="text-2xl" >CLICK HERE</a>
                        </Link>
                    </h1>
                </div>
            )}
        </div>
    )
}

// ======================================= //
//        CALL FOR ALL ADMIN DATA          //
// This function gets called at build time //
// ======================================= //
export async function getServerSideProps(ctx) {
    // console.log(`${process.env.CONNECTION_BASE_URL}/api/students`)
    // // FETCH ALL STUDENTS
    // const response = await fetch(`${process.env.CONNECTION_BASE_URL}/api/students`);
    // // extract the data
    // const allStudents = await response.json();

    // // FETCH ALL EVENTS
    // const eventResponse = await fetch(`${process.env.CONNECTION_BASE_URL}/api/events`)
    // // extract the data
    // const allEvents = await eventResponse.json()

    // FETCH USERTEXT
    const userTextResponse = await fetch(`${process.env.CONNECTION_BASE_URL}/api/usertext`)
    //extract the data
    const userText = await userTextResponse.json() || { headline: '', content: [''], details: '' }

    return {
        props: {
            userText
        },
    };
}
