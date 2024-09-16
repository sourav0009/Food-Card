import { useState } from 'react';

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';  // Prevent background scrolling
        } else {
            document.body.style.overflow = '';  // Reset when menu closes
        }
    };

    return (
        <nav className="bg-black md:bg-white border-gray-200 dark:bg-gray-900 fixed justify-center item w-full top-0 z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo Section */}
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img className=" h-[40px] w-[40px]" src="logo.png" alt="Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">CARD</span>
                </a>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4.5 6.75h15m-15 5.25h15m-15 5.25h15"} />
                    </svg>
                </button>

                {/* Links Section */}
                <div className={`${isOpen ? 'block' : 'hidden'} absolute  left-28 w-full md:static md:w-auto md:flex md:bg-white md:dark:bg-gray-900 flex items-center justify-center top-10`}>
                    <ul className=" md:flex md:justify-center md:items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 px-3 md:p-0 dark:text-white text-black md:text-blue-700  md:bg-transparent md:dark:text-blue-500" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="block py-2 px-3 md:p-0 text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:text-white">About</a>
                        </li>
                        <li>
                            <a href="/contact" className="block py-2 px-3 md:p-0 text-gray-900 rounded md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:text-white">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navber;
