import React from 'react';

const Add = () => {
    return (
        <form className="w-[390px] h-[815px] bg-white flex-col justify-center items-start inline-flex">
            <div className="w-[390px] p-4 bg-white border-b border-gray-100 justify-between items-center inline-flex">
                <div className="w-6 h-6 relative"></div>
                <div className="w-[356px] text-center text-neutral-800 text-lg font-semibold font-['Poppins']">SHIPPING ADDRESS</div>
                <div className="w-6 h-6 relative"></div>
            </div>
            <div className="w-[390px] h-[756px] px-4 pt-8 pb-4 bg-gray-50 flex-col justify-between items-center inline-flex">
                <div className="self-stretch h-[632px] flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-0.5 flex">
                        <div className="text-zinc-700 text-sm font-normal font-['Poppins'] leading-snug">First name</div>
                        <div className="self-stretch p-3 bg-white rounded border border-zinc-200 justify-between items-center inline-flex">
                            <div className="grow shrink basis-0 text-gray-500 text-base font-normal font-['Poppins'] leading-normal"> </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-0.5 flex">
                        <div className="text-zinc-700 text-sm font-normal font-['Poppins'] leading-snug">Last name</div>
                        <div className="self-stretch p-3 bg-white rounded border border-zinc-200 justify-between items-center inline-flex">
                            <div className="grow shrink basis-0 text-gray-500 text-base font-normal font-['Poppins'] leading-normal"> </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-0.5 flex">
                        <div className="text-zinc-700 text-sm font-normal font-['Poppins'] leading-snug">Phone number</div>
                        <div className="self-stretch p-3 bg-white rounded border border-zinc-200 justify-between items-center inline-flex">
                            <div className="grow shrink basis-0 text-gray-500 text-base font-normal font-['Poppins'] leading-normal"> </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-0.5 flex">
                        <div className="text-zinc-700 text-sm font-normal font-['Poppins'] leading-snug">Email address</div>
                        <div className="self-stretch p-3 bg-white rounded border border-zinc-200 justify-between items-center inline-flex">
                            <div className="grow shrink basis-0 text-gray-500 text-base font-normal font-['Poppins'] leading-normal"> </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-0.5 flex">
                        <div className="text-zinc-700 text-sm font-normal font-['Poppins'] leading-snug">Address</div>
                        <div className="self-stretch p-3 bg-white rounded border border-zinc-200 justify-between items-center inline-flex">
                            <div className="grow shrink basis-0 text-gray-500 text-base font-normal font-['Poppins'] leading-normal"> </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-0.5 flex">
                        <div className="text-zinc-700 text-sm font-normal font-['Poppins'] leading-snug">Postal code</div>
                        <div className="self-stretch p-3 bg-white rounded border border-zinc-200 justify-between items-center inline-flex">
                            <div className="grow shrink basis-0 text-gray-500 text-base font-normal font-['Poppins'] leading-normal"> </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-0.5 flex">
                        <div className="text-zinc-700 text-sm font-normal font-['Poppins'] leading-snug">City</div>
                        <div className="self-stretch p-3 bg-white rounded border border-zinc-200 justify-between items-center inline-flex">
                            <div className="grow shrink basis-0 text-gray-500 text-base font-normal font-['Poppins'] leading-normal"> </div>
                        </div>
                    </div>
                    <div className="self-stretch h-[72px] flex-col justify-start items-start gap-0.5 flex">
                        <div className="text-zinc-700 text-sm font-normal font-['Poppins'] leading-snug">Country</div>
                        <div className="self-stretch p-3 bg-white rounded border border-zinc-200 justify-between items-center inline-flex">
                            <div className="grow shrink basis-0 text-gray-500 text-base font-normal font-['Poppins'] leading-normal"> </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch px-4 pt-[13px] pb-3 bg-gray-800 rounded-xl justify-center items-center gap-2 inline-flex">
                    <div className="text-center text-white text-lg font-semibold font-['Poppins']">Done</div>
                </div>
            </div>
        </form>
    );
};

export default Add;