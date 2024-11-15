import Image from "next/image";


const Header = () => {
  return (
      <div className="bg-[#A60606] w-full h-[50px] flex items-center justify-between px-7">
          <p className="text-white font-['Changwon']">💌 연말 편지 우체통</p>
          <button className="bg-white rounded-md px-3 py-1 flex items-center">
              <Image
                  src={"/images/image.png"}
                  alt="google logo"
                  width={20}
                  height={20}
                  className=""
              />
              <p className="pl-1 text-sm font-['Hakyo']">
                  Google 로그인하고 쓰기
              </p>
          </button>
      </div>
  );
};

export default Header;
