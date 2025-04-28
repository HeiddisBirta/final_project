import { useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { motion } from 'framer-motion';

const AppHeader = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [activeTheme, setTheme] = useThemeSwitcher();

	function toggleMenu() {
		setShowMenu((prev) => !prev);
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className="sm:container sm:mx-auto px-4 sm:px-8 py-6"
		>
			<div className="z-10 max-w-screen-lg xl:max-w-screen-xl flex justify-between sm:justify-start xl:justify-center items-center text-primary-dark dark:text-ternary-light">
				{/* Header links container */}
				<div className="flex items-center space-x-8">
					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							{showMenu ? <FiX className="text-3xl" /> : <FiMenu className="text-3xl" />}
						</button>
					</div>

					{/* Header links small screen */}

					<div className={`${showMenu ? 'block' : 'hidden'} sm:flex justify-between`}>
            <Link to="/" className="block text-left text-lg text-primary-dark dark:text-ternary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
							LOGO
						</Link>

						<Link to="/about"    className="block text-left text-lg text-primary-dark dark:text-ternary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
							About Me
						</Link>
						<Link to="/contact" className="block text-left text-lg text-primary-dark dark:text-ternary-light sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
							Contact
						</Link>

					</div>
				</div>

				{/* Theme Switcher */}
				<div
					onClick={() => setTheme(activeTheme)}
					aria-label="Theme Switcher"
					className="bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer"
				>
					{activeTheme === 'dark' ? (
						<FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
					) : (
						<FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
					)}
				</div>
			</div>
		</motion.nav>
	);
};

export default AppHeader;
