import React from 'react'
import { motion } from 'framer-motion'
import tw, { styled, css } from 'twin.macro'

const Root = styled(motion.div)(() => [
  tw`
    min-h-[40vh]
    flex 
    justify-center 
    items-center 
    pt-36
    relative
    text-white`,
    // tw`
    // min-h-[40vh]
    // relative
    // text-white`,
  tw`special:pt-20`,
  tw`md:min-h-[60vh]`,
  tw`lg:min-h-[100vh]`,
])

const OuterLine = styled(motion.div)(() => [
  tw`
    border 
    border-white 
    w-full`,
  tw`md:w-10/12`,
  
])

const InnerLine = styled(motion.div)(() => [
  tw`
    py-6 
    m-2 
    border-black
    mx-auto
    absolute
    top-1/3
    md:top-[20%]
    w-4/5
    flex`,
  tw`md:py-16`,
  tw`lg:py-32`,
  tw`
  bg-black bg-opacity-40 shadow-xl p-4 rounded-2xl backdrop-blur
  `,
])

const Container = styled(motion.div)(() => [
  tw`
    w-4/5
    flex
    flex-col
    justify-center 
    items-center
    text-center
    mx-auto`,
])

const Title = styled(motion.span)(() => [
  tw`
    text-3xl 
    uppercase
    font-display
    mb-6
    `,
  tw`md:text-5xl`,
  tw`lg:text-7xl`,
])

const BigR = styled(Title)(() => [
  tw`font-cracked
  md:text-[5rem]
  lg:text-[6.5rem] 
  xl:text-[8rem] 
  text-alternative-400`,
])

const SubTitle = styled(motion.h3)(() => [
  tw`
    font-bold 
    border-t-2
    pt-4
    tracking-[5px]
    font-body
    border-[#59A52C] 
    uppercase`,
  tw`
    mx-auto 
    md:text-lg`
])


const BG_IMAGE_PROPS = {
  //background: "url(/rockademy_bg_dark.jpg) no-repeat",
  //background: "url(/BgDark.png) no-repeat",
  //filter: "brightness(0.90) grayscale(1)",
  //background: "url(/rockademy_bg.jpg) no-repeat",
  //background: "rgba(15,105,225,.7) url(/BgDark.png)",
  background: "url(/rockademy_bg_dark.jpg) no-repeat",
  backgroundSize: "100% 100%",
  backgroundBlendMode: 'multiply'
}

const HeroInfo = {
  title: `Welcome to the ${<BigR>Rockademy</BigR>}`,
  subTitle: "Cultivate Your Inner Rockstar"
}

const Hero = () => {
  return (
    <Root style={BG_IMAGE_PROPS}>
        <InnerLine>
          <Container>
            <img 
              src='/therockademy_logo1.png'
              alt='rockademy logo'
              style={{ width: '80%' }}
            />
          </Container>
        </InnerLine>
    </Root>
  )
}

export { Hero }