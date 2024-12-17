import { useState } from "react";
import axios from "axios";

const LetterForm = ({ setUserName }) => {
    const [showForm, setShowForm] = useState(true);
    const [toName, setToName] = useState("");
    const [fromName, setFromName] = useState(""); 
    const [message, setMessage] = useState("");

    const handleLetterSubmit = async (e) => {
        e.preventDefault();
        const data = {
            toName,
            fromName,
            message,
            type: "",
        };

        try {
            const response = await axios.post(
                `http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080/messages`,
                data
            );
            console.log("POST SUCCESS\n", data);

            setUserName(fromName); // 입력된 fromName을 userName으로 설정
            setShowForm(false);
        } catch (error) {
            console.error("Error sending letter:", error);
            alert("편지 보내기에 실패했습니다.");
        }
    };

    return (
        <>
            {showForm && (
                <div className="w-full max-w-[800px] rounded-md border-4 border-[#C00000] m-6 bg-white flex flex-col items-center p-6">
                    <div className="w-full max-w-[500px]">
                        <p className="text-black font-['Changwon'] mb-2 text-xl">
                            받는 사람
                        </p>
                        <input
                            type="text"
                            value={toName}
                            onChange={(e) => setToName(e.target.value)}
                            className="w-full border p-4 mb-4 rounded-md font-['Hakyo']"
                            placeholder="받는 사람을 입력하세요"
                        />
                    </div>

                    <div className="w-full max-w-[500px]">
                        <p className="text-black font-['Changwon'] mb-2 text-xl">
                            보내는 사람
                        </p>
                        <input
                            type="text"
                            value={fromName}
                            onChange={(e) => setFromName(e.target.value)}
                            className="w-full border p-4 mb-4 rounded-md font-['Hakyo']"
                            placeholder="보내는 사람을 입력하세요"
                        />
                    </div>

                    <div className="w-full max-w-[500px]">
                        <p className="text-black font-['Changwon'] mb-2 text-xl">
                            편지 내용
                        </p>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full h-[200px] border-2 p-4 mb-4 rounded-md text-black font-['Hakyo']"
                            placeholder="편지를 작성하세요"
                        />
                    </div>

                    <button
                        className="bg-[#C00000] text-white rounded-md px-8 py-2 mt-4 font-['Hakyo']"
                        onClick={handleLetterSubmit}
                    >
                        편지 보내기
                    </button>
                </div>
            )}
        </>
    );
};

export default LetterForm;
