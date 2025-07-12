import Image from 'next/image';
import foto1 from '../public/assets/gallery/image1.jpg';
import foto2 from '../public/assets/gallery/image2.jpg';
import foto3 from '../public/assets/gallery/image3.jpg';
import foto4 from '../public/assets/gallery/image4.jpg';
import foto5 from '../public/assets/gallery/image5.jpg';
import foto6 from '../public/assets/gallery/image6.jpg';

export default function Galery() {
  return (
    <div className=" py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb- text-black text-center">
          Veja as fotos dos eventos passados e conecte-se com quem foi!
        </h1>
        <p className="text-[#6C6C6C] mb-8 text-center mt-2 ">
          Veja como é ser parte do GDG Portugal. Nossos eventos são feitos de conhecimento, conexões
          e muita energia!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
          <div className="lg:col-span-2 relative group overflow-hidden rounded-lg shadow-lg">
            <Image
              src={foto1}
              alt="Apresentação principal no GDG Portugal - Palestrante apresentando sobre tecnologias Google"
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-lg font-semibold">Tech Talk Principal</h3>
              <p className="text-sm text-white/80">Inovações em Cloud Computing</p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="relative group overflow-hidden rounded-lg shadow-lg h-48 lg:h-[285px]">
              <Image
                src={foto2}
                alt="Workshop de Android Development no GDG Portugal"
                width={400}
                height={285}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-sm font-semibold">Workshop Android</h4>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg h-48 lg:h-[285px]">
              <Image
                src={foto3}
                alt="Networking session no evento GDG Portugal com desenvolvedores"
                width={400}
                height={285}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-sm font-semibold">Networking</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="relative group overflow-hidden rounded-lg shadow-lg h-64">
            <Image
              src={foto4}
              alt="Equipe organizadora do GDG Portugal"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-sm font-semibold">Equipa GDG</h4>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg shadow-lg h-64">
            <Image
              src={foto4}
              alt="Sessão de coding no GDG Portugal"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-sm font-semibold">Coding Session</h4>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg shadow-lg h-64">
            <Image
              src={foto5}
              alt="Apresentação sobre Firebase no GDG Portugal"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-sm font-semibold">Firebase Talk</h4>
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg shadow-lg h-64">
            <Image
              src={foto6}
              alt="Comunidade GDG Portugal em evento social"
              width={300}
              height={300}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-sm font-semibold">Evento Social</h4>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
            Junte-se à nossa comunidade de desenvolvedores e participe nos próximos eventos do GDG
            Portugal. Conecte-se, aprenda e cresça connosco!
          </p>
          <button className="border-[#6C6C6C]  px-4 py-2 roudend-md bg-black text-white ">
            Seja um Voluntario
          </button>
        </div>
      </div>
    </div>
  );
}
