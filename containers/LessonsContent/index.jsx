import React from 'react';
import { motion } from 'framer-motion';
import tw, { styled, css } from 'twin.macro';

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
      py-32`,
]);

const Heading = styled(motion.h1)(() => [
	tw`
	text-alternative-400
      text-2xl 
      font-bold 
      uppercase
      text-center
      `,
	tw`
      sm:text-4xl
      `,
]);

const SubHeading = styled(motion.h3)(() => [
	tw`
	text-alternative-400
    text-base
    font-bold
    text-center
    mb-4
    `,
	tw`
    sm:text-xl
    `,
]);

const SubSubHeading = styled(SubHeading)(() => [
	tw`
	text-white`
])

const BorderBox = styled(motion.div)(() => [
	tw`p-[1.6rem 1.6rem]`,
	tw`flex flex-col items-center`,
	// tw`border-8 border-double border-gray-700`,
	`border-radius: 22px; background: #1f2937; box-shadow:  5px 5px 10px #141a23, -5px -5px 10px #2a384b;`,
]);

// const CancelPolicyText = styled(motion.p)(() => [
// 	tw`
// 	p-2
// 	`,
// 	css`
// 	font-size: 16px;
// 	`,
// ]);

// const LessonRateText = styled(motion.div)(() => [
// 	tw`
//     w-full
//     text-center
//     `,
// 	css`
// 	font-size: 24px;
// 	white-space: pre-line;
// 	`,
// ]);

BorderBox.InfoBox = styled(BorderBox)(() => [
	tw`
    w-full
    mx-auto
    px-16
    mb-10
    `,
	tw`
    md:w-3/5 mt-8
    `,
]);

BorderBox.LessonRate = styled(BorderBox)(() => [
	tw`
    w-full
    mx-auto
    my-4
    `,
	tw`
    md:w-1/2
    md:m-2
    `,
	tw`md:max-w-md`,
]);

BorderBox.CancellationPolicy = styled(BorderBox)(() => [
	tw`
    w-full
	md:w-1/2
    mx-auto
    `,
	css`
	font-size: 16px;
	`,
]);

const InstrumentWrapper = styled(motion.div)(() => [
	tw`
    grid
    grid-cols-2
    w-full
    gap-4
    p-2
    justify-around
    `,
]);

const InstrumentText = styled(motion.div)(() => [
	tw`
    w-full
    text-center
    `,
	css`
	font-size: 16px;
	`,
]);

const LessonRateWrapper = styled(motion.div)(() => [
	tw`
    w-full
    mb-10
    `,
	tw`
    md:flex
    md:justify-center
    `,
]);

const CancellationPolicyWrapper = styled(motion.div)(() => [
	tw`
    w-full
    `,
]);

// ====================== //
// PAGE CONTENT CONTAINER //
// ====================== //

const PAGE_CONTENT = {
	infoSection: {
		heading: 'Individual Lessons',
		subHeading: 'We offer one-on-one private lessons in:',
		instruments: [
			'acoustic/electric guitar',
			'drums',
			'bass guitar',
			'vocals',
			'piano/keyboard',
			'ukelele',
		],
	},
	pricingSection: {
		heading: 'Pricing',
		description: 'We offer monthly and single lesson rates: ',
		content: [
			{
				heading: 'Single Lesson Rate',
				desc1: 'Single Lesson Rate: ',
				desc2: '$45 / half-hour lesson or $80 / hour lesson',
				desc3: '(Payment is due at each lesson)',
			},
			{
				heading: 'Monthly Lesson Rate',
				desc1: 'Monthly Rate: ',
				desc2: '$40 / half-hour lesson or $75 / hour lesson',
				desc3:
					'(Payment for entire month of lessons is due at the first lesson of each month)',
			},
		],
	},
	cancellationSection: {
		heading: 'Cancellation Policy',
		content:
			'Cancellations for individual lessons require 24-hours notice or you will be charged for the lesson and the lesson will be forfeited.  Exceptions are made for last-minute illnesses and emergencies.  Cancellations made with 24-hours notice are expected to make up the lesson within 30 days of the cancelled lesson.',
	},
};


// ========================= //
// MAIN COMPONENT FOR EXPORT //
// ========================= //

function LessonsContent() {
	return (
		<Container
			style={{
				background: 'url("/rockademy_bg_tall.jpg")',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			}}
		>
			<BorderBox.InfoBox>
				<Heading>{PAGE_CONTENT.infoSection.heading}</Heading>
				<SubSubHeading>{PAGE_CONTENT.infoSection.subHeading}</SubSubHeading>
				<InstrumentWrapper>
					{PAGE_CONTENT.infoSection.instruments.map((instrument) => (
						<InstrumentText key={instrument}>{instrument}</InstrumentText>
					))}
				</InstrumentWrapper>
			</BorderBox.InfoBox>
			<SubHeading>{PAGE_CONTENT.pricingSection.heading}</SubHeading>
			<SubSubHeading>{PAGE_CONTENT.pricingSection.description}</SubSubHeading>
			<LessonRateWrapper>
				{PAGE_CONTENT.pricingSection.content.map((contentObj) => (
					<BorderBox.LessonRate key={contentObj.heading}>
						<SubHeading>{contentObj.heading}</SubHeading>
						<InstrumentText>
							{contentObj.desc2}
							<br />
							{contentObj.desc3}
						</InstrumentText>
					</BorderBox.LessonRate>
				))}
			</LessonRateWrapper>

			<CancellationPolicyWrapper>
				<BorderBox.CancellationPolicy>
					<SubHeading>{PAGE_CONTENT.cancellationSection.heading}</SubHeading>
					{PAGE_CONTENT.cancellationSection.content}
				</BorderBox.CancellationPolicy>
			</CancellationPolicyWrapper>

			<div className='mt-6 flex justify-center flex-col md:flex-row'>
				<img 
					className='m-2' 
					src='/1.jpeg' alt='girl_performing' 
					style={{transform: 'scaleX(-1)'}}
				/>
				<img 
					className='m-2' 
					src='/4.jpeg' alt='boy_performing' 
				/>
			</div>
			

		</Container>
	);
}

export { LessonsContent };
