import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Header from "./Header";
import Home from "./Home";
import Todo from "./Todo";

export default function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/list" element={<Todo />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
}
