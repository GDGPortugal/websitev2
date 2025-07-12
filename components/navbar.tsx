'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../public/assets/Group 137.svg';

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Eventos', href: '/sustentabilidade' },
  { label: 'Comunidade', href: '/tecnologia' },
  { label: 'Patrocinadores', href: '/empreendedorismo' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent flex justify-center py-4 z-50">
      <nav className="w-[90%] bg-black rounded-xl shadow-md px-6 py-4 flex justify-between items-center relative">
        <Link href="/">
          <Image src={Logo} alt="Batila Blog" height={300} width={300} />
        </Link>

        <ul className="hidden md:flex gap-6 text-white items-center">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className="hover:text-teal-300 transition">
                {item.label}
              </Link>
            </li>
          ))}
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition"
          >
            Seja um Membro
          </Link>
        </ul>

        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {menuOpen && (
          <ul className="absolute top-full left-0 w-full bg-black text-white flex flex-col gap-4 p-6 rounded-b-xl md:hidden">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="block hover:text-teal-300 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-full text-center hover:bg-gray-200 transition"
              onClick={() => setMenuOpen(false)}
            >
              Seja um Membro
            </Link>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
