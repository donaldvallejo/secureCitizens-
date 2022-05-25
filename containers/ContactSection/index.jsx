import React, { useState } from 'react'
import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

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
    py-32`
])

const Heading = styled(motion.h1)(() => [
  tw`
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
    flex 
    flex-col 
    gap-6`,
  tw`md:flex-row`
])

const InputWrapper = styled(motion.div)(() => [
  tw`
    relative
    w-full
  `
])

const Input = styled(motion.input)(() => [
  tw`
    w-full
    p-3
    border
    border-4
    bg-gray-900
    placeholder:text-white`,
  tw`
    placeholder:text-gray-600
    focus:border-gray-700 
    outline-none`,
  tw`md:w-full`
])

const TextArea = styled(motion.textarea)(() => [
  tw`
    w-full
    h-64
    bg-gray-800
    placeholder:text-white
    text-white
    p-3
    border
    border-4
    bg-gray-900
    border-gray-800/0`,
  tw`
    placeholder:text-gray-600
    focus:border-gray-700
    outline-none`
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

const EmailError = styled(motion.span)(() => [
  tw`
  absolute
  -bottom-4
  left-0
  font-medium 
  tracking-wide 
  text-red-500 
  text-xs 
  mt-1 
  ml-1
  `
])

// ====================== //
// SVG ICON SUB-COMPONENT //
// ====================== //
const SendIcon = () => {
  return (
    <div style={{
      transform: "rotate(45deg)",
      marginTop: "-.3em"
    }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    </div>
  )
}

// ============================ //
// PRIMARY COMPONENT FOR EXPORT //
// ============================ //

const ContactSection = () => {

  // ===== //
  // STATE //
  // ===== //

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  // ================= //
  // UTILITY VARIABLES //
  // ================= //
  const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const isValidEmail = emailRegex.test(formData.email) // true/false for email input matching format

  // ============= //
  // FORM HANDLERS //
  // ============= //

  function handleInput(e) {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  function handleFormSubmit(e) {
    e.preventDefault();


    // checking for input in all fields
    const nameInput = formData.name.length > 0,
      phoneInput = formData.phone.length > 0,
      emailInput = formData.email.length > 0,
      messageInput = formData.message.length > 0;

    // alert input
    alert(`
      Name: ${nameInput ? formData.name : 'NO NAME ENTERED'}\n
      Email: ${!emailInput ? 'NO EMAIL ENTERED' : !isValidEmail ? 'INVALID EMAIL' : formData.email}\n 
      Phone: ${phoneInput ? formData.phone : 'NO PHONE ENTERED'}\n
      Message: ${messageInput ? formData.message : 'NO MESSAGE ENTERED'}
    `)

    // reset contact form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  function formatPhoneInput(e) {
    const key = e.charCode || e.keyCode || 0;
    const { value } = e.target;

    if (key !== 8 && key !== 9) {
      if (value.length === 3) {
        setFormData({ ...formData, phone: value + "-" });
      }
      if (value.length === 7) {
        setFormData({ ...formData, phone: value + "-" });
      }
    }
  }

  return (
    <Container id="contact">
      <Heading>Contact Us</Heading>
      <TheForm onSubmit={handleFormSubmit}>
        <InputContainer>
          <InputWrapper>
            <Input
              type="text"
              name="name"
              className="border-gray-800/0"
              placeholder='Your Name'
              onChange={handleInput}
              value={formData.name}
            />
          </InputWrapper>
          <InputWrapper >
            <Input
              type="email"
              name="email"
              placeholder='Your Email'
              className={`${!isValidEmail && formData.email.length > 0 ? 'border-red-500' : 'border-gray-800/0'}`}
              onChange={handleInput}
              value={formData.email}
            />
            <EmailError style={{ visibility: formData.email.length > 0 && !isValidEmail ? 'visible' : 'hidden' }}>
              Invalid Email
            </EmailError>
          </InputWrapper>
          <InputWrapper>
            <Input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="phone"
              className="border-gray-800/0"
              placeholder='Phone: XXX-XXX-XXXX'
              onChange={handleInput}
              value={formData.phone}
              maxLength="12"
              onKeyDown={formatPhoneInput}
            />
          </InputWrapper>
        </InputContainer>
        <TextArea
          placeholder="Write your message here"
          name="message"
          onChange={handleInput}
          value={formData.message}
        />
        <ButtonContainer>
          <Button type="submit">
            <SendIcon /> send message
          </Button>
        </ButtonContainer>
      </TheForm>
    </Container>
  )
}
export { ContactSection }