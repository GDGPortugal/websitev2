'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import foto1 from '../public/assets/gallery/image1.jpg';
import foto2 from '../public/assets/gallery/image2.jpg';
import foto3 from '../public/assets/gallery/image3.jpg';
import foto4 from '../public/assets/gallery/image4.jpg';
import foto5 from '../public/assets/gallery/image5.jpg';
import foto6 from '../public/assets/gallery/image6.jpg';

const galleryImages = [
  {
    src: foto1,
    alt: 'Apresentação principal no GDG Portugal',
    title: 'Tech Talk Principal',
    subtitle: 'Inovações em Cloud Computing',
    span: 'large',
  },
  {
    src: foto2,
    alt: 'Workshop de Android Development',
    title: 'Workshop Android',
    subtitle: 'Desenvolvimento Mobile',
    span: 'small',
  },
  {
    src: foto3,
    alt: 'Networking session no evento GDG',
    title: 'Networking',
    subtitle: 'Conexões que importam',
    span: 'small',
  },
  {
    src: foto4,
    alt: 'Equipe organizadora do GDG Portugal',
    title: 'Equipa GDG',
    subtitle: 'Organizadores apaixonados',
    span: 'medium',
  },
  {
    src: foto5,
    alt: 'Apresentação sobre Firebase',
    title: 'Firebase Talk',
    subtitle: 'Backend as a Service',
    span: 'medium',
  },
  {
    src: foto6,
    alt: 'Comunidade GDG Portugal',
    title: 'Evento Social',
    subtitle: 'Comunidade unida',
    span: 'medium',
  },
];

export default function Galery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={headerVariants}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 text-black"
            variants={headerVariants}
          >
            Veja as fotos dos eventos passados
          </motion.h1>
          <motion.p className="text-lg text-gray-600 max-w-2xl mx-auto" variants={headerVariants}>
            Veja como é ser parte do GDG Portugal. Nossos eventos são feitos de conhecimento,
            conexões e muita energia!
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
        >
          {/* Large Featured Image */}
          <motion.div
            variants={itemVariants}
            className="relative lg:col-span-2 lg:row-span-2 h-[400px] lg:h-full min-h-[500px] group overflow-hidden rounded-2xl"
            onHoverStart={() => setHoveredIndex(0)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <motion.div
              className="relative w-full h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
              />
            </motion.div>

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === 0 ? 1 : 0.6 }}
              transition={{ duration: 0.3 }}
            />

            {/* Text Content */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-8 text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{
                y: hoveredIndex === 0 ? 0 : 10,
                opacity: hoveredIndex === 0 ? 1 : 0.9,
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{galleryImages[0].title}</h3>
              <p className="text-base md:text-lg text-white/90">{galleryImages[0].subtitle}</p>
            </motion.div>
          </motion.div>

          {/* Smaller Images - Top Right */}
          {galleryImages.slice(1, 3).map((image, index) => (
            <motion.div
              key={index + 1}
              variants={itemVariants}
              className="relative h-[250px] group overflow-hidden rounded-2xl"
              onHoverStart={() => setHoveredIndex(index + 1)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index + 1 ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 text-white"
                initial={{ y: 10, opacity: 0 }}
                animate={{
                  y: hoveredIndex === index + 1 ? 0 : 5,
                  opacity: hoveredIndex === index + 1 ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-lg font-semibold mb-1">{image.title}</h4>
                <p className="text-sm text-white/80">{image.subtitle}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Row - 3 Equal Images */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {galleryImages.slice(3).map((image, index) => (
            <motion.div
              key={index + 3}
              variants={itemVariants}
              className="relative h-[300px] group overflow-hidden rounded-2xl"
              onHoverStart={() => setHoveredIndex(index + 3)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <motion.div
                className="relative w-full h-full"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </motion.div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index + 3 ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute bottom-0 left-0 right-0 p-5 text-white"
                initial={{ y: 10, opacity: 0 }}
                animate={{
                  y: hoveredIndex === index + 3 ? 0 : 5,
                  opacity: hoveredIndex === index + 3 ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-lg font-semibold mb-1">{image.title}</h4>
                <p className="text-sm text-white/80">{image.subtitle}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
            Junte-se à nossa comunidade de desenvolvedores e participe nos próximos eventos do GDG
            Portugal. Conecte-se, aprenda e cresça connosco!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="px-8 py-4 rounded-xl bg-black text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
          >
            Seja um Voluntário
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
