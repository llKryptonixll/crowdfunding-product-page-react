const Navbar = ({ openClose_MobileMenu, menuIsOpen }) => {
    return (
        <header className="md:bg-[url('/assets/images/image-hero-desktop.jpg')] bg-[url('/assets/images/image-hero-mobile.jpg')] bg-contain bg-top bg-fixed bg-no-repeat h-[400px]">
            <nav className='z-50 relative flex justify-between lg:pl-32 sm:pl-14 pl-6 lg:pr-32 sm:pr-14 pr-6 pt-10 items-center'>
                <img src="assets/images/logo.svg" alt="company-logo" />
                <ul className='text-white space-x-12 hidden sm:flex'>
                    <li>
                        <a href="https://cerri-webdev.com">About</a>
                    </li>
                    <li>
                        <a href="https://cerri-webdev.com">Discover</a>
                    </li>
                    <li>
                        <a href="https://cerri-webdev.com">Get Started</a>
                    </li>
                </ul>
                <button onClick={openClose_MobileMenu} aria-label='open-close-mobile-menu-button' className='sm:hidden block'>
                    {menuIsOpen === true ?
                        <img src="assets/icons/icon-close-menu.svg" alt="open-mobile-menu-icon" /> :
                        <img src="assets/icons/icon-hamburger.svg" alt="open-mobile-menu-icon" />
                    }
                </button>
            </nav>
        </header>
    )
}

export default Navbar