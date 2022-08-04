import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";

import { createLogger } from "redux-logger";

import count from "../modules/count";
import coupon from "../modules/coupon";
import todos from "../modules/todos";

const middleware = [];
if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
}

//단일 스토어, 다수 리듀서
const store = combineReducers({
    count,
    coupon,
    todos,
});

export default createStore(store, applyMiddleware(...middleware));
