'use client';
import { motion } from 'framer-motion';

export default function Banner() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full flex flex-col items-center justify-center mt-10 md:mt-20 px-4 space-y-6 text-center">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Google Developers Group Portugal
      </motion.h1>

      <motion.p
        className="text-base sm:text-lg md:text-xl text-[#6C6C6C] max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        Comunidades do país inteiro se conectando em um único lugar!
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <motion.button
          className="bg-black text-white px-6 py-3 rounded-md text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('eventos')}
        >
          Veja os Próximos Eventos
        </motion.button>

        <motion.button
          className="border border-[#6C6C6C] text-black px-6 py-3 rounded-md bg-transparent text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('comunidades')}
        >
          Conheça as Comunidades
        </motion.button>
      </motion.div>
    </section>
  );
}
