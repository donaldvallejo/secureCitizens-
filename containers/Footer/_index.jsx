import React, { useState } from 'react'
import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'
import { Root } from '../../commons'

const FooterContent = styled(motion.nav)(() => [
  tw`
    py-6
    text-white
    bg-[#59A52C]
    text-center`
])

const CopyRightText = styled(motion.nav)(() => [
  tw`text-sm`
])

const Footer = () => {
  return (
    <FooterContent>
      <CopyRightText>&copy;Copyright Rockademy 2022 </CopyRightText>
      <CopyRightText>All rights reserved</CopyRightText>
    </FooterContent>
  )
}

export { Footer }