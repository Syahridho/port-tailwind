import { useState } from 'react';

const Link = ({href, text}) => {
    return (
        <li className='group '>
            <a href={href} className='text-base font-medium text-primary py-2 mx-8 flex group-hover:text-white'>{text}</a>
        </li>
    )
}


const Header = () => {
    const urlHome = "#home";

    //Toggle
    const [btnState, setBtnState] = useState(false);
    const [navbar, setNavbar] = useState(false);

    function handleClick() {
        setBtnState(btnState => !btnState);
    }
    let hamburgerActive = btnState ? 'hamburger-active' : '';
    let navDekstop = btnState ? '' : 'hidden';
    
    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    let navbarScroll = navbar ? 'navbar-active' : '';

        return (
            <header className={`${navbarScroll} bg-trasparent absolute top-0 left-0 w-full flex items-center z-20 sticky`}>
                <div className="container lg:px-20">
                    <div className="flex items-center justify-between relative">
                        <div className="px-4">
                            <a href={urlHome} className="font-bold text-lg text-primary block py-6 w-full">AdolfHitler</a>
                        </div>
                        <div className="flex items-center px-4">
                            <button id="hamburger" onClick={handleClick} name="hamburger" type="button" className={`block absolute right-4 ${hamburgerActive} lg:hidden`}>
                                <span className="hamburger-line transition origin-top-left duration-300 ease-in-out"></span>
                                <span className="hamburger-line transition duration-300 ease-in-out"></span>
                                <span className="hamburger-line origin-bottom-left transition duration-300 ease-in-out"></span>  
                            </button>
                        </div>
                        <nav id="nav-menu" className={`${navDekstop} absolute py-5 bg-dark shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none`}>
                            <ul className='block lg:flex lg:justify-end'>
                                <Link href={'#home'} text={"Beranda"}/>
                                <Link href={'#about'} text={"Tentang"}/>
                                <Link href={'#portfolio'} text={"Portofolio"}/>
                                <Link href={'#client'} text={"Klien"}/>
                                <Link href={'#blog'} text={"Blog"}/>
                                <Link href={'#contact'} text={"Hubungi"}/>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
    )
}

export default Header;