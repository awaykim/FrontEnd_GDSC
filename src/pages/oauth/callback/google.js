import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const GoogleCallback = () => {
    const router = useRouter();
    const { code } = router.query;

    useEffect(() => {
        if (code) {
            const fetchUserInfo = async () => {
                try {
                    const response = await axios.get(
                        `http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080/oauth/callback?code=${code}&provider=google`
                    );
                    const { access_token, name } = response.data;

                    localStorage.setItem("access_token", access_token);
                    alert(`Welcome, ${name}!`);

                    router.push("/");
                } catch (error) {
                    console.error("Error fetching access token:", error);
                    alert("로그인에 실패했습니다.");
                }
            };

            fetchUserInfo();
        }
    }, [code, router]);

    return <div>Google 로그인 중...</div>;
};

export default GoogleCallback;
