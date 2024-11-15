const LetterForm = () => {
    return (
        <div className="w-full max-w-[800px] rounded-md border-4 border-[#C00000] m-6 bg-white flex flex-col items-center p-6">
            <div className="w-full max-w-[500px]">
                <p className="text-black font-['Changwon'] mb-2 text-xl">
                    받는 사람
                </p>
                <input
                    type="text"
                    className="w-full border p-4 mb-4 rounded-md font-['Hakyo']"
                    placeholder="받는 사람을 입력하세요"
                />
            </div>

            <div className="w-full max-w-[500px]">
                <p className="text-black font-['Changwon'] mb-2 text-xl">
                    편지 내용
                </p>
                <textarea
                    className="w-full h-[200px] border-2 p-4 mb-4 rounded-md text-black font-['Hakyo']"
                    placeholder="편지를 작성하세요"
                />
            </div>

            <div className="w-full max-w-[500px]">
                <p className="text-black font-['Changwon'] mb-2 text-xl">
                    보내는 사람
                </p>
                <input
                    type="text"
                    className="w-full border p-4 mb-4 rounded-md font-['Hakyo']"
                    placeholder="보내는 사람을 입력하세요"
                />
            </div>

            <button className="bg-[#C00000] text-white rounded-md px-8 py-2 mt-4 font-['Hakyo']">
                편지 보내기
            </button>
        </div>
    );
};

export default LetterForm;
