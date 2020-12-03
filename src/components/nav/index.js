import { useState, useRef, useEffect } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import Link from 'next/link';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  const handleOpenClose = (e) => {
    if (isOpen) {
      clearAllBodyScrollLocks();
      setIsOpen(false);
    } else {
      disableBodyScroll(navRef.current);
      setIsOpen(true);
    }
  };

  useEffect(() => {
    clearAllBodyScrollLocks();
    setIsOpen(false);
  }, []);

  return (
    <nav
      ref={navRef}
      className='bg-white dark:bg-gray-800 shadow-md py-3 px-3 md:px-10 block md:flex justify-between'
    >
      <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-3'>
          <h5 className='text-3xl font-extrabold text-black dark:text-white'>
            <Link href='/'>
              <a>manuels.dev</a>
            </Link>
          </h5>
        </div>
        <div>
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={handleOpenClose}
            width={30}
            height={20}
            strokeWidth={4}
            rotate={0}
            color='#3F3F46'
            borderRadius={10}
            animationDuration={0.2}
            className='block md:hidden'
          />
        </div>
      </div>
      <ul
        className={`nav w-full ${
          isOpen ? 'flex navOpen' : 'hidden'
        } md:flex flex-col md:w-auto md:flex-row md:space-x-3 space-y-8 md:space-y-0 text-4xl uppercase md:normal-case md:text-base justify-center items-center text-blue-500`}
      >
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/work'>
            <a>Work</a>
          </Link>
        </li>
        <li>
          <Link href='/uses'>
            <a>Uses</a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
