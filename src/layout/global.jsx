import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CreateLayout({ children }) {
    return (
        <>
            <div className="dark:bg-black  dark:text-white flex flex-col items-center justify-between w-full h-full min-h-dvh">
                <Navbar />

                <article>{children}</article>

                <Footer />
            </div>
        </>
    );
}
