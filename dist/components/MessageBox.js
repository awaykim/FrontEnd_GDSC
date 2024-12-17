import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const MessageBox = ({ name, message }) => {
    return (_jsx("div", { className: "w-[200px] h-[200px] border-4 border-[#C00000] rounded-md m-3 bg-white", children: _jsxs("div", { className: "py-3 font-['Hakyo']", children: [_jsxs("p", { className: "py-2", children: ["From. ", name] }), _jsx("p", { children: message })] }) }));
};
export default MessageBox;
