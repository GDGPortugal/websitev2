export default function Banner() {
  return (
    <section className="w-full flex flex-col items-center justify-center mt-10 md:mt-20 px-4 space-y-6 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
        Google Developers Group Portugal
      </h1>

      <p className="text-base sm:text-lg md:text-xl text-[#6C6C6C] max-w-2xl">
        Comunidades do país inteiro se conectando em um único lugar!
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button className="bg-black text-white px-6 py-3 rounded-md text-sm sm:text-base">
          Veja os Próximos Eventos
        </button>

        <button className="border border-[#6C6C6C] text-black px-6 py-3 rounded-md bg-transparent text-sm sm:text-base">
          Conheça as Comunidades
        </button>
      </div>
    </section>
  );
}
