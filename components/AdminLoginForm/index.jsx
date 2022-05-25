import React, { useState } from 'react'
import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

import Auth from '../../utils/auth'


// ============================ //
// STYLED / TAILWIND COMPONENTS //
// ============================ //
const Container = styled(motion.div)(() => [
    tw`
    flex
    flex-col
    items-center
    bg-gray-800
    text-white 
    px-4
    py-32
    h-screen`
])

const Heading = styled(motion.h1)(() => [
    tw`
    text-center
    text-4xl 
    font-bold 
    uppercase 
    mb-32`
])

const TheForm = styled(motion.form)(() => [
    tw`
    w-full 
    flex 
    flex-col 
    gap-6`,
    tw`lg:max-w-6xl`
])

const InputContainer = styled(motion.div)(() => [
    tw`
    w-full
    flex 
    flex-col
    justify-center
    gap-6`,
])

const Input = styled(motion.input)(() => [
    tw`
    w-full
    p-3
    border
    border-gray-800/0
    border-4
    bg-gray-900
    placeholder:text-white`,
    tw`
    placeholder:text-gray-600
    focus:border-gray-700 
    outline-none`,

])

const ButtonContainer = styled(motion.div)(() => [
    tw`flex justify-center mt-6`
])

const Button = styled(motion.button)(() => [
    tw`
  py-3
  font-bold
  uppercase
  flex
  justify-center
  items-center
  text-[#59A52C]
  border
  border-2
  border-[#59A52C]
  w-[196px]
  bg-gray-800
  flex gap-1`,
    tw`
    hover:bg-[#59A52C]
    hover:text-white
    focus:bg-[#59A52C]
    focus:text-white
    outline-none`,
    tw`md:p-3 md:text-lg md:w-[211px]`
])

const InputWrapper = styled(motion.div)(() => [
    tw`
    w-full
    relative 
    mx-auto
    flex 
    justify-center
    `,
    tw`
    md:w-3/4
    lg:w-1/2
    `
])

const PWIconSpan = styled(motion.span)(() => [
    tw`
    relative

    right-0
    flex 
    items-center 
    px-3 
    whitespace-nowrap 
    text-sm
    `
])

// ============== //
// SUB-COMPONENTS //
// ============== //

const EyeOnIcon = () => {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        </svg>
    )
}

const EyeOffIcon = () => {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path>
        </svg>
    )
}

// ============================ //
// PRIMARY COMPONENT FOR EXPORT //
// ============================ //

const AdminLoginForm = () => {

    // ===== //
    // STATE //
    // ===== //

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [passView, setPassView] = useState(false)

    // ============= //
    // FORM HANDLERS //
    // ============= //

    function handleInput(e) {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value })
    }

    async function handleFormSubmit(e) {
        e.preventDefault();

        // CONNECT TO DB FOR LOGIN
        const loginResponse = await fetch(`/api/admin/login`, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        // response data to useable JSON
        const adminData = await loginResponse.json();
        if (loginResponse.ok) {
            // Password is valid: Save token and redirect to dashboard
            Auth.login(adminData.token)

        } else {
            // Password is not valid: alert user
            // TODO: change alert to toast or modal
            alert(adminData.message)
        }
    }

    function handlePassView() {
        setPassView(!passView)
    }

    return (
        <Container id="login-form">
            <Heading>Login to Admin Dashboard</Heading>
            <TheForm onSubmit={handleFormSubmit}>
                <InputContainer>
                    <InputWrapper>

                        <Input
                            type="email"
                            name="email"
                            placeholder='Email'
                            onChange={handleInput}
                            value={formData.name}
                        />
                    </InputWrapper>
                    <InputWrapper>

                        <Input
                            type={passView ? 'text' : 'password'}
                            name="password"
                            placeholder='Password'
                            onChange={handleInput}
                            value={formData.password}
                        />
                        <PWIconSpan
                            onClick={handlePassView}
                        >
                            {
                                passView ?
                                    <EyeOffIcon /> :
                                    <EyeOnIcon />
                            }
                        </PWIconSpan>
                    </InputWrapper>
                </InputContainer>
                <ButtonContainer>
                    <Button type="submit">
                        login
                    </Button>
                </ButtonContainer>
            </TheForm>
        </Container>
    )
}
export { AdminLoginForm } 
