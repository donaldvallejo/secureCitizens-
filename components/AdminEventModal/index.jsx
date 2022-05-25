import React, { useLayoutEffect, useState } from 'react'
import {
    Backdrop,
    ContentBox,
    TheForm,
    InputWrapper,
    Input,
    TextArea,
    Label,
    CloseButton,
    Alert,
    Button
} from './AdminEventModal.styles'


function formatDate(dateObj) {
    const date = new Date(dateObj)
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return yyyy + '-' + mm + '-' + dd;

}

function AdminEventModal({ event, setShowEventModal, setEvents, token }) {

    useLockBodyScroll();

    // const eventCopy = { ...event }

    const [isReadOnly, setIsReadOnly] = useState(true);
    const [formData, setFormData] = useState({ ...event })
    const [showWarning, setShowWarning] = useState(false);

    function handleInput(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    async function handleEventUpdate(e) {
        e.preventDefault();
        console.log("handleEventUpdate");
        try {
            const response = await fetch(`/api/events/${event._id}`, {
                body: JSON.stringify(formData),
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`
                },
            })

            const updatedEvents = await response.json();
            setEvents(updatedEvents)
        } catch (err) {
            console.log(err)
            alert("there was a problem, check the console for error output")
        }

        setIsReadOnly(true);
    }

    function handleClose() {
        if (!isReadOnly) {
            setShowWarning(true)
        } else {

            setShowEventModal(false)
        }
    }

    return (
        <Backdrop>

            <ContentBox>

                <CloseButton
                    onClick={handleClose}
                >Close&nbsp;&times;</CloseButton>

                <h1 className='text-4xl'>
                    Event: {event.name}
                </h1>

                <hr className='border-gray-400  w-1/12 text-center mx-auto my-10' />

                {event.attendees && event.attendees.length > 0 ?
                    (<>
                        <h2 className='text-2xl'>Total:  {event.attendees.length > 1 ? `${event.attendees.length} Studnets` : '1 Student'}</h2>
                        <hr />
                        <ul>
                            {event.attendees.map((student, idx) => (
                                <li
                                    key={student._id}
                                    className='flex justify-center flex-col items-center p-1.5'
                                >
                                    <p className="text-xl">{`${idx + 1})  ${student.studentName}`}</p>
                                    <button
                                        id={student._id}
                                        className="bg-[#2C3E50] rounded-lg p-2 mb-2"
                                        onClick={() => {
                                            window.location.href = '/admin/student/' + student._id
                                        }}
                                    >
                                        View Student Details
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </>
                    ) : <p className="text-xl">No student yet</p>
                }

                <hr className='border-gray-400  w-1/12 text-center mx-auto my-16' />

                {!isReadOnly ? (
                    <>
                        <p
                            style={{ color: 'red', background: 'pink', padding: '8px', borderRadius: 8 }}
                        >Now Editing...</p>
                    </>
                ) : null}
                <TheForm onSubmit={handleEventUpdate}>
                    <InputWrapper>
                        <Label htmlFor="name">Event Name:</Label>
                        <br />
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            readOnly={isReadOnly}
                            value={formData.name}
                            onChange={handleInput}
                        >
                        </Input>
                    </InputWrapper>

                    <InputWrapper>
                        <Label htmlFor="description">Event Description:</Label>
                        <br />
                        <TextArea
                            type="text"
                            name="description"
                            id="description"
                            readOnly={isReadOnly}
                            value={formData.description}
                            onChange={handleInput}
                        >
                        </TextArea>
                    </InputWrapper>

                    <InputWrapper>
                        <Label htmlFor="startTime">Event Start:</Label>
                        <br />
                        <Input
                            type="date"
                            name="startTime"
                            id="startTime"
                            readOnly={isReadOnly}
                            value={formatDate(formData.startTime)}
                            onChange={handleInput}

                        >
                        </Input>
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="endTime">Event End:</Label>
                        <br />
                        <Input
                            type="date"
                            name="endTime"
                            id="endTime"
                            readOnly={isReadOnly}
                            value={formatDate(formData.endTime)}
                            onChange={handleInput}

                        >
                        </Input>
                    </InputWrapper>

                    {!isReadOnly ? (
                        <Button type="submit">
                            SUBMIT Edits
                        </Button>
                    ) : null}

                </TheForm>
                <div className="my-10 w-full flex justify-center">
                {isReadOnly ? (
                    <Button
                        onClick={() => setIsReadOnly(false)}
                    >
                        Edit Event
                    </Button>
                ) : (
                    <Button
                        onClick={() => { setFormData({ ...event }); setIsReadOnly(true); }}
                    >
                        RESET
                    </Button>
                )
                }
                </div>
                {showWarning ? <AlertBox setShowEventModal={setShowEventModal} textContent={"You have unsaved changes to this Event - Closing the window will delete these edits. Close anyway?"} backgroundHue="lightpink" setShowWarning={setShowWarning} /> : null}
            </ContentBox>
        </Backdrop>
    )
}

function AlertBox({ setShowEventModal, setShowWarning, backgroundHue, textContent }) {
    return (
        <>
            <Alert backgroundHue={backgroundHue}>
                <h3
                    style={{ textAlign: 'center', fontSize: '120%', fontWeight: 'bold' }}
                >
                    Warning!
                </h3>
                <p style={{ textAlign: 'center', marginBottom: 12 }}>
                    {textContent}
                </p>
                <Button onClick={() => setShowWarning(false)}>
                    Continue Editing
                </Button>
                <br />
                <Button onClick={() => setShowEventModal(false)}>
                    Close without saving
                </Button>
            </Alert>
        </>
    )
}

function useLockBodyScroll() {
    useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';

        if (window.getComputedStyle(document.body).width > 999) {
            document.body.style.overflow = originalStyle
        }

        return () => (document.body.style.overflow = originalStyle)
    })
}


export { AdminEventModal }
