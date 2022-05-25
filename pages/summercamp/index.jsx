import React, { useEffect, useState } from 'react'

import { StudentSignup } from '../../components';
import { Hero, SCMainContent } from '../../containers';
import { Layout } from '../../layout'
import Auth from '../../utils/auth'

export default function SummerCampPage({ allEvents, userText }) {

    const [events, setEvents] = useState(allEvents)
    const [text, setUserText] = useState(userText)
    const [token, setToken] = useState('') // BEARER TOKEN MUST BE PRESENT IN ALL PROTECTED QUERIES
    const [loggedIn, setLoggedIn] = useState(false);

    // console.log(events)
    useEffect(() => {
        setEvents(allEvents)
        setUserText(userText)
    }, [allEvents, userText])

    useEffect(() => {
        document.title = "The Rockademy | Summer Camp"
    }, [])


    // useEffect(() => {
    //     const loggedIn = Auth.loggedIn();
    //     const userToken = Auth.getToken();
    //     setToken(userToken)
    //     setLoggedIn(loggedIn);
    // })

    return (
        <Layout>
            <SCMainContent allEvents={events} userText={text}/>
            <StudentSignup eventDates={events} token={token} />
        </Layout>
    )
}


// ======================================= //
//        CALL FOR ALL ADMIN DATA          //
// This function gets called at build time //
// ======================================= //
export async function getServerSideProps(ctx) {
    //console.log(`${process.env.CONNECTION_BASE_URL}/api/events`)
    // FETCH ALL EVENTS
    // const eventResponse = await fetch(`${process.env.CONNECTION_BASE_URL}/api/events`)
    // const allEvents = await eventResponse.json()
    
    // const userTextResponse = await fetch(`${process.env.CONNECTION_BASE_URL}/api/usertext`)
    // // extract the data
    
    // const userText = await userTextResponse.json()
    // console.log({ allEvents, userText })

    const [eventResponse, userTextResponse] = await Promise.all([
        fetch(`${process.env.CONNECTION_BASE_URL}/api/events`),
        fetch(`${process.env.CONNECTION_BASE_URL}/api/usertext`)
    ]);

    const [allEvents, userText] = await Promise.all([
        eventResponse.json(),
        userTextResponse.json() || { headline: '', content: [''], details: '' }
    ])
    return {
        props: {
            allEvents,
            userText,
        },
    };
}
