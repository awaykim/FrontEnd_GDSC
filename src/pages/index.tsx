import { useState, useEffect } from "react";
import axios from "axios";
import MessageBox from "@/components/MessageBox";
import LetterForm from "@/components/LetterForm";
import Cookies from "js-cookie";

interface Message {
    toName: string;
    fromName: string;
    message: string;
}

const Home = () => {
    const [isFormVisible, setIsFormVisible] = useState<boolean>(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [userName, setUserName] = useState<string>("");

    useEffect(() => {
        const name = Cookies.get("name"); 
        if (name) {
            setUserName(name); 
        }
    }, []);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get<Message[]>(
                    `http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080/messages?name=${userName}`
                );
                setMessages(response.data);
                console.log(messages[0]);
            } catch (error) {
                console.error("Error fetching messages:", error);
            }
        };

        fetchMessages();
    }, [userName]);

    const handleButtonClick = () => {
        setIsFormVisible(true);
    };

    return (
        <>
            <div className="bg-[#FFDDE3] min-h-screen">
                <div className="flex flex-col items-center text-center">
                    <h1 className="font-['Changwon'] text-5xl pt-6 pb-3 m-5">
                        연말 편지 우체통
                    </h1>
                    <div className="font-['Hakyo'] py-3">
                        <p className="py-3">
                            💌 {userName}님의 연말 편지 우체통으로{" "}
                            {messages.length}
                            건의 편지가 도착했어요!
                        </p>
                        <button
                            onClick={handleButtonClick}
                            className="bg-[#B61111] text-white px-20 py-2 rounded-md"
                        >
                            편지 쓰러 가기
                        </button>
                    </div>
                    {isFormVisible && <LetterForm setUserName={setUserName} />}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 p-3">
                        {messages.map((e, idx) => (
                            <MessageBox
                                key={idx}
                                name={e.fromName}
                                message={e.message}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
