import "../app/globals.css";
import Navbar from "../components/Navbar";
import ThemeProvider from "../components/ThemeProvider";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Navbar />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

