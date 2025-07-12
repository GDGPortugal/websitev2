import Image from 'next/image';

export default function CommunityCards() {
  return (
    <div className="mt-20 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-blue-500 rounded-3xl p-8 text-white relative overflow-hidden h-[500px] flex flex-col">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Nossas Comunidades</h2>
              <p className="text-blue-100 leading-relaxed">
                Cada comunidade GDG em Portugal é única, com seu próprio ritmo, eventos e talentos.
                Conheça os grupos locais e descubra como participar.
              </p>
            </div>
            <div className="mt-8">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Comunidade GDG Portugal"
                  className="w-full h-32 object-cover rounded-lg"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>

          {/* Card 2 - DevFests */}
          <div className="bg-red-500 rounded-3xl p-8 text-white relative overflow-hidden h-[500px] flex flex-col">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">DevFests</h2>
              <p className="text-red-100 leading-relaxed">
                São eventos de desenvolvedores liderados pela comunidade, hospedados por Google
                Developer Groups em todo o mundo.
              </p>
            </div>
            <div className="mt-8">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="DevFest Event"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="bg-yellow-400 rounded-3xl p-8 text-white relative overflow-hidden h-[500px] flex flex-col">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Eventos</h2>
              <p className="text-yellow-100 leading-relaxed">
                Deixe-se inspirar por palestras instigantes, oficinas e oportunidades de networking.
                Desbloqueie novas oportunidades.
              </p>
            </div>
            <div className="mt-8">
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Eventos e Networking"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
