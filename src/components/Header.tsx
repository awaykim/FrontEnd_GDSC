import Image from "next/image";

const Header = () => {
    const handleGoogleLogin = () => {
        const googleAuthUrl = "https://accounts.google.com/o/oauth2/v2/auth";
        const clientId =
            "526903298668-in7ec446ogrb9ji9u5vendfcb433dp5d.apps.googleusercontent.com";
        const redirectUri = "http://localhost:3000/oauth/callback/google";
        const scope = "email profile";
        const responseType = "code";

        const authUrl = `${googleAuthUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;
        window.location.href = authUrl;
    };

    return (
        <div className="bg-[#A60606] w-full h-[50px] flex items-center justify-between px-7">
            <p className="text-white font-['Changwon']">💌 연말 편지 우체통</p>
            <button
                onClick={handleGoogleLogin} 
                className="bg-white rounded-md px-3 py-1 flex items-center"
            >
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
