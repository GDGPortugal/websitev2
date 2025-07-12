import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#111111] via-[#1c1c1e] to-[#004d40]  text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center md:items-start mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Image src="/assets/Group 137.svg" alt="GDG Logo Logo" width={300} height={300} />
          </div>
          <p className="text-gray-400 text-sm text-center md:text-left">
            Acompanhe nossos eventos, projetos e novidades em tempo real Junte-se à conversa e
            compartilhe experiências com outros desenvolvedores apaixonados por tecnologia
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 pt-6 pb-4">
          <nav className="flex flex-wrap justify-center md:justify-start gap-6 mb-4 md:mb-0">
            <Link
              href="/sobre"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Sobre Nós
            </Link>
            <Link
              href="/recursos"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Recursos
            </Link>
            <Link
              href="/planos"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Planos
            </Link>
            <Link href="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">
              FAQ
            </Link>
            <Link
              href="/contacto"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Contacto
            </Link>
          </nav>

          <div className="flex gap-4">
            <Link
              href="https://facebook.com/anzaki"
              className="h-8 w-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href="https://twitter.com/anzaki"
              className="h-8 w-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <Link
              href="https://linkedin.com/company/anzaki"
              className="h-8 w-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </Link>
            <Link
              href="https://instagram.com/anzaki"
              className="h-8 w-8 rounded-full border border-gray-700 flex items-center justify-center hover:bg-gray-800 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 text-gray-500 text-xs flex flex-col md:flex-row justify-between items-center">
          <p>©2024 GDG Portugal. Todos os direitos reservados.</p>
          <div className="mt-2 md:mt-0">
            <span className="text-gray-500">gdgportugal@gmail.com</span>
            <span className="mx-2">|</span>
            <span className="text-gray-500">+351 910 000 000</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
