//action
const ADD_TODOS = "todos/ADD_TODOS";
const DEL_TODOS = "todos/DEL_TODOS";
const EDIT_TODOS = "todos/EDIT_TODOS";

//actions creator
export const addTodos = (payload) => {
    return {
        type: ADD_TODOS,
        payload,
    };
};

export const delTodos = (payload) => {
    return {
        type: DEL_TODOS,
        payload,
    };
};

export const editTodos = (payload) => {
    return {
        type: EDIT_TODOS,
        payload,
    };
};

const initialState = {
    list: [
        {
            id: 2000,
            title: "리액트 강의보기",
            body: "챕터 1부터 챕터 12까지 학습",
            isDone: true,
        },
        {
            id: 2,
            title: "점심 먹기",
            body: "점심 뭐먹지..?",
            isDone: false,
        },
    ],
};

//reducer
const todos = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODOS:
            return {
                ...state,
                list: [...state.list, action.payload],
            };
        case DEL_TODOS:
            return {
                ...state,
                list: state.list.filter((d) => d.id !== action.payload),
            };
        case EDIT_TODOS:
            // map : 전체 리스트의 아이템들을 모조리 바꾸는 메서드 id=== { ? } : !== d
            return {
                ...state,
                list: state.list.map((d) => {
                    if (d.id === action.payload.id)
                        return {
                            ...d,
                            isDone: action.payload.isDone ? false : true,
                        };
                    return d;
                }),
            };
        default:
            return state;
    }
};

export default todos;
