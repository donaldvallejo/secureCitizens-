import { motion } from 'framer-motion';
import tw, { styled } from 'twin.macro';
import { Root } from '../../commons';
import { Icon } from '../../components';
import Link from 'next/link';
import About from './AboutUs';
import Testimonials from './Tesimonials';
import CTA from './CTA';

const Wrapper = styled(Root.Wrapper)(() => [tw`px-2`]);

const Box = styled(motion.div)(() => [
	tw`flex flex-col items-center space-y-8 text-center border-none`,
	tw`xl:(items-start text-left)`,
]);

const Heading = styled(motion.h3)(() => [
	tw`text-gray-900 font-display text-5xl font-bold`,
	// tw`xl:(text-6xl)`,
]);

const Text = styled(motion.p)(() => [tw`text-gray-600 font-body leading-7`]);

export const Button = styled(motion.button)(({ icon }) => [
	tw`bg-gray-700 py-3 px-7 cursor-pointer`,
	tw`text-white font-display text-xl uppercase`,
	tw`hocus:(bg-alternative-400 text-white)`,
	tw`xl:(text-2xl)`,
	icon === 'left' && tw`flex items-center`,
]);

Button.Icon = styled(Icon.Globe)(() => [tw`text-white mr-2`]);

const info = {
	about: [
		{
			heading: 'About Us',
			description:
				'We at The Rockademy are professional musicians who provide a structured, practical, and fun approach to playing music. Whether you want to learn an instrument, you want to play in a band, or you play in a band and want to take it to the next level, we at The Rockademy are committed to your success every step of the way! Learn an instrument, play in a band, write a song, record it, make a demo, take it to the stage!',
		},
		{
			heading: 'Brief History',
			description:
				'The Rockademy was founded in 2011. James Couzens, drum instructor, vocalist and professional musician, began working with the bands that his drum students played in. Due to the success and excitement generated, James conceptualized The Rockademy, a comprehensive approach to band organization and development.',
		},
		{
			heading: 'Our Mission',
			description:
				"The Rockademy's mission is to facilitate a structured, fun and practical approach to develop your musical aspirations to their fullest potential.",
		},
		{
			heading: 'Services',
			description:
				'We offer our students instruction in Individual Instrument Lessons, Artist Development, Band Development, Song Writing, Demo Production & Performance.',
		},
	],
	testimonials: [
		{
			author: 'Deena Holcomb',
			testimonial:
				'Rockademy is amazing!  My son loves it and is learning so much. James and The Rockademy go above and beyond to teach kids how to work together, perform on stage, create entertaining set lists, and write original music. They are talented teachers and great role models for my son and his friends. I have never seen my son so passionate about any other activity. We look forward to more amazing lessons and performances. Thank you Rockademy!!!',
		},
		{
			author: 'Kelly Conley',
			testimonial:
				"My son has wanted to be a drummer since he was four. His lessons with James have been great and we can't wait to work with Rockademy for a long time to come. We foresee a long relationship and a lot of fun!",
		},
		{
			author: 'Lisa Schaerer',
			testimonial:
				'James is an exceptionally kind and caring individual. Our experience with James, working with our son over several years has been nothing but positive. James is a talented musician with a real gift in reaching kids of all abilities. I give him my highest recommendation.',
		},
		{
			author: 'Tex Vertongen',
			testimonial:
				'Hunter has been getting lessons from James for one and a half years now.  James is a great teacher who is patient and has a natural ability to help Hunter work out the more difficult beats.  By allowing Hunter to learn the songs he wants to learn he ensures that Hunter enjoys playing rather than views it as a chore.  I believe that through his lessons with James, Hunter is going to develop a skill that will bring him my joy and an outlet for his emotions in the years to come.',
		},
		{
			author: 'Kristy Myers',
			testimonial:
				'James has a comfortable low key teaching style that encourages kids to try, do and succeed!',
		},
	],
	button_text: 'Join our summer camp',
};

// const ABOUT_INFO = {
// 	heading1: 'About Us',
// 	description1: `We at The Rockademy are professional musicians who provide a structured, practical, and fun approach to playing music. Whether you want to learn an instrument, you want to play in a band, or you play in a band and want to take it to the next level, we at The Rockademy are committed to your success every step of the way! Learn an instrument, play in a band, write a song, record it, make a demo, take it to the stage!
//   `,
// 	heading2: 'Brief History',
// 	description2: `
//   The Rockademy was founded in 2011. James Couzens, drum instructor, vocalist and professional musician, began working with the bands that his drum students played in. Due to the success and excitement generated, James conceptualized The Rockademy, a comprehensive approach to band organization and development.
//   `,
// 	heading2: 'Our Mission',
// 	description2: `The Rockademy's mission is to facilitate a structured, fun and practical approach to develop your musical aspirations to their fullest potential.
//   `,
// 	heading3: 'Services',
// 	description3: `
//   We offer our students instruction in Individual Instrument Lessons, Artist Development, Band Development, Song Writing, Demo Production & Performance.`,
// };

// const TESTIMONIALS = {
// 	heading: 'Testimonials',
// 	testimonials1: `
//   "Rockademy is amazing!  My son loves it and is learning so much. James and The Rockademy go above and beyond to teach kids how to work together, perform on stage, create entertaining set lists, and write original music. They are talented teachers and great role models for my son and his friends. I have never seen my son so passionate about any other activity. We look forward to more amazing lessons and performances. Thank you Rockademy!!!  ~ Deena Holcomb"
//   `,
// 	testimonials2: `
//   "My son has wanted to be a drummer since he was four. His lessons with James have been great and we can't wait to work with Rockademy for a long time to come. We foresee a long relationship and a lot of fun!  ~ Kelly Conley"
//   `,
// 	testimonials3: `
//   "James is an exceptionally kind and caring individual. Our experience with James, working with our son over several years has been nothing but positive. James is a talented musician with a real gift in reaching kids of all abilities. I give him my highest recommendation. ~ Lisa Schaerer"
//   `,
// 	testimonials4: `
//   "Hunter has been getting lessons from James for one and a half years now.  James is a great teacher who is patient and has a natural ability to help Hunter work out the more difficult beats.  By allowing Hunter to learn the songs he wants to learn he ensures that Hunter enjoys playing rather than views it as a chore.  I believe that through his lessons with James, Hunter is going to develop a skill that will bring him my joy and an outlet for his emotions in the years to come. ~ Tex Vertongen"
//   `,
// 	testimonials5: `
//   "James has a comfortable low key teaching style that encourages kids to try, do and succeed! ~ Kristy Myers"
//   `,
// 	button_text: 'Join our summer camp',
// };

const AboutUs = () => {
	return (
		<div id='about' className='bg-gray-800'>
			{/* <Wrapper> */}
			{/* <Box> */}
			<About info={info} />
			<CTA />
			<Testimonials testimonials={info} />
			{/* <Heading>{ABOUT_INFO.heading1}</Heading>
          <Text>{ABOUT_INFO.description1}</Text>
          <Heading>{ABOUT_INFO.heading2}</Heading>
          <Text>{ABOUT_INFO.description2}</Text>
          <Heading>{ABOUT_INFO.heading3}</Heading>
          <Text>{ABOUT_INFO.description3}</Text>
          <Heading>{TESTIMONIALS.heading}</Heading>
          <Text>{TESTIMONIALS.testimonials1}</Text>
          <Text>{TESTIMONIALS.testimonials2}</Text>
          <Text>{TESTIMONIALS.testimonials3}</Text>
          <Text>{TESTIMONIALS.testimonials4}</Text>
          <Text>{TESTIMONIALS.testimonials5}</Text> */}

			{/* <Link passHref href='/summercamp'>
				<Button type='button' icon='left'>
					<Button.Icon />
					{info.button_text}
				</Button>
			</Link> */}
			{/* </Box> */}
			{/* </Wrapper> */}
		</div>
	);
};

export { AboutUs };
