import React, { useState, useEffect } from 'react'
import tw, { styled, css } from 'twin.macro'
import { motion } from 'framer-motion'

const TheForm = styled(motion.form)(() => [
	tw`
      px-12 
      md:px-24 
      lg:px-80 
      py-20 
      flex 
      flex-col 
      w-full 
      appearance-none
      `,
]);

const Heading = styled(motion.h1)(() => [
	tw`
    text-2xl 
    font-bold 
    uppercase 
    text-gray-400
    text-center`,
]);

const InputWrapper = styled(motion.div)(() => [
	tw`
      relative
      w-full
      my-4
    `,
]);

const Input = styled(motion.input)(() => [
	tw`
      w-full
      p-3
      border
      border-4
      bg-gray-900
      border-gray-800/0
      placeholder:text-white`,
	tw`
      placeholder:text-gray-600
      border-gray-700
      md:border-none
      appearance-none
      outline-none`,
	tw`md:w-full
      md:border-none`,
	tw`rounded-xl`,
	css`
		border-radius: 22px;
		background: #1f2937;
		box-shadow: inset 5px 5px 10px #141a23, inset -5px -5px 10px #2a384b;
	`,
]);

const Label = styled(motion.label)(() => [
	tw`
    text-lg
    text-gray-400
    italic
    `,
]);

const InputContainer = styled(motion.div)(() => [
	tw`
      flex 
      flex-col 
      gap-6`,
	tw`md:flex-row`,
]);

const TextArea = styled(motion.textarea)(() => [
	tw`
      w-full
      h-32
      bg-gray-800
      placeholder:text-white
      text-white
      p-3
      border
      border-4
      bg-gray-900
      resize-none
      border-gray-800/0`,
	tw`
      placeholder:text-gray-600
      border-gray-700
      md:border-none
      appearance-none
      outline-none`,
	`border-radius: 22px; background: #1f2937; box-shadow: inset  5px 5px 10px #141a23, inset -5px -5px 10px #2a384b;`,
]);

const AddEventButton = styled(motion.button)(() => [
    tw`
    bg-[#2C3E50]
    rounded-lg
    p-1
    px-3
    py-2
    mx-2
    mt-10
    `
])

// validate event form
function eventFormValidation({ name, description, startTime, endTime }) {
    let countError = 0;
    let errorMsg = []
    if (name.trim().length === 0) {
        countError++;
        errorMsg.push('title cannot be empty');
    }
    if (description.trim().length === 0) {
        countError++;
        errorMsg.push('description cannot be empty');
    }
    if (startTime === '') {
        countError++;
        errorMsg.push('start date cannot be empty');
    }
    if (endTime === '') {
        countError++;
        errorMsg.push('end date cannot be empty');
    }
    if (startTime !== '' && endTime !== '') {
        if (new Date(startTime) >= new Date(endTime)) {
            countError++;
            errorMsg.push('end time cannot happen before start time');
        }
    }
    return [countError, errorMsg];
}

const eventFormInit = {
    startTime: '',
    endTime: '',
    name: '',
    description: ''
}

function AddEventForm({ token, setEvents }) {

    const [formDataEvent, setFormDataEvent] = useState(eventFormInit)

    function handleNewEventInput(e) {
        const { name, value } = e.target;
        setFormDataEvent({ ...formDataEvent, [name]: value })
    }

    async function handleAddEvent(e) {
        e.preventDefault();
        console.log(formDataEvent)
        const [errorCount, errorMsg] = eventFormValidation(formDataEvent)
        if (errorCount > 0) {
            alert(`ooops please fix the error(s)\n\n${errorMsg.join('\n')}`)
            return;
        }
        try {
            const response = await fetch(`/api/events`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify(formDataEvent)
            })

            const addData = await response.json()
            //console.log(addData)

            setEvents(addData)

        } catch (err) {
            console.log(err)
            alert("there was a problem, check the console for error output")
        }
        setFormDataEvent(eventFormInit)
    }


    return (
        <TheForm 
            onSubmit={handleAddEvent}  
        >

            <Heading>Add an event</Heading>
            <hr className='border-gray-400  w-1/4 text-center mx-auto my-4' />

            <InputWrapper>
                <Label htmlFor="name">Event Title *</Label>
                <Input 
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleNewEventInput} 
                    placeholder="Event title"
                    value={formDataEvent.name}
                />
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor="description">Event Description *</Label>
                <TextArea
                    id="description"
                    name="description"
                    onChange={handleNewEventInput} 
                    placeholder="Event Description"
                    value={formDataEvent.description} 
                />
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor="startTime">Event Start Date *</Label>
                <Input 
                    id="startTime"
                    name="startTime"
                    type="date"
                    onChange={handleNewEventInput}
                    placeholder="2022-06-06" 
                    value={formDataEvent.startTime}  
                />
            </InputWrapper>

            <InputWrapper>
                <Label htmlFor="endTime">Event End Date *</Label>
                <Input
                    id="endTime"
                    name="endTime"
                    type="date"
                    onChange={handleNewEventInput}
                    placeholder="2022-06-10"
                    value={formDataEvent.endTime}
                />
            </InputWrapper>
            

            <AddEventButton type="submit">
                Add Event
            </AddEventButton>

        </TheForm>
    )
}

export { AddEventForm }
