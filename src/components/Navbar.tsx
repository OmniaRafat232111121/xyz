import { useState, useEffect } from "react";
import logo from '../assets/logo.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'Features', path: 'feature' },
    { link: 'About', path: 'about' },
    { link: 'Pricing', path: 'pricing' },
    { link: 'Testimonials', path: 'testimonials' },
    { link: 'FAQ', path: 'faq' },
  ];

  const [isMenuSticky, setIsMenuSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsMenuSticky(true);
      } else {
        setIsMenuSticky(false);
      }
    };

    // Add the event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener in the cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Add an empty dependency array to run this effect only once

  return (
    <header className="bg-white md:bg-transparent
     w-full fixed top-0 left-0 right-0">
      <nav className={`py-4 lg:px-14 px-4 ${isMenuSticky ? 'sticky top-0 left-0 right-0 border-b duration-400 bg-white ' : 'bg-white'}`}>
        <div className="flex space-x-14 2xl:items-center items-start sm:justify-between text-base gap-8">
          {/* Logo */}
          <a className="text-2xl font-semibold flex items-center space-x-4">
            <img src={logo} alt="logo" className="inline-flex align-center gap-0.5rem w-10" />
            <span className="text-[#263238]">XYZ</span>
          </a>

          {/* Navigation Items for Large Devices */}
          <ul className="md:flex lg:items-start lg:justify-start space-x-12 hidden 2xl:ml-[-607px]">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.path} offset={-100} className="block text-base hover:text-[#9A7AF1] text-[#010851] first:font-medium">
                  {item.link}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Button and Sign Up Button for Large Devices */}
          <div className="md:flex items-center 
          2xl:items-end space-x-12 hidden">
            <a className="text-[#010851] text-[1.25rem] text-center hover:text-gray-900 cursor-pointer font-semibold">
              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none" className="inline-block mr-2">
                <path d="M11.4904 1.91663C6.20044 1.91663 1.91669 6.20996 1.91669 11.5C1.91669 16.79 6.20044 21.0833 11.4904 21.0833C16.79 21.0833 21.0834 16.79 21.0834 11.5C21.0834 6.20996 16.79 1.91663 11.4904 1.91663ZM18.1317 7.66663H15.3046C15.0047 6.47969 14.5605 5.33394 13.9821 4.25496C15.7302 4.85679 17.2032 6.06786 18.1317 7.66663ZM11.5 3.87163C12.2954 5.02163 12.9184 6.29621 13.3304 7.66663H9.6696C10.0817 6.29621 10.7046 5.02163 11.5 3.87163ZM4.08252 13.4166C3.92919 12.8033 3.83335 12.1612 3.83335 11.5C3.83335 10.8387 3.92919 10.1966 4.08252 9.58329H7.32169C7.24502 10.2158 7.18752 10.8483 7.18752 11.5C7.18752 12.1516 7.24502 12.7841 7.32169 13.4166H4.08252ZM4.86835 15.3333H7.69544C8.0021 16.5312 8.44294 17.6812 9.01794 18.745C7.26799 18.1464 5.79394 16.9345 4.86835 15.3333ZM7.69544 7.66663H4.86835C5.79394 6.06542 7.26799 4.8535 9.01794 4.25496C8.43951 5.33394 7.99537 6.47969 7.69544 7.66663ZM11.5 19.1283C10.7046 17.9783 10.0817 16.7037 9.6696 15.3333H13.3304C12.9184 16.7037 12.2954 17.9783 11.5 19.1283ZM13.7425 13.4166H9.25752C9.17127 12.7841 9.10419 12.1516 9.10419 11.5C9.10419 10.8483 9.17127 10.2062 9.25752 9.58329H13.7425C13.8288 10.2062 13.8959 10.8483 13.8959 11.5C13.8959 12.1516 13.8288 12.7841 13.7425 13.4166ZM13.9821 18.745C14.5571 17.6812 14.9979 16.5312 15.3046 15.3333H18.1317C17.2032 16.9321 15.7302 18.1431 13.9821 18.745ZM15.6784 13.4166C15.755 12.7841 15.8125 12.1516 15.8125 11.5C15.8125 10.8483 15.755 10.2158 15.6784 9.58329H18.9175C19.0709 10.1966 19.1667 10.8387 19.1667 11.5C19.1667 12.1612 19.0709 12.8033 18.9175 13.4166H15.6784Z" fill="#010851" />
              </svg>
              Language
            </a>
            <button className="py-2 px-4 bg-[#9A7AF1] text-[#010851] transition-all duration-300 hover:bg-naturalGray cursor-pointer font-semibold">Sign up</button>
          </div>

          {/* Menu Button for Mobile Devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none focus:text-gray-600 text-naturalGray"
            >
              {isMenuOpen ? (<AiOutlineClose className='h-6 w-6' />) : (<AiOutlineMenu className="h-6 w-6" />)}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`bg-[#9A7AF1] mt-16 py-7 px-4 space-y-4 ${isMenuOpen ? 'block fixed top-0 left-0 right-0' : 'hidden'}`}>
          {navItems.map((item, index) => (
            <a key={index} href={item.path} offset={-100} className="block text-base text-[#010851] hover:text-green first:font-medium">
              {item.link}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
