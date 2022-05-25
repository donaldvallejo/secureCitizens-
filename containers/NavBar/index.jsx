import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import tw, { styled, css } from 'twin.macro';

import { Icon } from '../../components';
import RockademyLogo from '../../public/therockademy_logo.png';
import Image from 'next/image';

const Root = styled(motion.nav)(() => [
    tw`
    absolute
    w-full
    flex
    items-center 
    md: justify-center
    flex-wrap`,
    tw`special:py-0`,
    css`
		z-index: 1000;
    height: 90px;
	`,
]);

// const LogoLink = styled(motion.a)(() => [
//     tw`
//     border
//     w-full
//     py-6
//     border-t-[6px]
//     border-white
//     bg-white
//     text-green-100
//     inline-flex 
//     items-center`,
//     tw`special:w-auto`,
//     css`
// 		z-index: 1000;
// 	`,
// ]);

// const Logo = styled(motion.span)(() => [
//     tw`
//     text-2xl 
//     font-display
//     text-white 
//     font-bold
//     text-[#59a52c]
//     px-8
//     w-full
//     text-center
//     uppercase 
//     tracking-wide`,
//     css`
// 		z-index: 1000;
// 	`,
// ]);

const LogoWrapper = styled(motion.span)(() => [
  tw`
  special:bg-white/20
  `,
  css`
  padding: 5px;
  height: 100%;
  width: 200px;
  `,
]);

const LogoImage = styled(motion.img)(() => [
  tw`
    w-full
    `,
    tw`
    special:inline-flex 
    special:flex-grow
    special:w-auto`,
    css`
		z-index: 1000;
    
	`,
]);

const HamburgerMenu = styled(motion.span)(() => [
    tw`
    p-3 
    w-full
    bg-green-600
    ml-auto
    inline-flex
    flex-row-reverse
    bg-alternative-400
    hover:bg-alternative-400 
    lg:hidden 
    text-white 
    hover:text-white 
    outline-none 
    cursor-pointer`,
    tw`special:hidden`,
    css`
		z-index: 1000;
	`,
]);

const HamburgerIcon = styled(Icon.Hamburger)(() => [tw`w-6 h-6`]);

const MenuWrapper = styled(motion.div)(() => [
    tw`
    w-full
    bg-alternative-400
    `,
    tw`
    special:inline-flex 
    special:flex-grow 
    special:w-auto
    special:bg-white/20`,
    css`
		z-index: 1000;
	`,
]);

const Menu = styled(motion.div)(() => [
    tw`
    w-full
    text-center
    items-start  
    flex flex-col
    z-50`,
    tw`
    special:items-center 
    special:h-auto 
    special:inline-flex 
    special:flex-row 
    special:ml-auto 
    special:w-auto`,
    css`
		z-index: 1000;
	`,
]);

const MenuLink = styled(motion.a)(() => [
    tw`
    w-full
    border-b
    border-white/20
    px-6
    py-8
    text-white 
    font-bold
    ease-in duration-200
    items-center 
    justify-center`,
    tw`
    hover:bg-[#4A8924]
    hover:text-white 
    ease-in duration-200
    cursor-pointer`,
    tw`
    special:inline-flex 
    special:border-white/5
    special:border-l 
    special:border-t 
    special:w-auto`,
    css`
		z-index: 1000;
	`,
]);

const NavBar = () => {
    const [active, setActive] = useState(false);

    const router = useRouter();

    console.log(router.pathname);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <Root>
            {router.pathname && router.pathname !== '/' &&  (
            <LogoWrapper>
            <Link passHref href='/'>
              <a>
                <LogoImage src={'/therockademy_logo.png'} alt='rockademy logo' />
              </a>
            </Link>
            </LogoWrapper>
            )}
         
            <HamburgerMenu onClick={handleClick}
              //style={router.pathname !== '/' ? {} : {height: '100%'}}
            >
                <HamburgerIcon />
            </HamburgerMenu>
            <MenuWrapper className={`${active ? '' : 'hidden'}`}>
                <Menu>
                    <Link passHref href='/'>
                        <MenuLink>Home</MenuLink>
                    </Link>
                    <Link passHref href='/lessons'>
                        <MenuLink>Lessons</MenuLink>
                    </Link>
                    <Link passHref href='/summercamp'>
                        <MenuLink>Summer Camp</MenuLink>
                    </Link>
                    <Link passHref href='/band-program'>
                      <MenuLink>Band Program</MenuLink>
                    </Link>
                    <Link passHref href='/media'>
                        <MenuLink>Media</MenuLink>
                    </Link>
                </Menu>
            </MenuWrapper>
        </Root>
    )
}

export { NavBar };
