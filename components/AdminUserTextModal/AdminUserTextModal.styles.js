import { motion } from 'framer-motion'
import tw, { styled, css } from 'twin.macro'

export const Backdrop = styled(motion.div)(() => [
    tw`
    w-screen
    h-screen
    bg-gray-800
    bg-opacity-60
    fixed
    top-0
    z-50
    flex
    justify-center
    items-center

    `
])

export const ContentBox = styled(motion.div)(() => [
    tw`
    relative
    w-11/12 
    h-4/5
    overflow-auto
    bg-gray-800
    text-white
    text-white
    rounded
    flex
    flex-col
    justify-start
    items-center
    p-12
    border
    `,
    tw`
    md:w-3/4
    `
])


export const TheForm = styled(motion.form)(() => [
    tw`
        w-full 
        flex 
        flex-col 
        gap-4`,
    tw`lg:max-w-6xl`
])

export const InputWrapper = styled(motion.div)(() => [
    tw`
        relative
        w-full
      `
])


export const Input = styled(motion.input)(() => [
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
        focus:border-gray-700 
        outline-none`,
    tw`md:w-full`
])

export const TextArea = styled(motion.textarea)(() => [
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
        border-gray-800/0`,
    tw`
        placeholder:text-gray-600
        focus:border-gray-700
        outline-none`
])

export const Label = styled(motion.label)(() => [
    tw`
      text-lg
      `
])

export const CloseButton = styled(motion.button)(() => [
    tw`
    absolute
    top-5
    right-5
    text-xl
    bg-red-900
    text-white
    p-2
    rounded-lg
    `
])

export const Alert = styled(motion.div)((props) => [
    tw`
    absolute
    inset-auto
    w-4/5
    p-6
    flex
    flex-col
    content-center
    items-center
    `,
    css`background: ${props.backgroundHue}`


])

export const Button = styled(motion.button)(() => [
    tw`
    p-3
    border
    w-1/2
    mx-auto
    mb-4
    `
])