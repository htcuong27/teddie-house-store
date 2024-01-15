import Footer2 from '../components/Footer2';
import Header2 from '../components/Header2';

const Checkout = () => {
    return (
        <main className="bg-white min-h-screen flex flex-col mx-auto">
            {/* Header */}
            <Header2>Thanh Toán</Header2>
            {/* main */}
            <div className="bg-gray-50 justify-center items-start flex w-full flex-1">
                <div className="w-full px-4 pt-6 pb-4 bg-gray-50 flex-col justify-center items-center gap-8 flex">
                    <div className="w-full flex-col justify-center items-center gap-2 flex">
                        <div className="w-full p-3 bg-white rounded border border-zinc-200 flex-col justify-center items-center gap-2.5 flex">
                            <div className="self-stretch h-6 justify-between items-center flex">
                                <div className="justify-start items-start gap-2 flex flex-1">
                                    <div className="w-6 h-6 relative"></div>
                                    <div className="flex-1 text-gray-700 text-base font-normal text-center leading-normal">Shipping address</div>
                                </div>
                                <div className="w-4 h-4 relative origin-top-left -rotate-180"></div>
                            </div>
                            <div className="w-[334px] text-black text-sm font-normal  leading-snug">Jonathan Doe<br />144 Baker Avenue<br />Northenhills, UK<br />SW43 4MM</div>
                        </div>

                        <div className="h-12 p-3 bg-white rounded border border-zinc-200 flex-col justify-start items-start gap-2.5 flex">
                            <div className="self-stretch h-6 justify-between items-center inline-flex">
                                <div className="justify-start items-start gap-2 flex">
                                    <div className="w-6 h-6 relative"></div>
                                    <div className="text-gray-700 text-base font-normal  leading-normal">Add discount code</div>
                                </div>
                                <div className="w-4 h-4 relative"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* Place Order */}
            <Footer2 linkTo={'/'} linkName={'Đặt Hàng'}>
                {/* Brief Items */}
                <div className="flex-col justify-start items-center gap-5 flex">
                    <div className="w-[358px] h-[52px] px-4 py-2 bg-white rounded-lg justify-between items-center inline-flex">
                        <div className="text-gray-700 text-sm font-semibold ">Items summary</div>
                        <div className="w-6 h-6 relative"></div>
                    </div>
                    <div className="self-stretch h-[151px] flex-col justify-start items-start flex">
                        <div className="self-stretch py-2 justify-between items-start inline-flex">
                            <div className="text-neutral-800 text-sm font-normal  leading-snug">Test</div>
                            <div className="text-black text-sm font-semibold ">100000000000</div>
                        </div>
                        <div className="self-stretch py-2 justify-between items-start inline-flex">
                            <div className="text-neutral-800 text-sm font-normal  leading-snug">Test</div>
                            <div className="text-black text-sm font-semibold ">100000000000</div>
                        </div>
                        <div className="self-stretch py-2 border-b border-black justify-between items-start inline-flex">
                            <div className="text-neutral-800 text-sm font-normal  leading-snug">Shipping</div>
                            <div className="text-black text-sm font-semibold ">100000000000</div>
                        </div>
                        <div className="self-stretch py-2 justify-between items-start inline-flex">
                            <div className="text-neutral-800 text-sm font-semibold ">Total</div>
                            <div className="text-black text-sm font-semibold ">100000000000</div>
                        </div>
                    </div>
                </div>
            </Footer2>
        </main>
    );
};

export default Checkout;