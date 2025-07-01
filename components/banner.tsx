export default function Banner() {
  return (
    <section className="w-full justify-center items-center mt-20 space-y-3.5">
      <h1 className="text-center text-6xl font-bold text-black">
        Google Developers Group Portugal
      </h1>
      <p className="text-center text-xl  text-[#6C6C6C]">
        Comunidades do país inteiro se conectando em um único lugar!
      </p>
      <div className="flex gap-4 justify-center items-center">
        <button className="bg-black text-white px-4 py-2 rounded-md">
          Veja os Proximos Eventos
        </button>
        <button className="border-[##6C6C6C] border text-black px-4 py-2 roudend-md bg-transparent">
          Conheça as comunidades
        </button>
      </div>
    </section>
  );
}
