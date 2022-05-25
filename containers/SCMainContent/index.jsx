import { motion } from 'framer-motion'
import React from 'react'
import tw, { styled, css } from 'twin.macro'
import useSWR from 'swr';
import { Calendar } from '../../components';

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
    tw`
      pt-40
    `,
    css`
    	background-image: url(/rockademy_bg_dark.jpg);
    	background-repeat: no-repeat;
    	background-size: cover;
        background-position: 50% 50%;
    `,
    // css`
    //     background: rgba(15,105,225,.7) url(/BgDark.png);
    // 	background-repeat: no-repeat;
    // 	background-size: cover;
    //     background-position: 50% 50%;
    //     background-blend-mode: multiply;
    // `,

]);

const BorderBox = styled(motion.div)(() => [
    tw`w-full p-[15px 15px] z-0`,
    tw`
    bg-black bg-opacity-50 shadow-xl p-4 rounded-2xl backdrop-blur
    `,
]);

const Grid = styled(motion.div)(() => [
    tw`
    grid 
    grid-cols-12 
    p-4
    gap-4
    w-full`,
    tw`lg:max-w-6xl`,
]);

const Heading = styled(motion.h1)(() => [
    tw`
      text-4xl 
      font-bold 
      uppercase 
      mb-4
      text-center
      bg-black bg-opacity-50 shadow-xl p-4 rounded-2xl backdrop-blur
      `,
    tw`
    md:mb-10
    lg:mb-16
    `,
]);

const LeftSide = styled(motion.div)(() => [
    tw`
    col-span-12
    flex
    flex-col
    items-stretch
    justify-between
    `,
    tw`
    md:col-span-5
    xl:col-span-5
    `,
]);

const RightSide = styled(motion.div)(() => [
    tw`
    col-span-12
    h-full
    `,
    tw`
    md:col-span-7
    xl:col-span-7
    `,
]);

BorderBox.RightSide = styled(BorderBox)(() => [
    tw`
    relative
    h-full
    `,
]);

BorderBox.LeftTop = styled(BorderBox)(() => [
    tw`
    mb-4
    text-center
    `,
    tw`flex flex-col items-center justify-center`,
    tw`
    
    `,
]);

BorderBox.LeftBottom = styled(BorderBox)(() => [
    tw`
    text-lg
    font-black
    h-full
    `,
    tw`flex flex-col items-center justify-center`,
]);

const List = styled(motion.ul)(() => [
    tw`
    list-none
    `,
]);

const ListItem = styled(motion.li)(() => [
    tw`
    text-xl
    font-black
    `,
]);

// ================== //
// CONTENT CONTAINERS //
// ================== //

const PAGE_CONTENT = {
    heading: 'Summer Of Rock Camp',
    infoListItems: [
        '9 am to 2 pm',
        '$425 for New Students',
        '$395 for Current Students',
        '*Sibling and multiple-camp discounts available',
    ],
    bottomLeftCopy: (`
        Dates:

        6/6-6/10   (Performance 6/11)
        6/13-6/17  (Performance 6/18)
        6/20-6/24  (Performance 6/25)
        6/27-7/1   (Performance 7/2)
        7/5-7/8    (Performance 7/9) 
        7/11-7/15  (Performance 7/16)
        7/18-7/22  (Performance 7/23)
        7/25-7/29  (Performance 7/30)
        8/1-8/5    (Performance 8/6)
        8/8-8/12   (Performance 8/13)

        *Each week will conclude with a performance on Saturday at Tower 13 Beach Bar & Grill in Cardiff from 11 am to 1pm.
        `
    ),
    rightSideContent: (
        <h1 style={{ textAlign: 'center', fontSize: '130%' }}>
            <strong>Events Calendar</strong>
        </h1>
    ),
};

// DATA FETCHING USED IN MULTIPLE useSWR HOOKS ON THIS PAGE
const fetcher = (url) => fetch(url).then((res) => res.json());

function SCMainContent({ allEvents, userText }) {

    //const { data, error, mutate } = useSWR('/api/usertext', fetcher)

    //console.log(data, error)
    //if (data) { console.log({ data }) }

    return (
        <Container>
            <Heading>{PAGE_CONTENT.heading}</Heading>

            <Grid>
                <LeftSide>
                    <BorderBox.LeftTop>
                        <List>
                            {PAGE_CONTENT.infoListItems.map((text) => (
                                <ListItem key={text}>{text}</ListItem>
                            ))}
                        </List>
                    </BorderBox.LeftTop>
                    <BorderBox.LeftBottom style={{ whiteSpace: 'pre-line' }}>
                        {userText ? (
                            <>
                                <h2 className="text-2xl">{userText.headline}</h2>
                                <br />
                                {userText.content.map(text => {
                                    return (
                                        <p key={text} className="text-left w-full">{text}</p>
                                    )
                                })}
                                <br />
                                <p>{userText.details}</p>
                            </>
                        //) : //error ? <p>There was an error...</p> : <p>Loading...</p>}
                        ) : <p>Coming soon...</p>}
                        {/* {PAGE_CONTENT.bottomLeftCopy} */}
                    </BorderBox.LeftBottom>
                </LeftSide>
                <RightSide>
                    <BorderBox.RightSide>
                        {PAGE_CONTENT.rightSideContent}

                        <Calendar events={allEvents} />
                    </BorderBox.RightSide>
                </RightSide>
            </Grid>
        </Container>
    );
}

export { SCMainContent };
