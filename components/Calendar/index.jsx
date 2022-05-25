import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import React, { useState, useEffect, useRef } from 'react'

const Calendar = ({ events }) => {

    const formattedEvents = events.map(event => {
        return {
            title: event.name,
            start: event.startTime,
            end: event.endTime,
            description: event.description,
            isHiddenDay: false
        }
    })


    const [monthView, setMonthView] = useState(true)
    const [calEvents, setCalEvents] = useState(formattedEvents)
    // console.log(calEvents)

    const calRef = useRef()

    useEffect(() => {
        setCalEvents(formattedEvents)
        // calRef.current.focus()
        // console.log(calRef.current.render)
        calRef.current.getApi().changeView(monthView ? "dayGridMonth" : "timeGridWeek");
    }, [events, monthView])

    return (<>
        <button className="bg-[#2C3E50] rounded-lg p-2 mb-2" onClick={() => setMonthView(!monthView)}>Change View</button>

        {/* <p>Current View: {monthView ? 'month' : 'week'}</p> */}
        <FullCalendar
            ref={calRef}
            plugins={[interactionPlugin, dayGridPlugin, timeGridPlugin]}
            initialView="timeGridWeek"
            nowIndicator={true}
            editable={false}
            // initialEvents={calEvents}
            eventStartEditable={!true}
            // dateClick={() => alert("date clicked")}
            events={calEvents}
            displayEventTime={false}
            // eventSources={[calEvents]}
            eventClick={(info) => alert('event description: \n' + info.event.extendedProps.description)}
            eventDragStop={(info) => console.log(info.event)}
            //loading={(isLoading) => console.log({ isLoading })}
            hiddenDays={[]}
        />
    </>
    )
}

export { Calendar }
