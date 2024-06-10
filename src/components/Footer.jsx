export default function Footer() {
    return (
        <footer className="bg-black dark:bg-white  dark:text-black text-white p-6 w-full flex flex-row justify-between items-center align-middle mx-auto">
            <div className="logo">
                <h1 className="font-bold leading-5 text-[24px] capitalize">Personal</h1>
            </div>
            <div className="about  flex flex-col gap-3 items-center">
                <p className="font-semibold leading-4 text-right">@ 2019-2023 Personal</p>
                <p className="font-semibold leading-4 text-right">Made In Figma</p>
            </div>
        </footer>
    );
}
