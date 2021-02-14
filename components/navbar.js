import { useState } from 'react';
import ActiveLink from './active-link';
import Image from 'next/image';

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleHandler = () => {
    setIsCollapsed(!isCollapsed);
  };

  let classTogle =
    'md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none';
  if (isCollapsed) {
    classTogle += ' hidden';
  }

  return (
    <nav className="flex flex-wrap items-center justify-end p-5">
      <div className="flex md:hidden">
        <button
          id="hamburger"
          onClick={toggleHandler}
          className="focus:outline-none"
        >
          <div className={isCollapsed ? 'block' : 'hidden'}>
            <Image src="/images/menu-squared.png" width="40" height="40" />
          </div>
          <div className={!isCollapsed ? 'block' : 'hidden'}>
            <Image src="/images/close-window.png" width="40" height="40" />
          </div>
        </button>
      </div>
      <div className={classTogle}>
        <ActiveLink activeClassName="md:active" href="/">
          <a className="block text-lg md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
            Home
          </a>
        </ActiveLink>
        <ActiveLink activeClassName="md:active" href="/posts">
          <a className="block text-lg md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
            Posts
          </a>
        </ActiveLink>
        <ActiveLink activeClassName="md:active" href="/about">
          <a className="block text-lg md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
            About
          </a>
        </ActiveLink>
      </div>
    </nav>
  );
}
