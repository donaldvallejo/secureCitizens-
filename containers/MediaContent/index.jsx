import React from 'react';
import { motion } from 'framer-motion';
import tw, { styled, css } from 'twin.macro';
import { PicGrid } from './PicGrid';

// ============================ //
// STYLED / TAILWIND COMPONENTS //
// ============================ //
const Container = styled(motion.div)(() => [
	tw`
      flex
      flex-col
      items-center
      bg-gray-800
      text-gray-200
      px-4
      py-32`,
]);

const Heading = styled(motion.h1)(() => [
	tw`
	  text-alternative-400
      text-3xl
      font-bold 
      uppercase
      text-center
	  mt-10
      mb-10
      `,
	tw`
      sm:text-4xl
      `,
]);

const SubHeading = styled(motion.h3)(() => [
	tw`
    text-base
    font-bold
    text-center
    mb-5
    `,
	tw`
    sm:text-xl
    `,
]);

const BorderBox = styled(motion.div)(() => [
	tw`p-[15px 15px]`,
	tw`flex flex-col items-center`,
	tw` border-gray-700`,
	`border-radius: 22px; background: #1f2937;
    box-shadow:  5px 5px 10px #141a23, -5px -5px 10px #2a384b;`,
]);

const ContentWrapper = styled(motion.div)(() => [
	tw`
    grid
    grid-cols-4
    w-full
    gap-4
    p-2
    justify-around
    `,
]);

const InfoBox = styled(BorderBox)(() => [
	tw`
    w-full
    col-span-4
    text-center
    px-10
    pt-10
    `,
	tw`
    md:col-span-1
    `,
]);

const MasonryWrapper = styled(BorderBox)(() => [
	tw`
    w-full
    col-span-4
    `,
	tw`
    md:col-span-3
    `,
]);

const Neumorphic = styled(BorderBox)(() => [
	tw`
    rounded-sm 
    bg-gray-800 
    p-3 
    mb-8
    text-gray-400 
    rounded-xl 
    `,
]);

const VIDEOS_CONTENT = {
	contents: [
		{
			id: 'vid01',
			title: 'CV Fair The Special Guest I\'m Just a Girl',
			href: 'https://www.youtube.com/watch?v=UM6QBv9D55A',
			preview: 'https://i.ytimg.com/vi/UM6QBv9D55A/mqdefault.jpg',
		},
		{
			id: 'vid02',
			title: 'Rat tooth breed at house of blues',
			href: 'https://www.youtube.com/watch?v=6VoKxVbnZWg',
			preview: 'https://i.ytimg.com/vi/6VoKxVbnZWg/mqdefault.jpg',
		},
		{
			id: 'vid03',
			title: 'Exit 37 My Iron Lung',
			href: 'https://www.youtube.com/watch?v=ThTX-cHjId0',
			preview: 'https://i.ytimg.com/vi/ThTX-cHjId0/mqdefault.jpg',
		},
		{
			id: 'vid04',
			title: 'Rat tooth I am one live at house of blues',
			href: 'https://www.youtube.com/watch?v=9N4hYZ_-m1w',
			preview: 'https://i.ytimg.com/vi/9N4hYZ_-m1w/mqdefault.jpg',
		},
		{
			id: 'vid05',
			title: 'Rat tooth war pigs live at house of blues',
			href: 'https://www.youtube.com/watch?v=cVmRBKU8G0U',
			preview: 'https://i.ytimg.com/vi/cVmRBKU8G0U/mqdefault.jpg',
		},
	]
}

function MediaContent() {
	return (
		<Container
			style={{
				background: 'url("/rockademy_bg_tall.jpg")',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'cover'
			}}
		>
			<Heading>Media</Heading>
			<hr className="text-alternative-400" />
			<ContentWrapper>
				<InfoBox>
					<h1 className='text-xl text-alternative-400'>Press</h1>
					<hr className='border-alternative-400  w-1/12 text-center mx-auto my-3' />
					<p className='text-gray-400 mb-7'>
						Our students have been featured in news articles and videos.
					</p>
					<ul>
						<li>
							<a
								target='_blank'
								href='http://sdvoyager.com/interview/meet-james-couzens-rockademy-solana-beach/'
								rel="noopener noreferrer"
							>
								<Neumorphic>
									San Diego Voyager
								</Neumorphic>

							</a>
						</li>
						<li>
							<a
								target='_blank'
								href='http://www.youtube.com/watch?v=1ctuicEV0I0'
								rel="noopener noreferrer"
							>
								<Neumorphic>
									Carmel Valley News
								</Neumorphic>

							</a>
						</li>
						{/* <li>
							<a
								target='_blank'
								href='http://delsolmagazine.com/2014/07/07/the-couzen-family/'
							>
								<Neumorphic>
									Del Sol Magazine
								</Neumorphic>
								
							</a>
						</li> */}
						<li>
							<a
								target='_blank'
								href='http://www.delmartimes.net/news/2013/jun/24/the-rockademy-holding-grand-opening-in-solana/'
								rel="noopener noreferrer"
							>
								<Neumorphic>
									Del Mar Times
								</Neumorphic>
							</a>
						</li>

						<li>
							<a
								target='_blank'
								href='http://www.sandiegomagazine.com/San-Diego-Magazine/April-2014/The-Best-of-North-County-Right-Now/Kids-Pets/'
								rel="noopener noreferrer"
							>
								<Neumorphic>
									Best of North County
								</Neumorphic>
							</a>
						</li>
					</ul>
					<hr className='border-alternative-400  w-2/3 text-center mx-auto my-10' />
					<h1 className='text-xl text-alternative-400'>Videos</h1>
					<hr className='border-alternative-400  w-1/12 text-center mx-auto my-3' />
					<p className='text-gray-400 mb-7'>
						Watch performances from previous students
					</p>
					<ul>
						{VIDEOS_CONTENT.contents.map(video => (
							<li key={video.id}>
								<a
									target='_blank'
									href={video.href}
									rel="noopener noreferrer"
								>
									<Neumorphic>
										<img src={video.preview} alt={video.title}/>
										{video.title}
									</Neumorphic>
								</a>
							</li>
						))}
					</ul>
				</InfoBox>
				<MasonryWrapper>
					<PicGrid />
				</MasonryWrapper>
			</ContentWrapper>
		</Container>
	);
}

export { MediaContent };
