'use client';

import Abouts from '../public/assets/websitegdgphoto.jpg';
import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

const About = () => {
  return (
    <section className="flex items-center justify-center mt-10 md:mt-20 gap-12 flex-col md:flex-row px-6">
      <AnimateOnScroll animation="slideLeft">
        <div className="max-w-2xl space-y-6">
          <h3 className="text-black font-semibold text-lg">Sobre Nós</h3>
          <h2 className="text-4xl font-bold text-gray-900">
            A comunidade Google Developers em Portugal.
          </h2>
          <p className="text-gray-700">
            <strong>O Google Developer Groups (GDG)</strong> é uma iniciativa global do Google que
            conecta pessoas apaixonadas por tecnologia. Em Portugal, somos 8 comunidades espalhadas
            pelo país, formadas por voluntários que acreditam no poder da colaboração, do
            aprendizado contínuo e da partilha de experiências.
          </p>
          <p className="text-gray-700">
            Nosso objetivo é criar espaços acessíveis, inclusivos e inspiradores para quem quer
            aprender, ensinar e transformar ideias em realidade através da tecnologia.
          </p>
        </div>
      </AnimateOnScroll>
      <AnimateOnScroll animation="slideRight" delay={0.2}>
        <Image
          src={Abouts}
          width={600}
          height={400}
          alt="GDG Portugal Community"
          className="object-cover rounded-4xl"
        />
      </AnimateOnScroll>
    </section>
  );
};

export default About;
