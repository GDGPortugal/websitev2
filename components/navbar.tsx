import Image from 'next/image';
import Logo from '../public/assets/Group 137.svg';
import Link from 'next/link';

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Eventos', href: '/sustentabilidade' },
  { label: 'Comunidade', href: '/tecnologia' },
  { label: 'Patrocinadores', href: '/empreendedorismo' },
];

const Navbar = () => {
  return (
    <header className="w-full flex justify-center py-4 bg-transparent">
      <nav className="w-[80%] bg-black rounded-xl shadow-md px-6 py-8 flex justify-between items-center">
        <Image src={Logo} alt="Batila Blog" />
        <ul className="flex gap-6 text-white">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Seja um Membro
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
