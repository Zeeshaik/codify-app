import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function App({ Component, pageProps }: AppProps) {
  return (
    
      <RecoilRoot>
        <Head>
          <title>CodeFun</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo-full1.png" />
          <meta
            name="description"
            content="Web application that contains way to learn coding in gamified way"
          />
        </Head>
        <ToastContainer />
        <Component {...pageProps} />
      </RecoilRoot>
    
  );
}
