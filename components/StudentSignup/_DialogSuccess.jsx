import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter  } from 'next/router';
import tw, { styled, css } from 'twin.macro';

const secondsToClose = 5;

const Overlay = styled(motion.div)(() => [
  tw`
    fixed
    inset-0
    bg-gray-200 
    bg-opacity-90
    min-h-screen 
    transition-opacity`,
  css`
		z-index: 2000;
	`,
]);

export default function DialogSuccess({ setOpen }) {

  const router = useRouter();
  const [secRemain, setSecRemain] = useState(secondsToClose);

  function closeDown() {
    //console.log('closeDown')
    setOpen(false);
    // redirect user back to main page
    router.push('/');
  }

  useEffect(() => {
    let countDown, timer;
    
    // set countdown
    countDown = setTimeout(closeDown, secondsToClose * 1000 + 100);
    
    // update seconds remained
    timer = setInterval(() => {
      setSecRemain(prev => {
        if (prev > 0) return prev - 1;
        console.log('0 rem')
        clearInterval(timer);
        return 0;
      })
    }, 1000);

    return () => {
      console.log('unmount')
      clearTimeout(countDown);
      clearInterval(timer);
    }
  }, []);

  return (
    <Overlay onClick={() => {}} >
      <div className="flex items-center justify-center p-4 min-h-screen text-center">
        <div className="block bg-white rounded-lg overflow-hidden shadow-xl w-3/4">
          <div className="bg-white p-4 flex justify-center items-center text-gray-700 w-full">
            <div className="m-2 items-center w-3/4">
              <div className="w-full p-4">
                <h3 className="text-center font-medium m-2">
                  Registration successful! 
                </h3>
                <span className="px-px text-8xl font-bold text-green-500">&#x2713;</span>
              </div>
              <div className="w-full p-4">
                <p>
                  Redirecting to main page in {secRemain} second(s).
                </p>
                <p>
                  <a 
                    onClick={closeDown}
                    className="text-blue-500 underline cursor-pointer"
                  > 
                    Click here to return to homepage 
                  </a> 
                </p>
                  
              </div>

            </div>
            
          </div>
          <div className="p-4 flex flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={closeDown}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Overlay>
    
  )
}