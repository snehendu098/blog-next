import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-[100vh] max-w-[100vw]">
      <Header />
      <div className="p-2">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
