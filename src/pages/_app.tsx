import Header from "@/components/Header";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import { createContext, useContext, useState } from "react";

export const userContext = createContext({
  name: "",
  setName: (name: string) => {},
});

export default function App({ Component, pageProps }: AppProps) {

  const [name, setName] = useState("");

  return (
    <userContext.Provider value={{ name, setName }}>
          <>
              {/* App 파일에 컴포넌트 넣으면 모든 페이지에 자동으로 배치됨*/}
              <Header />
              <Component {...pageProps} />
          </>
      </userContext.Provider>
  );
}

export const useUserName = () => useContext(userContext);