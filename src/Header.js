import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="h-[50px] border-b mb-[20px] flex justify-center items-center gap-[20px]">
            <Link to="/">HOME</Link>
            <Link to="/list">TODOLIST</Link>
        </div>
    );
}
