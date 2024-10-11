
import MessageBox from "@/components/MessageBox";

export default function Home() {
  const MOCK_MESSAGE_LIST = [
      {name: "000", message: "안녕하세요0"},
      {name: "001", message: "안녕하세요1"},
      {name: "002", message: "안녕하세요2"},
      {name: "003", message: "안녕하세요3"},
      {name: "004", message: "안녕하세요4"},
      {name: "005", message: "안녕하세요5"},
      {name: "006", message: "안녕하세요6"},
      {name: "007", message: "안녕하세요7"},
      {name: "008", message: "안녕하세요8"},
    ];

    return (
    <div className="bg-[#FFDDE3] w-full h-[100vh]">
        <div className="flex flex-col text-center">
          <h1 className="font-['Changwon'] text-5xl pt-6 pb-3">연말 편지 우체통</h1>
          <div className="font-['Hakyo'] py-3">
            <p className="py-3">💌 000님의 연말 편지 우체통으로 00건의 편지가 도착했어요!</p>
            <button className="bg-[#B61111] text-white px-20 py-2 rounded-md">편지 쓰러 가기</button>
        </div>
        <div className="grid grid-cols-4">
          {MOCK_MESSAGE_LIST.map((e, idx) => (
          <MessageBox key={idx} name={e.name} message={e.message} /> ))}
        </div>
      </div>
    </div>
  );
};
