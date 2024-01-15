import { Transition } from '@headlessui/react';
import { PropsWithChildren, useLayoutEffect } from 'react';
import ButtonWithIcon from '../ButtonWithIcon';
import CloseIcon from '@/app/svgs/CloseIcon';

interface BottomSheetProps extends PropsWithChildren {
    isOpened: boolean;
    onClickCloseButton: () => void;
}

const BottomSheet = (
    {
        onClickCloseButton,
        isOpened = false,
        children
    }: BottomSheetProps) => {

    useLayoutEffect(() => {
        isOpened
            ? (
                document.body.style.overflow = 'hidden'
            )
            : (
                document.body.style.overflow = 'visible');
    }, [isOpened]);

    return (
        <>
            <Transition
                onClick={onClickCloseButton} className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 `}
                show={isOpened}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
            </Transition>
            <Transition
                className="fixed bottom-0 flex flex-col items-center px-6 py-[1.625rem] left-0 bg-white border shadow-sm max-h-[70%] w-full rounded-tl-2xl rounded-tr-2xl"
                show={isOpened}
                enter="transition ease-in-out duration-400 transform"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transition ease-in-out duration-400 transform"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
            >
                {/* Children */}
                <div className='absolute top-[0.8125rem] right-5 flex flex-row-reverse z-10'>
                    <ButtonWithIcon
                        color={'invisible'}
                        onClick={onClickCloseButton}>
                        <CloseIcon />
                    </ButtonWithIcon>
                </div>
                {children}
            </Transition>
        </>
        // <div id='bottom-sheet' className="hs-overlay hs-overlay-open:translate-y-0 translate-y-full fixed bottom-0 inset-x-0 transition-all duration-300 transform max-h-40 h-full w-full z-[80] bg-white border-b  hidden" tabIndex={-1}>
        //     <div className="flex justify-between items-center py-3 px-4 border-b ">
        //         <ButtonWithIcon 
        //             color={'invisible'} 
        //             onClick={handleClose}>
        //             <CloseIcon />
        //         </ButtonWithIcon>
        //     </div>
        //     <div className="p-4">
        //         <p className="text-gray-800 ">
        //             Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
        //         </p>
        //     </div>
        // </div>
    );
};

export default BottomSheet;
