import React from 'react';

const TabBar = () => {
    return (
        <div className="w-full h-10 border-b border-zinc-200 justify-between items-end flex bg-white">
            <div className="grow shrink basis-0 h-[37px] p-2 border-b-2 border-neutral-800 justify-center items-center gap-2 flex">
                <div className="text-center text-neutral-800 text-sm font-semibold">Tất cả</div>
            </div>
            <div className="grow shrink basis-0 h-[38px] p-2 justify-center items-center gap-2 flex">
                <div className="text-center text-gray-700 text-sm font-normal leading-snug">Charm</div>
            </div>
            <div className="grow shrink basis-0 h-[38px] p-2 justify-center items-center gap-2 flex">
                <div className="text-center text-gray-700 text-sm font-normal leading-snug">KeyChain</div>
            </div>
        </div>
    );
};

export default TabBar;