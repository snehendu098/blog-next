import Header from "../components/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="text-white bg-slate-900 min-h-[100vh]">
      <Header />
      <div className="p-2">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
