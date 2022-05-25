import React from 'react';
import {
	UpcomingEvent,
	JoinEvent,
	AboutUs,
	Hero,
	ContactSection,
	ContactSectionNew,
} from '../../containers';

const HomePage = () => {
	return (
		<>
			<Hero />
			<JoinEvent />
			<UpcomingEvent />
			<AboutUs />
			{/* <ContactSection /> */}
			<ContactSectionNew />
		</>
	);
};

export default HomePage;
