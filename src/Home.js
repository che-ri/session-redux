import React from "react";

import { useSelector, useDispatch } from "react-redux";

//action creators
import { countMinus, countPlus } from "./redux/modules/count";
import { addCoupon } from "./redux/modules/coupon";

export default function Home() {
    const dispatch = useDispatch();
    const { count } = useSelector((state) => state.count);
    const { coupon } = useSelector((state) => state.coupon);
    const ref = React.useRef(null);

    function handleCountPlus() {
        dispatch(countPlus());
    }

    function handleMinusPlus() {
        dispatch(countMinus());
    }

    function handleAddCoupon() {
        const value = ref.current.value;
        dispatch(addCoupon(value));
        ref.current.value = "";
    }
    return (
        <div>
            <div className="h-[calc(100vh-70px)] w-[100vw] flex flex-col gap-[20px] items-center justify-center">
                <div className="bg-[#FFAEBC] w-[50%] rounded-lg">
                    <h1 className="text-center text-[30px] border border-white py-[10px] text-white">
                        Count
                    </h1>
                    <div className=" py-[50px] flex items-center justify-center">
                        <button
                            onClick={handleMinusPlus}
                            className="rounded bg-black text-white  w-[50px] h-[50px]"
                        >
                            -
                        </button>
                        <p className="bg-white min-w-[100px] max-w-[100px] h-[50px] flex justify-center items-center text-[20px]">
                            {count}
                        </p>
                        <button
                            onClick={handleCountPlus}
                            className="rounded bg-black text-white w-[50px] h-[50px]"
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className="bg-[#A0E7E5] w-[50%] rounded-lg ">
                    <h1 className="text-center w-full text-[30px] border border-white py-[10px] text-white">
                        Coupon
                    </h1>
                    <div className="py-[50px] flex flex-col items-center justify-center">
                        <div>
                            <input
                                className="border-b border-black h-[50px]"
                                ref={ref}
                            />
                            <button
                                onClick={handleAddCoupon}
                                className="rounded bg-black text-white px-[10px] w-max h-[50px]"
                            >
                                쿠폰등록
                            </button>
                        </div>
                        <p className="py-[10px]">적용된 쿠폰 : {coupon}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
