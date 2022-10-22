import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';

const Navbar = () => {
  const path = useRouter().pathname;
  const [showNav, setShowNav] = useState(false);
  const [scroll, setScroll] = useState(0);

  const toggleNav = () => setShowNav((prev) => !prev);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY);
    });
  }, [scroll]);

  return (
    <>
      <nav className={`nav ${scroll > 50 ? 'bg-gray-900' : 'bg-transparent'}`}>
        <Link href='/' passHref>
          <a className='nav-logo'>Finance-A</a>
        </Link>

        <button
          type='button'
          className={`text-3xl lg:hidden duration-300 z-10 text-white`}
          onClick={toggleNav}
        >
          <CgMenuRightAlt />
        </button>

        <div
          className={`mobile-sidebar ${
            showNav ? 'right-0' : 'lg:right-0 right-[-100%]'
          }`}
        >
          <ul className='nav-links'>
            <li>
              <Link href='/' passHref>
                <a
                  className={path === '/' && 'nav-link-active'}
                  onClick={toggleNav}
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href='/about' passHref>
                <a
                  className={path === '/about' && 'nav-link-active'}
                  onClick={toggleNav}
                >
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href='/services' passHref>
                <a
                  className={path === '/services' && 'nav-link-active'}
                  onClick={toggleNav}
                >
                  Services
                </a>
              </Link>
            </li>
            <li>
              <Link href='/contact' passHref>
                <a
                  className={path === '/contact' && 'nav-link-active'}
                  onClick={toggleNav}
                >
                  Contact
                </a>
              </Link>
            </li>
          </ul>

          <div className='nav-buttons'>
            <Link href='/login' passHref>
              <a className='btn btn-transparent' onClick={toggleNav}>
                Login
              </a>
            </Link>
            <Link href='/register' passHref>
              <a className='btn btn-primary' onClick={toggleNav}>
                Register
              </a>
            </Link>
          </div>
        </div>
      </nav>
      {showNav && (
        <div
          className='sidebar-overlay w-full h-full absolute left-0 top-0 lg:hidden'
          onClick={toggleNav}
        ></div>
      )}
    </>
  );
};

export default Navbar;
