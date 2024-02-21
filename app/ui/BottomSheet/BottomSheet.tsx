import { useBottomSheetStore } from '@/app/store/cart';
import { PropsWithChildren } from 'react';

const BottomSheet = ({ children }: PropsWithChildren) => {
  const { isOpened, closeCart } = useBottomSheetStore();

  return (
    <>
      {/* Black background overlay */}
      {/* <Transition
        onClick={closeCart}
        className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 z-40 `}
        show={isOpened}
        enter="transition-opacity ease-linear duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity ease-linear duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      ></Transition> */}
      {/* Context */}
      {/* <Transition
        className="fixed box-border flex flex-col content-start shrink-0 left-0 bottom-0 z-50 bg-white max-h-[70%] w-full rounded-t-md"
        show={isOpened}
        enter="transition ease-in-out duration-400 transform"
        enterFrom="translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in-out duration-400 transform"
        leaveFrom="translate-y-0"
        leaveTo="translate-y-full"
      > */}
        {/* Children */}
        {/* <div className="h-full flex flex-col">{children}</div>
        <div
          role="button"
          className="absolute w-8 h-8 top-4 right-4"
          onClick={closeCart}
        >
          <XMarkIcon />
        </div>
      </Transition> */}
    </>
  );
};

export default BottomSheet;
