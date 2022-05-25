import React, { useState } from 'react';
import { Masonry } from 'masonic';
import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';
import useWindowDimensions from '../../utils/hooks/WindowDimensions';
import { picArray } from './images';


const MasonryImgCardDiv = styled(motion.div)(() => [
	tw`
    relative
	rounded-xl
    `,
]);

const MasonryImage = styled(motion.img)(() => [
	tw`
    w-full
    rounded-xl
    `,
]);

const MasonryCardText = styled(motion.p)(() => [
	tw`
    absolute
    bottom-0
    inset-x-2.5
    text-gray-200
    bg-gray-800
    rounded-sm
    text-xs
    pl-2
    py-1
    mb-1
    `,
]);

function PicGrid() {
	const { width, height } = useWindowDimensions();

	return (
		<Masonry
			items={picArray}
			render={MasonryCard}
			columnCount={width > 900 ? 5 : width > 480 ? 3 : 2}
			columnGutter={5}
			columnWidth={200}
		/>
	);
}

const MasonryCard = ({ index, data: { src }, width }) => {
	const [hoverState, setHoverState] = useState(false);

	function handleMouseEnter() {
		setHoverState(true);
	}
	function handleMouseLeave() {
		setHoverState(false);
	}

	// console.log({ index, src, name, width })
	return (
		<div className="p-2">
			<MasonryImgCardDiv
				style={{ position: 'relative' }}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				animate={{
					transform: hoverState ? 'scale(1.2)' : 'scale(1)',
					zIndex: hoverState ? '100' : '1',
					boxShadow: hoverState
						? '5px 5px 10px rgba(20, 26, 35, 1)'
						: '-5px -5px 10px rgba(42, 56, 75, 1)',
					border: hoverState ? '0px solid gray' : '0px solid gray',
				}}
			>
				<MasonryImage src={src} />
				{/* <MasonryCardText>{name}</MasonryCardText> */}
			</MasonryImgCardDiv>
		</div>
	);
};

export { PicGrid };
