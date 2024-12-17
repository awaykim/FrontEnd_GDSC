import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Image from "next/image";
const Header = () => {
    return (_jsxs("div", { className: "bg-[#A60606] w-full h-[50px] flex items-center justify-between px-7", children: [_jsx("p", { className: "text-white font-['Changwon']", children: "\uD83D\uDC8C \uC5F0\uB9D0 \uD3B8\uC9C0 \uC6B0\uCCB4\uD1B5" }), _jsxs("button", { className: "bg-white rounded-md px-3 py-1 flex items-center", children: [_jsx(Image, { src: "/images/image.png", alt: "google logo", width: 20, height: 20, className: "" }), _jsx("p", { className: "pl-1 text-sm font-['Hakyo']", children: "Google \uB85C\uADF8\uC778\uD558\uACE0 \uC4F0\uAE30" })] })] }));
};
export default Header;
