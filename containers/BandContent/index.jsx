import React from 'react';
import { motion } from 'framer-motion';
import tw, { styled, css } from 'twin.macro';
import Image from 'next/image';

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
      sm:text-3xl
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

const CancelPolicyText = styled(motion.p)(() => [
	tw`
	p-2
	`,
	css`
	font-size: 16px;
	`,
]);

const PageImage = styled(Image)(() => [
	tw`
	sm:w-full
	`,
]);

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

BorderBox.BandPolicy = styled(BorderBox)(() => [
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

const BandPolicy = styled(motion.div)(() => [
	tw`
    w-full
	md:w-5/6
    mx-auto
	my-4
    `,
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

const BandPolicyWrapper = styled(motion.div)(() => [
	tw`
    w-full
    mb-10
    `,
	tw`
    md:flex
    md:justify-center
    `,
]);


// ====================== //
// PAGE CONTENT CONTAINER //
// ====================== //

const PAGE_CONTENT = {
	infoSection: {
		heading: 'Band Development Policies',
		description: `By providing guidance and encouragement, The Rockademy specializes in facilitating the progress of bands and musicians.  Whether you have a band or need help finding one The Rockademy can help.`,
	},
};


const BAND_POLICIES = {
	content: [
		{
			heading: 'Performance',
			desc: `
			Through our collective experience as professional musicians, we coach our students in:

			• Stage Presence
			• Showmanship
			• Staging
			• Loading, Unloading and Setting up Gear
			• Song to Song Transitions 
			• Handling Unexpected Difficulties (Technical or Otherwise)
			• Having Fun
			`,
		},
		{
			heading: 'Attendance Policy',
			desc: `
			Weekly attendance is required.  Students who miss more than 3 rehearsals in any single session will not be eligible to perform at the student showcase at the end of that session.   Tuition is not subject to cancellations.

 			*Tuition  can be split into monthly installments *
			`,
		},
	],
}

// ========================= //
// MAIN COMPONENT FOR EXPORT //
// ========================= //

function BandContent() {
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
				<InstrumentWrapper>
					<InstrumentText>
						{PAGE_CONTENT.infoSection.description}
					</InstrumentText>
				</InstrumentWrapper>
			</BorderBox.InfoBox>

			<BandPolicyWrapper>
				{BAND_POLICIES.content.map((contentObj) => (
					<BorderBox.BandPolicy key={contentObj.heading}>
						<SubHeading>{contentObj.heading}</SubHeading>
						<InstrumentText>
							{contentObj.desc}
						</InstrumentText>
					</BorderBox.BandPolicy>
				))}
			</BandPolicyWrapper>

			<div className='mt-6 flex justify-center flex-col lg:flex-row w-full'>
				<img src='/39.jpg' layout='fill' alt='boy playing guitar' />
			</div>
			

		</Container>
	);
}

export { BandContent };
