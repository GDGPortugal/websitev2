'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import LogoGDG from './../public/assets/commingsoon.svg';

export default function Home() {
  return (
    <div className="bg-[#FEF7E3] min-h-screen w-full flex flex-col items-center justify-center px-6 py-10 text-center space-y-6 overflow-hidden">
      <motion.div
        className="w-40 md:w-60"
        initial={{ opacity: 0, y: -50 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        >
          <Image
            alt="Logótipo GDG Portugal"
            src={LogoGDG || '/placeholder.svg'}
            className="w-full h-auto"
            priority
          />
        </motion.div>
      </motion.div>

      <motion.h1
        className="text-3xl md:text-5xl font-bold text-[#1F2937]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: 'easeOut',
        }}
      >
        Em construção | GDG Portugal
      </motion.h1>

      <motion.p
        className="text-base md:text-2xl text-[#54564B] max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.6,
          ease: 'easeOut',
        }}
      >
        O site do <strong>GDG Portugal</strong> está em construção. Estamos a preparar algo novo e
        inspirador para toda a comunidade. Voltaremos em breve com novidades. Fica atento Obrigado!
      </motion.p>

      <motion.div
        className="absolute top-20 left-10 w-2 h-2 bg-[#4285F4] rounded-full opacity-60"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          delay: 0.5,
        }}
      />

      <motion.div
        className="absolute bottom-32 right-16 w-3 h-3 bg-[#34A853] rounded-full opacity-50"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1,
        }}
      />

      <motion.div
        className="absolute top-1/3 right-8 w-1.5 h-1.5 bg-[#EA4335] rounded-full opacity-70"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.8,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1.5,
        }}
      />
    </div>
  );
}
