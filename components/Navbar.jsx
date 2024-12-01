export default function Navbar() {
    return (
        <header className="bg-[#21222A] px-8">
            <nav className="h-20 flex items-center gap-2">
                <img src="images/react-logo.png" alt="React Logo" className="w-[29px]" />
                <span className="font-inter font-bold text-[22px] text-sky-blue align-bottom">ReactFacts</span>
            </nav>
        </header>
    )
}