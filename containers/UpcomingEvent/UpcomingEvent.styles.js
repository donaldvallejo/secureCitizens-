import { motion } from 'framer-motion';
import tw, { css, styled } from 'twin.macro';

import { Root } from '../../commons';
import { Icon } from '../../components';

export const Frame = styled(Root)(() => [tw`bg-gray-800`]);

Frame.Wrapper = styled(Root.Wrapper)(() => [
	tw`flex flex-col items-center pt-44 pb-10 space-y-20`,
]);

export const Container = styled(motion.div)(() => [
	tw`max-w-full flex flex-col items-stretch space-y-28`,
	tw`lg:(flex-row space-y-0 space-x-10)`,
]);

Container.Box = styled(motion.div)(() => [
	tw`w-96 max-w-full p-[0 15px 25px]`,
	tw`flex flex-col items-center`,
	tw`
  bg-white bg-opacity-50 shadow-xl p-4 rounded-2xl backdrop-blur
  `,
	tw`xl:(w-[36rem])`,
]);

export const Diamond = styled(motion.div)(({ variant }) => [
	tw`flex place-content-center place-items-center`,
	tw`relative transform rotate-45 -translate-y-1/2`,
	tw`bg-gray-700/50 w-28 h-28 before:(absolute bg-gray-700 w-20 h-20)`,
	variant === 'primary' && tw`bg-primary-500/50 before:(bg-primary-500)`,
	variant === 'secondary' &&
	tw`bg-alternative-400/50 before:(bg-alternative-400)`,
	// tw`before:(absolute bg-gray-700 w-20 h-20)`
]);

Diamond.Item = styled(motion.div)(() => [
	tw`transform -rotate-45`,
	// tw`bg-red-100 w-20 h-20`,
]);

export const IconStyle = () => [tw`text-white text-5xl`];

Diamond.Calendar = styled(Icon.Calendar)(IconStyle);
Diamond.Location = styled(Icon.Location)(IconStyle);

export const Heading = styled(motion.h3)(() => [
	tw`text-white font-display text-3xl`,
	tw`xl:(text-4xl)`,
]);

export const Divider = styled(motion.span)(() => [
	tw`w-full h-0 border-t-2 border-gray-700 my-4`,
	tw`xl:(my-6)`,
]);

export const Text = styled(motion.p)(() => [
	tw`text-white font-body text-xl leading-8 text-center`,
	tw`xl:(text-2xl leading-10)`,
]);

Text.B = tw.b`font-bold`;

export const Button = styled(motion.button)(({ icon }) => [
	tw`border-2 border-alternative-400 bg-gray-700 py-3 px-7 cursor-pointer`,
	tw`text-alternative-400 font-display text-xl uppercase`,
	tw`hocus:(bg-alternative-400 text-white)`,
	tw`xl:(text-2xl)`,
	icon === 'left' && tw`flex items-center`,
	css`
		:hover > svg {
			color: #fff;
		}
	`,
]);

Button.Icon = styled(Icon.RightArrowCircle)(() => [
	tw`text-alternative-400 mr-2`,
]);
