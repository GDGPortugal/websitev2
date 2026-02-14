import { Event } from '@/type/typeevnets';
import Image from 'next/image';

type Props = {
  events: Event[];
};

export default async function EventsGDG({ events }: Props) {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-10 container mx-auto">
      <h1 className="text-4xl font-bold mb- text-black text-center">Próximos eventos</h1>
      <p className="text-[#6C6C6C] mb-8 text-center mt-2 text-2xl">
        Comunidades do país inteiro se conectando em um único lugar!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <div
            key={event._id}
            className="bg-gradient-to-br from-[#111111] via-[#1c1c1e] to-[#004d40] 
                     rounded-3xl p-8 text-white relative overflow-hidden 
                     h-[500px] flex flex-col"
          >
            {/* Conteúdo principal */}
            <div className="flex-1">
              <span className="text-sm text-blue-200">
                {new Date(event.date).toLocaleDateString('pt-PT')}
              </span>

              <h2 className="text-2xl font-bold mb-2">{event.title}</h2>

              {event.description && (
                <p className="text-blue-100 leading-relaxed line-clamp-4">
                  {/* se quiser renderizar PortableText, usar @portabletext/react */}
                  {Array.isArray(event.description) ? 'Descrição disponível' : event.description}
                </p>
              )}

              <div className="mt-4 text-sm space-y-1">
                {event.time && (
                  <p>
                    <strong>🕒</strong> {event.time}
                  </p>
                )}
                {event.location && (
                  <p>
                    <strong>📍</strong> {event.location}
                    {event.city ? `, ${event.city}` : ''}
                  </p>
                )}
              </div>

              {event.mode && (
                <div className="mt-3">
                  <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    {event.mode}
                  </span>
                </div>
              )}
            </div>

            {/* Imagem */}
            {event.image && (
              <div className="mt-6">
                <div className="bg-white rounded-2xl p-2 shadow-lg">
                  <Image
                    src={event.image.asset._ref}
                    alt={event.title}
                    className="w-full h-32 object-cover rounded-lg"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
