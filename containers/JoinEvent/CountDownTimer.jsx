import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

const Timer = styled(motion.div)(() => [
  tw`flex justify-center space-x-4`
  // space-x-8
])

const TimerBox = styled(motion.div)(() => [
  tw`text-center`
])

const TimerText = styled(motion.p)(() => [
  tw`text-white text-5xl font-display`
])

const TimerSubText = styled(motion.p)(() => [
  tw`text-white/75 font-body text-sm font-bold uppercase`
])

const TimerDivider = styled(motion.div)(() => [
  tw`border-l-2 border-black my-1`
])

const CountDownTimer = ({ upcomingEvent }) => {
  const { startTime } = upcomingEvent
  // const start = new Date(startTime)
  // const today = new Date()

  const [timerDays, setTimerDays] = useState()
  const [timerHours, setTimerHours] = useState()
  const [timerMinutes, setTimerMinutes] = useState()
  const [timerSeconds, setTimerSeconds] = useState()

  const TIMER = {
    days: {
      text: timerDays || '00',
      sub: 'days',
    },
    hours: {
      text: timerHours || '00',
      sub: 'hr',
    },
    minutes: {
      text: timerMinutes || '00',
      sub: 'min',
    },
    seconds: {
      text: timerSeconds || '00',
      sub: 'sec',
    },
  }

  let interval;
  const startTimer = () => {
    const countDownDate = new Date(startTime).getTime()
    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countDownDate - now

      const days = Math.floor(distance / (24 * 60 * 60 * 1000))
      const hours = Math.floor(distance % (24 * 60 * 60 * 1000) / (1000 * 60 * 60))
      const minutes = Math.floor(distance % (60 * 60 * 1000) / (1000 * 60))
      const seconds = Math.floor(distance % (60 * 1000) / (1000))

      if (distance < 0) {
        clearInterval(interval.current)
      } else {
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }
    })
  }

  useEffect(() => {
    startTimer()
    // clear timer when component unmounts!
    return () => { clearInterval(interval) }
  }, [])

  return (
    <Timer>
      <TimerBox>
        <TimerText>{TIMER.days.text}</TimerText>
        <TimerSubText>{TIMER.days.sub}</TimerSubText>
      </TimerBox>
      <TimerDivider />
      <TimerBox>
        <TimerText>{TIMER.hours.text}</TimerText>
        <TimerSubText>{TIMER.hours.sub}</TimerSubText>
      </TimerBox>
      <TimerDivider />
      <TimerBox>
        <TimerText>{TIMER.minutes.text}</TimerText>
        <TimerSubText>{TIMER.minutes.sub}</TimerSubText>
      </TimerBox>
      <TimerDivider />
      <TimerBox>
        <TimerText>{TIMER.seconds.text}</TimerText>
        <TimerSubText>{TIMER.seconds.sub}</TimerSubText>
      </TimerBox>
    </Timer>
  )
}

export { CountDownTimer }