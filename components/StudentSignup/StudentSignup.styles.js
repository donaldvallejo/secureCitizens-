import { motion } from 'framer-motion';
import tw, { styled, css } from 'twin.macro';

// ============================ //
// STYLED / TAILWIND COMPONENTS //
// ============================ //
export const Container = styled(motion.div)(() => [
	tw`
      flex
      flex-col
      items-center
      bg-gray-800
      text-white 
      px-4
      py-32`,
	tw`
      md:px-20
      lg:px-28
      `,
]);

export const TheForm = styled(motion.form)(() => [
	tw`
      w-full 
      flex 
      flex-col 
      gap-6`,
	tw`lg:max-w-6xl`,
]);

export const InputContainer = styled(motion.div)(() => [
	tw`
      flex 
      flex-col 
      gap-6`,
	tw`md:flex-row`,
]);

export const InputWrapper = styled(motion.div)(() => [
	tw`
      relative
      w-full
    `,
]);

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

export const Select = styled(motion.select)(() => [
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
	tw`
      md:w-3/4
      lg:w-1/2`,
	css`
		border-radius: 22px;
		background: #1f2937;
		box-shadow: inset 5px 5px 10px #141a23, inset -5px -5px 10px #2a384b;
	`,
]);

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
      border-gray-700
      md:border-none
      appearance-none
      outline-none`,
	`border-radius: 22px; background: #1f2937; box-shadow: inset  5px 5px 10px #141a23, inset -5px -5px 10px #2a384b;`,
]);

export const ButtonContainer = styled(motion.div)(() => [
	tw`flex justify-center mt-6`,
]);

export const Button = styled(motion.button)(() => [
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
	tw`md:p-3 md:text-lg md:w-[211px]`,
]);

export const TextBox = styled(motion.div)(() => [
	tw`
    px-6
    `,
	tw`
    md:px-20
    lg:px-40
    text-gray-400
    `,
]);

export const SectionHeading = styled(motion.h3)(() => [
	tw`
    text-center
    text-2xl
    mt-16
    text-alternative-400
    `,
]);

export const Label = styled(motion.label)(() => [
	tw`
    text-lg
    text-gray-400
    italic
    `,
]);

export const SectionSubHeading = styled(motion.span)(() => [
	tw`
    text-lg
    w-full
    text-gray-400
    italic
    `,
]);

export const CheckBoxContainer = styled(motion.div)(() => [
	tw`
  w-full
  flex
  flex-wrap
  justify-around
  p-4
  border
  border-gray-700
  `,
]);

export const Heading = styled(motion.h1)(() => [
	tw`
    text-4xl 
    font-bold 
    uppercase 
    text-alternative-400
    text-center`,
]);

export const InfoText = styled(motion.p)(() => [
	tw`
  text-xl
  font-bold
  mb-4
  text-center
  text-gray-400
  `,
]);

export const CheckBoxWrapper = styled(motion.div)(
	() =>
		tw`
  `
);

export const ErrorText = styled(motion.p)(
	() =>
		tw`
    text-red-500
  `
);
