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
} from './AdminUserTextModal.styles'


function formatDate(dateObj) {
    const date = new Date(dateObj)
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    return yyyy + '-' + mm + '-' + dd;

}

function AdminUserTextModal({ setUserTextState, token, setShowUserTextModal, userTextState }) {

    useLockBodyScroll();

    // const eventCopy = { ...event }

    const [isReadOnly, setIsReadOnly] = useState(true);
    const [formData, setFormData] = useState({ ...userTextState, content: userTextState.content.join('\n') })
    const [showWarning, setShowWarning] = useState(false);

    function handleInput(e) {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    async function handleUserTextUpdate(e) {
        e.preventDefault();
        console.log("handleUsertextUpdate");

        const newText = { ...formData, content: formData.content.split("\n") }
        console.log(newText)

        try {
            const response = await fetch(`/api/usertext`, {
                body: JSON.stringify(formData),
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newText)
            })

            const updatedUserText = await response.json();
            setUserTextState(updatedUserText)
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

            setShowUserTextModal(false)
        }
    }

    return (
        <Backdrop>

            <ContentBox>
                <CloseButton
                    onClick={handleClose}
                >Close&nbsp;&times;</CloseButton>
                {!isReadOnly ? (
                    <>
                        <p
                            style={{ color: 'red', background: 'pink', padding: '8px', borderRadius: 8 }}
                        >Now Editing...</p>
                    </>
                ) : null}
                <TheForm onSubmit={handleUserTextUpdate}>
                    <InputWrapper>
                        <Label htmlFor="headline">Headline</Label>
                        <br />
                        <Input
                            type="text"
                            name="headline"
                            id="headline"
                            readOnly={isReadOnly}
                            value={formData.headline}
                            onChange={handleInput}
                        >
                        </Input>
                    </InputWrapper>

                    <InputWrapper>
                        <Label htmlFor="content">Main Content</Label>
                        <br />
                        <TextArea
                            type="text"
                            name="content"
                            id="content"
                            readOnly={isReadOnly}
                            value={formData.content}
                            onChange={handleInput}

                        >
                        </TextArea>
                    </InputWrapper>
                    <InputWrapper>
                        <Label htmlFor="details">Extra Details</Label>
                        <br />
                        <TextArea
                            type="text"
                            name="details"
                            id="details"
                            readOnly={isReadOnly}
                            value={formData.details}
                            onChange={handleInput}

                        >
                        </TextArea>
                    </InputWrapper>

                    {!isReadOnly ? (
                        <Button type="submit">
                            SUBMIT Edits
                        </Button>
                    ) : null}

                </TheForm>
                {isReadOnly ? (
                    <Button
                        onClick={() => setIsReadOnly(false)}
                    >
                        Edit Custom Text
                    </Button>
                ) : (
                    <Button
                        onClick={() => { setFormData({ ...userTextState }); setIsReadOnly(true); }}
                    >
                        RESET
                    </Button>
                )
                }
                {showWarning ? <AlertBox setShowUserTextModal={setShowUserTextModal} textContent={"You have unsaved changes to this Event - Closing the window will delete these edits. Close anyway?"} backgroundHue="lightpink" setShowWarning={setShowWarning} /> : null}
            </ContentBox>
        </Backdrop>
    )
}

function AlertBox({ setShowUserTextModal, setShowWarning, backgroundHue, textContent }) {
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
                <Button onClick={() => setShowUserTextModal(false)}>
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


export { AdminUserTextModal }
