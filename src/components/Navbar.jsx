import { useState } from "react";
import Hamburger from "hamburger-react";

export default function Navbar() {
    const [Mobile, setMobile] = useState(false);

    function Handle() {
        if (Mobile) {
            setMobile(!Mobile);
        } else {
            setMobile(!Mobile);
        }
    }

    function DownloadIcon() {
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.5 12.5V13.5C17.5 14.9001 17.5 15.6002 17.2275 16.135C16.9878 16.6054 16.6054 16.9878 16.135 17.2275C15.6002 17.5 14.9001 17.5 13.5 17.5H6.5C5.09987 17.5 4.3998 17.5 3.86502 17.2275C3.39462 16.9878 3.01217 16.6054 2.77248 16.135C2.5 15.6002 2.5 14.9001 2.5 13.5V12.5M14.1667 8.33333L10 12.5M10 12.5L5.83333 8.33333M10 12.5V2.5"
                    stroke="blue"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        );
    }

    function Hambunger() {
        return (
            <>
                <div className="animated w-full max-h-full max-w-full h-full my-16">
                    <div className="fixed    z-10

                        bg-black

                    backdrop-blur-3xl  left-0 top-4 w-full h-full backdrop-grayscale flex items-center justify-center flex-col gap-4  ">
                        <ul className="flex flex-col  justify-center items-center sm:gap-3 gap-8">
                            {[
                                {
                                    title: "About Me",
                                    block: "about",
                                },
                                {
                                    title: "skills",
                                    block: "skills",
                                },
                                {
                                    title: "project",
                                    block: "listprojects",
                                },
                                {
                                    title: "Contact Me",
                                    block: "contact",
                                },
                            ].map((item) => {
                                return (
                                    <li key={Math.random()}>
                                        <a
                                            className="font-semibold text-[16px] capitalize leading-3 "
                                            href={item.block}
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                        <button
                            className="flex  flex-row gap-1 items-center align-middle rounded py-4 px-5

                            dark:bg-white
                            dark:text-black
                            bg-black
                            text-white


                        "
                        >
                            <span className=" font-semibold leading-5 text-[20px] ">Resume</span>{" "}
                            <DownloadIcon />
                        </button>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <nav className="z-50 container py-4 flex flex-row items-center align-middle justify-between gap-4 ">
                <div className="logo">
                    <h1 className="font-bold leading-5 text-[24px] capitalize">Personal</h1>
                </div>
                <ul className="sm:flex hidden flex-row items-center sm:gap-3 gap-8">
                    {[
                        {
                            title: "About Me",
                            block: "about",
                        },
                        {
                            title: "skills",
                            block: "skills",
                        },
                        {
                            title: "project",
                            block: "listprojects",
                        },
                        {
                            title: "Contact Me",
                            block: "contact",
                        },
                    ].map((item) => {
                        return (
                            <li key={Math.random()}>
                                <a className="font-semibold text-[20px] capitalize leading-3 " href={item.block}>
                                    {item.title}
                                </a>
                            </li>
                        );
                    })}
                </ul>
                <button
                    className="sm:flex hidden  flex-row gap-1 items-center align-middle rounded py-4 px-5                       dark:bg-white
                            dark:text-black
                            bg-black
                            text-white"
                >
                    <span className=" font-semibold leading-5 text-[20px] ">Resume</span>{" "}
                    <DownloadIcon />
                </button>
                <section className="sm:hidden flex">
                    <Hamburger toggled={Mobile} toggle={Handle} size={18} />
                </section>
            </nav>

            {Mobile && <Hambunger />}
        </>
    );
}
