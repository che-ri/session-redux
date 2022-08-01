import { createStore } from "redux";
import { combineReducers } from "redux";
import count from "../modules/count";
import coupon from "../modules/coupon";

//단일 스토어, 다수 리듀서
const store = combineReducers({
    count,
    coupon,
});

export default createStore(store);
