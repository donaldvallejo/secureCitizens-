import tw, { styled, css } from 'twin.macro'

const ModalLayout = styled('div')(() => [
  //tw`bg-gradient-to-tr from-[#252525] to-[#4B4A4A]`,
  tw`bg-gradient-to-tr from-[#1F2937] to-[#252525]`,
  tw`fixed top-0 left-0 w-full h-screen`,
  tw`flex justify-center items-center`, ,
  css`z-index:1100;`
])

const Modal = styled('div')(() => [
  //tw`bg-white w-[1000px]`,
  tw`
  flex justify-center items-center
  animate-fade-in-down
  rounded-lg
  `
])

const Image = styled('img')(() => [
  tw`
  rounded-lg
  w-full
  `
])

const LoadingScreen = () => (
  <ModalLayout>
    <Modal>
      <Image src="/therockademy_logo_big.png" />
    </Modal>
  </ModalLayout>
)

export { LoadingScreen }