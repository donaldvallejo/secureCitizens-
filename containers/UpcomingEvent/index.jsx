import { useState, useEffect } from 'react'
import {
  Frame,
  Container,
  Diamond,
  Heading,
  Divider,
  Text,
  Button,
} from './UpcomingEvent.styles'
import useSortedEvents from '../../utils/hooks/useSortedEvents'

function getUpcomingEvent(eventArr) {
  if (eventArr.length === 0) {
    return false
  }

  let upcoming = eventArr[0];
  let today = new Date()

  if (new Date(upcoming.startTime) < today) {
    eventArr.shift()
    return getUpcomingEvent(eventArr)
  }

  return upcoming;
}

const UpcomingEvent = () => {

  const { events, isLoading, isError } = useSortedEvents()
  const [upcomingEvent, setUpcomingEvent] = useState(null)
  const [eventInfo, setEventInfo] = useState({
    calendar: {
      icon: <Diamond.Calendar />,
      heading: 'Event Date & Time',
      date: 'No Events Yet!',
      time: '',
    },
    location: {
      icon: <Diamond.Location />,
      heading: 'Event Location',
      line1: 'Saturday Performances - 11am',
      line2: 'Tower 13 Beach Bar & Grill'
    },
  })

  useEffect(() => {
    if (events) {
      setUpcomingEvent(getUpcomingEvent(events))
    }
  }, [isLoading])

  useEffect(() => {
    if (upcomingEvent) {
      const start = new Date(upcomingEvent.startTime).toLocaleDateString('en-us', { weekday: "short", year: "numeric", month: "short", day: "numeric" })

      setEventInfo({
        ...eventInfo,
        calendar: {
          icon: <Diamond.Calendar />,
          heading: 'Event Date & Time',
          date: start,
          time: `9am - 2pm`
        }
      })
    }
  }, [upcomingEvent])

  //console.log("upcomingEvent component: ", { upcomingEvent })
  return (
    <Frame>
      <Frame.Wrapper>
        <Container>
          <Container.Box>
            <Diamond variant="primary">
              <Diamond.Item>
                {eventInfo.calendar.icon}
              </Diamond.Item>
            </Diamond>
            <Heading>
              {eventInfo.calendar.heading}
            </Heading>
            <Divider />
            <Text>
              <Text.B>{eventInfo.calendar.date}</Text.B>
              <br />
              {eventInfo.calendar.time}
            </Text>
          </Container.Box>

          <Container.Box>
            <Diamond variant="secondary">
              <Diamond.Item>
                {eventInfo.location.icon}
              </Diamond.Item>
            </Diamond>
            <Heading>
              {eventInfo.location.heading}
            </Heading>
            <Divider />
            <Text>
              {eventInfo.location.line1}
              <br />
              {eventInfo.location.line2}
            </Text>
          </Container.Box>
        </Container>

        {/* <Button
          type="button"
          icon="left"
          onClick={() => alert('TBD')}
        >
          <Button.Icon />
          Get Directions
        </Button> */}
      </Frame.Wrapper>
    </Frame>
  )
}

export { UpcomingEvent }