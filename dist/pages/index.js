var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import axios from "axios";
import MessageBox from "@/components/MessageBox";
import LetterForm from "@/components/LetterForm";
const Home = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [messages, setMessages] = useState([]);
    const [userName, setUserName] = useState("");
    useEffect(() => {
        const fetchMessages = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield axios.get(`http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080/messages?name=${userName}`);
                setMessages(response.data);
            }
            catch (error) {
                console.error("Error fetching messages:", error);
            }
        });
        fetchMessages();
    }, [userName]);
    const handleButtonClick = () => {
        setIsFormVisible(true);
    };
    return (_jsx(_Fragment, { children: _jsx("div", { className: "bg-[#FFDDE3] min-h-screen", children: _jsxs("div", { className: "flex flex-col items-center text-center", children: [_jsx("h1", { className: "font-['Changwon'] text-5xl pt-6 pb-3 m-5", children: "\uC5F0\uB9D0 \uD3B8\uC9C0 \uC6B0\uCCB4\uD1B5" }), _jsxs("div", { className: "font-['Hakyo'] py-3", children: [_jsxs("p", { className: "py-3", children: ["\uD83D\uDC8C ", userName, "\uB2D8\uC758 \uC5F0\uB9D0 \uD3B8\uC9C0 \uC6B0\uCCB4\uD1B5\uC73C\uB85C", " ", messages.length, "\uAC74\uC758 \uD3B8\uC9C0\uAC00 \uB3C4\uCC29\uD588\uC5B4\uC694!"] }), _jsx("button", { onClick: handleButtonClick, className: "bg-[#B61111] text-white px-20 py-2 rounded-md", children: "\uD3B8\uC9C0 \uC4F0\uB7EC \uAC00\uAE30" })] }), isFormVisible && _jsx(LetterForm, { setUserName: setUserName }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 p-3", children: messages.map((e, idx) => (_jsx(MessageBox, { name: e.fromName, message: e.message }, idx))) })] }) }) }));
};
export default Home;
