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
import { useState } from "react";
import axios from "axios";
const LetterForm = ({ setUserName }) => {
    const [showForm, setShowForm] = useState(true);
    const [toName, setToName] = useState("");
    const [fromName, setFromName] = useState("");
    const [message, setMessage] = useState("");
    const handleLetterSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const data = {
            toName,
            fromName,
            message,
            type: "",
        };
        try {
            const response = yield axios.post(`http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080/messages`, data);
            console.log("POST SUCCESS\n", data);
            setUserName(fromName); // 입력된 fromName을 userName으로 설정
            setShowForm(false);
        }
        catch (error) {
            console.error("Error sending letter:", error);
            alert("편지 보내기에 실패했습니다.");
        }
    });
    return (_jsx(_Fragment, { children: showForm && (_jsxs("div", { className: "w-full max-w-[800px] rounded-md border-4 border-[#C00000] m-6 bg-white flex flex-col items-center p-6", children: [_jsxs("div", { className: "w-full max-w-[500px]", children: [_jsx("p", { className: "text-black font-['Changwon'] mb-2 text-xl", children: "\uBC1B\uB294 \uC0AC\uB78C" }), _jsx("input", { type: "text", value: toName, onChange: (e) => setToName(e.target.value), className: "w-full border p-4 mb-4 rounded-md font-['Hakyo']", placeholder: "\uBC1B\uB294 \uC0AC\uB78C\uC744 \uC785\uB825\uD558\uC138\uC694" })] }), _jsxs("div", { className: "w-full max-w-[500px]", children: [_jsx("p", { className: "text-black font-['Changwon'] mb-2 text-xl", children: "\uBCF4\uB0B4\uB294 \uC0AC\uB78C" }), _jsx("input", { type: "text", value: fromName, onChange: (e) => setFromName(e.target.value), className: "w-full border p-4 mb-4 rounded-md font-['Hakyo']", placeholder: "\uBCF4\uB0B4\uB294 \uC0AC\uB78C\uC744 \uC785\uB825\uD558\uC138\uC694" })] }), _jsxs("div", { className: "w-full max-w-[500px]", children: [_jsx("p", { className: "text-black font-['Changwon'] mb-2 text-xl", children: "\uD3B8\uC9C0 \uB0B4\uC6A9" }), _jsx("textarea", { value: message, onChange: (e) => setMessage(e.target.value), className: "w-full h-[200px] border-2 p-4 mb-4 rounded-md text-black font-['Hakyo']", placeholder: "\uD3B8\uC9C0\uB97C \uC791\uC131\uD558\uC138\uC694" })] }), _jsx("button", { className: "bg-[#C00000] text-white rounded-md px-8 py-2 mt-4 font-['Hakyo']", onClick: handleLetterSubmit, children: "\uD3B8\uC9C0 \uBCF4\uB0B4\uAE30" })] })) }));
};
export default LetterForm;
