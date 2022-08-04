import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, delTodos, editTodos } from "./redux/modules/todos";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

export default function Todo() {
    const dispatch = useDispatch();
    const title_ref = React.useRef();
    const body_ref = React.useRef();
    const navigate = useNavigate();

    const list = useSelector((state) => state.todos.list);

    function onSubmit(e) {
        e.preventDefault();
        const title = title_ref.current.value;
        const body = body_ref.current.value;
        const isDone = false;
        const id = nanoid();
        title_ref.current.value = "";
        body_ref.current.value = "";
        dispatch(addTodos({ title, body, id, isDone }));
    }

    const working_list = list.filter((d) => {
        return !d.isDone;
    });

    const done_list = list.filter((d) => {
        return d.isDone;
    });

    function handleDelItem(id) {
        dispatch(delTodos(id));
    }

    function handleEditItem(id, isDone) {
        dispatch(editTodos({ id, isDone }));
    }

    return (
        <div className="w-[50vw] m-auto">
            <div className="flex flex-col items-center">
                {/* form */}
                <form
                    className="flex flex-col gap-[20px] w-full bg-[#d9d9d9] p-[20px] rounded"
                    onSubmit={onSubmit}
                >
                    <h3 className="text-[30px]">FORM</h3>
                    <div>
                        <strong>제목</strong>
                        <input
                            autoFocus
                            className="border-b border-black w-full h-[30px] px-[5px] py-[10px] rounded"
                            ref={title_ref}
                        />
                    </div>
                    <div>
                        <strong>내용</strong>
                        <input
                            className="border-b border-black w-full h-[30px] px-[5px] py-[10px] rounded"
                            ref={body_ref}
                        />
                    </div>
                    <button
                        className="bg-black rounded text-white py-[5px] px-[10px] mt-[20px]"
                        onClick={onSubmit}
                    >
                        입력
                    </button>
                </form>
                {/* todolist */}
                <div className="w-full mt-[50px]">
                    <h3 className="text-[30px]">WORKING</h3>
                    <ul className="grid grid-cols-2 mb-[30px] gap-[10px] min-h-[100px]">
                        {working_list.map((d) => {
                            return (
                                <div
                                    className="border bg-[#dfd] py-[10px] px-[20px] rounded cursor-pointer"
                                    key={`${d.id}`}
                                    onClick={() => navigate(`/detail/${d.id}`)}
                                >
                                    <strong className="text-[20px]">
                                        {d.title}
                                    </strong>
                                    <p className="mb-[10px]">{d.body}</p>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelItem(d.id);
                                        }}
                                        className="bg-black py-[5px] px-[10px] text-white mr-[5px]"
                                    >
                                        삭제
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleEditItem(d.id, d.isDone);
                                        }}
                                        className="bg-black py-[5px] px-[10px] text-white"
                                    >
                                        완료
                                    </button>
                                </div>
                            );
                        })}
                    </ul>
                    <h3 className="text-[30px]">DONE</h3>
                    <ul className="grid grid-cols-2 gap-[10px] min-h-[100px]">
                        {done_list.map((d) => {
                            return (
                                <div
                                    key={`${d.id}`}
                                    className="border bg-[#dfd] py-[10px] px-[20px] rounded cursor-pointer"
                                    onClick={() => navigate(`/detail/${d.id}`)}
                                >
                                    <strong className="text-[20px]">
                                        {d.title}
                                    </strong>
                                    <p className="mb-[10px]">{d.body}</p>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelItem(d.id);
                                        }}
                                        className="bg-black py-[5px] px-[10px] text-white mr-[5px]"
                                    >
                                        삭제
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleEditItem(d.id, d.isDone);
                                        }}
                                        className="bg-black py-[5px] px-[10px] text-white"
                                    >
                                        취소
                                    </button>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
