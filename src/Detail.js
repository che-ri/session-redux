import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail() {
    const params = useParams();
    const params_id = params.id;
    const navigate = useNavigate();

    const list = useSelector((state) => state.todos.list);

    const data =
        list.find((d) => {
            return d.id == params_id;
        }) || {};

    const { id = "", title = "", body = "" } = data;

    return (
        <div className="flex justify-center items-center h-[100vh] w-full">
            <div className="flex flex-col justify-center w-[50%] border border-black rounded py-[20px] px-[40px]">
                <p className="text-[20px]">id: {id}</p>
                <p className="text-[20px]">title: {title}</p>
                <p className="text-[20px]">body: {body}</p>
                <button
                    onClick={() => navigate("/list")}
                    className="bg-black py-[5px] px-[10px] text-white mt-[20px] rounded"
                >
                    이전
                </button>
            </div>
        </div>
    );
}
