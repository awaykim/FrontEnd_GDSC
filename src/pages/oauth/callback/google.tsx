import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const GoogleCallback = () => {
    const router = useRouter();
    
    useEffect(() => {
        console.log("Router Query:", router.query);
        const { code } = router.query;
        if (code) {
            const fetchUserInfo = async () => {
                try {
                    const response = await axios.get(
                        `http://ec2-3-38-49-253.ap-northeast-2.compute.amazonaws.com:8080/oauth/callback?code=${code}&provider=google`
                    );
                    const { access_token, name } = response.data;
                    console.log("로그인 완료", access_token, name);
                    document.cookie = `access_token=${access_token}; path=/`;

                    localStorage.setItem("access_token", access_token);

                    router.push("/");
                } catch (error) {
                    console.error("Error fetching access token:", error);
                }
            };

            fetchUserInfo();
        }
    }, [router]);

    return <div>Google 로그인 중...</div>;
};

export default GoogleCallback;
