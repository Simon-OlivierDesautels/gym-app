import type { AppProps } from "next/app";
import "../css/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="page-container">
      <Component {...pageProps}  />
    </div>
  );
}

export default MyApp;
