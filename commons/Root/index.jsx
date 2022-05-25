import { motion } from 'framer-motion'
import tw, { styled } from 'twin.macro'

export const Root = styled(motion.div)(() => [
  tw`px-6`
])

Root.Wrapper = styled(motion.div)(() => [
  tw`md:container max-w-full mx-auto`,
  tw`shadow-inner`
])