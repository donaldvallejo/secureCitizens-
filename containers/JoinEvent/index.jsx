import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import tw, { styled, css } from 'twin.macro';
import { Icon } from '../../components';
import { Root } from '../../commons';
import { CountDownTimer } from './CountDownTimer';
import useSortedEvents from '../../utils/hooks/useSortedEvents';

const Frame = styled(Root)(() => [tw`bg-gray-800 px-0 w-full flex justify-center`]);

Frame.Wrapper = styled(Root.Wrapper)(() => [
	tw`flex flex-col rounded-xl pt-10 px-2`,
	tw`lg:(flex-row)`,
]);

const CountDownContainer = styled(motion.div)(() => [
	tw`bg-primary-500 w-full mx-auto flex-1 py-10 lg:mr-4 rounded-xl opacity-80`,
	tw`lg:(flex justify-center items-center)`,
	css`box-shadow: 0px 0px 1rem darkslategray;`
]);

const JoinUsContainer = styled(motion.a)(() => [
	tw`bg-alternative-400 w-full mx-auto block flex-1 py-10 mt-2 lg:mt-0 cursor-pointer lg:ml-4 rounded-xl`,
	tw`hocus:(bg-alternative-500)`,
	tw`lg:(flex justify-center items-center)`,
	css`box-shadow: 0px 0px 1rem darkslategray;`

]);

const CtaText = styled(motion.span)(() => [
	tw`flex justify-center relative`,
	tw`text-white font-display text-4xl font-bold uppercase text-center`,
	tw`sm:(static)`,
]);

const PlusIcon = styled(Icon.Plus)(() => [
	tw`absolute top-10`,
	tw`text-white text-4xl mr-2`,
	tw`sm:(static)`,
]);

function getUpcomingEvent(eventArr) {
	if (eventArr.length === 0) {
		return false;
	}

	let upcoming = eventArr[0];
	console.log({ upcoming });
	let today = new Date();

	if (new Date(upcoming.startTime) < today) {
		eventArr.shift();
		return getUpcomingEvent(eventArr);
	}

	return upcoming;
}

const JoinEvent = () => {
	const { events, isLoading, isError } = useSortedEvents();
	const [upcomingEvent, setUpcomingEvent] = useState(null);

	useEffect(() => {
		if (events) {
			setUpcomingEvent(getUpcomingEvent(events));
		}
	}, [isLoading]);

	return (
		<Frame>
			<Frame.Wrapper>
				<CountDownContainer>
					{isLoading ? (
						<h1>Loading...</h1>
					) : isError ? (
						<h1>There was an error...</h1>
					) : events.length < 1 ? (
						<h1>No Events Yet!</h1>
					) : upcomingEvent ? (
						<CountDownTimer upcomingEvent={upcomingEvent} />
					) : null}
				</CountDownContainer>

				<JoinUsContainer
					href='/summercamp'
				// onClick={ () => alert('TBD') }
				>
					<CtaText>
						Join The Summer Camp
					</CtaText>
				</JoinUsContainer>
			</Frame.Wrapper>
		</Frame>
	);
};

export { JoinEvent };
