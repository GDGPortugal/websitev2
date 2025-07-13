'use client';

import Image from 'next/image';
import AnimateOnScroll from './AnimateOnScroll';

const events = [
  {
    id: 'event-001',
    data: '2025-07-10',
    titulo: 'Fórum dos Líderes de Tecnologia',
    descricao: 'Onde as mentes mais brilhantes da tecnologia se reúnem para impulsionar o futuro',
    categorias: ['GDG Évora', 'Presencial'],
    horario: { inicio: '17:00', fim: '22:00' },
    local: { nome: 'Teatro de Belas Artes', endereco: '3301 Lyon Street, Évora, PT' },
    link: 'https://seudominio.com/evento/forum-lideres-tecnologia',
    imagem: '/assets/image.png',
  },
  {
    id: 'event-002',
    data: '2025-08-05',
    titulo: 'TechTalk Braga',
    descricao: 'Palestras inspiradoras sobre inovação e tecnologia na prática.',
    categorias: ['Braga', 'Presencial'],
    horario: { inicio: '18:30', fim: '21:30' },
    local: { nome: 'Centro Cultural Braga', endereco: 'Rua Central 45, Braga, PT' },
    preco: 'Gratuito',
    link: 'https://seudominio.com/evento/techtalk-braga',
    imagem: '/assets/image.png',
  },
  {
    id: 'event-003',
    data: '2025-09-15',
    titulo: 'Porto Dev Summit',
    descricao: 'O maior encontro de programadores do norte de Portugal.',
    categorias: ['Porto', 'Presencial'],
    horario: { inicio: '14:00', fim: '20:00' },
    local: { nome: 'Alfândega do Porto', endereco: 'Rua Nova da Alfândega, Porto, PT' },
    preco: '150€',
    link: 'https://seudominio.com/evento/porto-dev-summit',
    imagem: '/assets/image.png',
  },
  {
    id: 'event-004',
    data: '2025-07-25',
    titulo: 'Workshop Frontend Aveiro',
    descricao: 'Aprenda na prática a construir interfaces modernas com React.',
    categorias: ['Aveiro', 'Presencial'],
    horario: { inicio: '10:00', fim: '16:00' },
    local: { nome: 'Tech Hub Aveiro', endereco: 'Rua das Startups, Aveiro, PT' },
    preco: '80€',
    link: 'https://seudominio.com/evento/workshop-frontend-aveiro',
    imagem: '/assets/image.png',
  },
  {
    id: 'event-005',
    data: '2025-08-18',
    titulo: 'Tech Island Madeira',
    descricao: 'Conferência sobre tecnologia, inovação e nomadismo digital.',
    categorias: ['Madeira', 'Presencial'],
    horario: { inicio: '15:00', fim: '21:00' },
    local: { nome: 'Centro de Congressos', endereco: 'Av. Arriaga 10, Funchal, Madeira, PT' },
    preco: '100€ - Desconto para grupos',
    link: 'https://seudominio.com/evento/tech-island-madeira',
    imagem: '/assets/image.png',
  },
  {
    id: 'event-006',
    data: '2025-10-02',
    titulo: 'Lisboa CodeFest',
    descricao: 'Hackathon + networking para devs, designers e empreendedores.',
    categorias: ['Lisboa', 'Presencial'],
    horario: { inicio: '09:00', fim: '20:00' },
    local: { nome: 'Fábrica de Startups', endereco: 'Rua do Arsenal 72, Lisboa, PT' },
    link: 'https://seudominio.com/evento/lisboa-codefest',
    imagem: '/assets/image.png',
  },
  {
    id: 'event-007',
    data: '2025-09-10',
    titulo: 'DataTalks Castelo Branco',
    descricao: 'Conversas sobre dados, IA e o futuro da informação.',
    categorias: ['Castelo Branco', 'Presencial'],
    horario: { inicio: '16:00', fim: '19:30' },
    local: { nome: 'Auditório Municipal', endereco: 'Av. 1º de Maio, Castelo Branco, PT' },
    link: 'https://seudominio.com/evento/datatalks-castelo-branco',
    imagem: '/assets/image.png',
  },
  {
    id: 'event-008',
    data: '2025-11-22',
    titulo: 'Famalicão Digital Lab',
    descricao: 'Experiências tecnológicas e oficinas para jovens talentos.',
    categorias: ['Famalicão', 'Presencial'],
    horario: { inicio: '11:00', fim: '17:00' },
    local: { nome: 'Espaço Inovação', endereco: 'Rua da Tecnologia 100, Famalicão, PT' },
    link: 'https://seudominio.com/evento/famalicao-digital-lab',
    imagem: '/assets/image.png',
  },
];

export default function EventsMaps() {
  return (
    <div id="eventos" className="px-4 md:px-8 lg:px-16 py-10 container mx-auto">
      <AnimateOnScroll animation="fadeIn">
        <h1 className="text-4xl font-bold mb- text-black text-center">Próximos eventos</h1>
        <p className="text-[#6C6C6C] mb-8 text-center mt-2 text-2xl">
          Comunidades do país inteiro se conectando em um único lugar!
        </p>
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <AnimateOnScroll key={event.id} animation="scale" delay={0.1 * index} duration={0.6}>
            <div className="bg-gradient-to-br from-[#111111] via-[#1c1c1e] to-[#004d40] rounded-3xl p-8 text-white relative overflow-hidden h-[500px] flex flex-col">
              <div className="flex-1">
                <span className="text-sm text-blue-200">{event.data}</span>
                <h2 className="text-2xl font-bold mb-2">{event.titulo}</h2>
                <p className="text-blue-100 leading-relaxed line-clamp-4">{event.descricao}</p>

                <div className="mt-4 text-sm space-y-1">
                  <p>
                    <strong>🕒</strong> {event.horario.inicio} - {event.horario.fim}
                  </p>
                  <p>
                    <strong>📍</strong> {event.local.nome}, {event.local.endereco}
                  </p>
                </div>

                <div className="mt-3 flex gap-2 flex-wrap">
                  {event.categorias.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="bg-white rounded-2xl p-2 shadow-lg">
                  <Image
                    src={event.imagem}
                    alt={event.titulo}
                    className="w-full h-32 object-cover rounded-lg"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </div>
  );
}
