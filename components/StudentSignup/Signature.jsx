import React, { useRef, useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import tw, { styled, css } from 'twin.macro';
import SignatureCanvas from 'react-signature-canvas';

const Backdrop = styled(motion.div)(() => [
    tw`
    w-full
    h-full
    bg-gray-800
    bg-opacity-60
    fixed
    top-0
    flex
    justify-center
    items-center
    z-50
    `,
    css`
	z-index: 1000;
	`,
]);

const ContentBox = styled(motion.div)(() => [
    tw`
    w-full 
    bg-gray-800
    text-white
    rounded
    flex
    flex-col
    justify-start
    items-center
    p-2
    border
    border-gray-600
    absolute
    `,
    tw`
    md:w-3/4
    lg:w-1/2
    `,
]);

const ButtonWrapper = styled(motion.div)(() => [
    tw`
    flex
    flex-wrap
    justify-center
    w-full
    `,
]);

const Button = styled(motion.button)(() => [
    tw`
    text-white
    border
    border-gray-600
    font-bold
    p-2
    mx-1
    my-4
    w-1/5
    text-center
    hover:bg-[#59A52C]
      hover:text-white
      focus:bg-[#59A52C]
      focus:text-white
      outline-none
      hover:border-[#59A52C]
    `,
]);

const Heading = styled(motion.span)(() => [
    tw`
    text-sm
    font-bold
    mb-2
    text-center
    text-gray-400
    `,
    tw`
    md:text-lg
    `,
]);

export default function Signature({
    //captureSig,
    //signature,
    setSigModalOpen,
    setSignature,
}) {
    useLockBodyScroll();

    const canvasRef = useRef();

    const [sigURL, setSigURL] = useState('');

    // function viewSig() {
    //     setSigURL(canvasRef.current.getTrimmedCanvas().toDataURL('image/png'));
    // }

    function acceptSig() {
        if (canvasRef.current.isEmpty()) return;
        setSignature(canvasRef.current.getTrimmedCanvas().toDataURL('image/png'));

        setSigModalOpen(false);
    }

    function clearSig() {
        setSignature('');
        setSigURL('');
        canvasRef.current.clear();
    }

    return (
        <Backdrop>
            <ContentBox>
                <Heading>Use your mouse or touch to sign in the field below:</Heading>
                <SignatureCanvas
                    penColor='black'
                    canvasProps={{ width: 500, height: 200 }}
                    onEnd={(e) => {
                        // console.log(e);
                    }}
                    ref={canvasRef}
                    style={{ border: '1px solid black' }}
                    backgroundColor='white'
                />
                <ButtonWrapper>
                    <Button onClick={acceptSig}>Accept</Button>
                    <Button onClick={clearSig}>Clear</Button>
                    <Button onClick={() => setSigModalOpen(false)}>Close</Button>
                </ButtonWrapper>
            </ContentBox>
        </Backdrop>
    );
}

function useLockBodyScroll() {
    useLayoutEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = 'hidden';

        if (window.getComputedStyle(document.body).width > 999) {
            document.body.style.overflow = originalStyle;
        }

        return () => (document.body.style.overflow = originalStyle);
    });
}
