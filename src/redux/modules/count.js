//Ducks pattern

//action
const COUNT_PLUS = "COUNT_PLUS";
const COUNT_MINUS = "COUNT_MINUS";

//actions creator
export const countPlus = () => {
    return {
        type: COUNT_PLUS,
    };
};

export const countMinus = () => {
    return {
        type: COUNT_MINUS,
    };
};

const initialState = {
    count: 0,
};

//reducer
const count = (state = initialState, action) => {
    //실제적으로 액션을 받아다가 어떠한 동작을 하는 함수
    switch (action.type) {
        case COUNT_PLUS:
            //불변성 유지
            // state.count++  //💩

            return {
                ...state,
                count: state.count + 1,
            };
        case COUNT_MINUS:
            return {
                ...state,
                count: state.count - 1,
            };
        default:
            return state;
    }
};

export default count;
