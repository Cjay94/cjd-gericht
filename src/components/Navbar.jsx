import { useState } from 'react';
import { images, data } from '../constants'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <nav className="w-full flex justify-between items-center bg-black p-4">
            <div className="flex justify-start items-center">
                <img src={images.gericht} alt="logo" className='w-28 md:w-40 xl:w-52' />
            </div>
            {/* desktop menu */}
            <ul className="hidden lg:flex flex-1 justify-center items-center">
                {data.navLinks.map((link, idx) => (
                    <li key={idx} className='p__opensans my-0 mx-4 cursor-pointer hover:text-cgolden transition duration-500'>
                        <a href={link.href}>
                            {link.title}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="hidden md:flex justify-end items-center">
                <a href="#login" className="p__opensans my-0 mx-4 transition duration-500 
                hover:border-b hover:border-cgolden">
                    Log In / Registration
                </a>

                <div className='w-px h-8 bg-cgrey' />

                <a href="/" className="p__opensans my-0 mx-4 transition duration-500
                hover:border-b hover:border-cgolden">
                    Book Table
                </a>
            </div>

            {/* mobile menu */}
            <div className="lg:hidden">
                <GiHamburgerMenu color='#fff' fontSize={30} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="flex justify-center items-center animate-slide-bottom
                    fixed top-0 left-0 w-full h-screen bg-cblack opacity-95 transition duration-500
                    flex-col z-50"
                    >
                        <MdOutlineRestaurantMenu fontSize={30} className='text-3xl text-cgolden cursor-pointer absolute top-5 right-5' onClick={() => setToggleMenu(false)} />
                        <ul>
                            {data.navLinks.map((link, idx) => (
                                <li key={idx} className='m-8 cursor-pointer text-cgolden font-cormorant text-center text-2xl hover:text-ccrimson transition duration-500'>
                                    <a href={link.href} onClick={() => setToggleMenu(false)}>
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar

