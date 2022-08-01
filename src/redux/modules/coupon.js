//Ducks pattern

//action
const ADD_COUPON = "ADD_COUPON";

//actions creator
export const addCoupon = (value) => {
    //어떠한 액션을 리턴해주는 함수
    return {
        type: ADD_COUPON,
        payload: value,
    };
};

const initialState = {
    coupon: "",
};

//reducer
const coupon = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_COUPON:
            return {
                ...state,
                coupon: payload,
            };
        default:
            return state;
    }
};

export default coupon;
