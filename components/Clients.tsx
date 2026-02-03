import React, { useEffect, useRef, useState } from 'react';

const LogoContainer: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <div className={`flex-shrink-0 flex items-center justify-center h-28 w-56 mx-6 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500 cursor-pointer hover:scale-105 select-none ${className}`}>
    {children}
  </div>
);

const Clients: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    
    const scroll = () => {
      if (!isPaused && scrollContainer) {
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 0.8; // Smooth auto-scroll speed
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Logo Components
  const Logos = () => (
    <>
      {/* 1. Brumalimp */}
      <LogoContainer>
        <div className="flex items-center gap-2">
           <div className="w-10 h-10 rounded-full bg-[#00a8e8] flex items-center justify-center text-white font-bold text-xl italic shadow-md">B</div>
           <div className="flex flex-col">
              <span className="text-[#00a8e8] font-bold text-2xl leading-none tracking-tight">Brumalimp</span>
              <span className="text-gray-400 text-[8px] uppercase tracking-widest font-semibold">Higiene Profissional</span>
           </div>
        </div>
      </LogoContainer>

      {/* 2. AC Clean */}
      <LogoContainer>
         <div className="flex flex-col items-start border-l-4 border-[#002672] pl-3 py-1">
            <span className="text-[#002672] font-black text-3xl leading-none tracking-tighter">AC CLEAN</span>
            <span className="text-gray-500 text-[10px] font-bold uppercase tracking-wide">Serviços Gerais</span>
         </div>
      </LogoContainer>

      {/* 3. Feira Limpeza */}
      <LogoContainer>
        <div className="flex items-center gap-2 border-2 border-[#2ecc71] rounded-lg px-3 py-2">
           <div className="flex flex-col items-center">
              <span className="text-[#2ecc71] font-black text-lg uppercase leading-none">Feira</span>
              <span className="text-[#27ae60] font-light text-lg uppercase leading-none">Limpeza</span>
           </div>
        </div>
      </LogoContainer>

      {/* 4. CRS Distribuidora */}
      <LogoContainer>
         <div className="flex items-center">
            <div className="bg-[#002672] text-white p-1 px-2 font-black text-2xl mr-2 rounded-sm">CRS</div>
            <div className="flex flex-col justify-between h-full">
               <span className="text-[#002672] font-bold text-lg leading-none uppercase">Distribuidora</span>
               <div className="h-1 w-full bg-[#EAB308] mt-1"></div>
            </div>
         </div>
      </LogoContainer>

      {/* 5. Felim */}
      <LogoContainer>
        <div className="flex items-center gap-1 group">
           <span className="text-[#e67e22] font-black text-4xl italic tracking-tight group-hover:tracking-normal transition-all">Felim</span>
           <div className="w-3 h-3 bg-[#e67e22] rounded-full mt-4 ml-1"></div>
        </div>
      </LogoContainer>

      {/* 6. Brympol */}
      <LogoContainer>
         <div className="border-2 border-black p-2 flex items-center justify-center relative w-40">
            <span className="text-black font-serif font-bold text-xl tracking-widest uppercase z-10 bg-white px-2">Brympol</span>
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black -z-0"></div>
         </div>
      </LogoContainer>

      {/* 7. Agiliza */}
      <LogoContainer>
         <div className="flex items-center skew-x-[-10deg]">
            <span className="text-[#c0392b] font-black text-3xl italic">AGILIZA</span>
            <div className="flex flex-col gap-[2px] ml-2">
                <div className="w-6 h-1 bg-[#c0392b]"></div>
                <div className="w-4 h-1 bg-[#c0392b]"></div>
                <div className="w-2 h-1 bg-[#c0392b]"></div>
            </div>
         </div>
      </LogoContainer>

      {/* 8. Dist. Câmara */}
      <LogoContainer>
         <div className="flex flex-col items-center relative">
            <div className="absolute -top-3 text-[#34495e] opacity-20 text-5xl font-serif font-black">C</div>
            <span className="text-[#34495e] font-serif font-bold text-2xl uppercase tracking-widest border-b-2 border-[#34495e] z-10 relative">Câmara</span>
            <span className="text-[#7f8c8d] text-[9px] font-bold uppercase mt-1 tracking-[0.2em]">Distribuidora</span>
         </div>
      </LogoContainer>

      {/* 9. Limpabril */}
      <LogoContainer>
        <div className="flex items-center gap-1 text-[#8e44ad]">
           <div className="text-2xl animate-pulse">✨</div>
           <span className="font-bold text-3xl tracking-tight lowercase font-sans">limpabril</span>
        </div>
      </LogoContainer>

      {/* 10. Descartáveis São Francisco */}
      <LogoContainer>
         <div className="flex flex-col items-start border-l-2 border-[#2980b9] pl-2">
            <span className="text-[#2980b9] font-bold text-[9px] uppercase tracking-widest mb-0.5">Descartáveis</span>
            <div className="flex flex-col leading-none">
                <span className="text-[#2c3e50] font-black text-xl leading-none uppercase">São</span>
                <span className="text-[#2c3e50] font-black text-xl leading-none uppercase text-[#2980b9]">Francisco</span>
            </div>
         </div>
      </LogoContainer>

      {/* 11. Utilidades Ferreira */}
      <LogoContainer>
         <div className="bg-[#2c3e50] text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl shadow-lg">
            <div className="flex flex-col items-center leading-none">
               <span className="font-bold text-[10px] uppercase text-[#f1c40f] tracking-wide mb-1">Utilidades</span>
               <span className="font-black text-xl uppercase tracking-wider">Ferreira</span>
            </div>
         </div>
      </LogoContainer>

      {/* 12. Dist. Menezes */}
      <LogoContainer>
         <div className="flex items-center gap-2">
            <div className="w-10 h-10 border-[3px] border-[#c0392b] rounded-md flex items-center justify-center bg-white shadow-sm transform rotate-3">
               <span className="text-[#c0392b] font-black text-xl">M</span>
            </div>
            <div className="flex flex-col">
               <span className="text-[#c0392b] font-bold text-2xl leading-none tracking-tight">Menezes</span>
               <span className="text-black text-[8px] font-bold uppercase tracking-widest bg-gray-100 px-1 mt-1">Distribuição</span>
            </div>
         </div>
      </LogoContainer>
    </>
  );

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 border-t border-gray-100 overflow-hidden select-none">
      <div className="w-full relative">
        
        {/* Header */}
        <div className="text-center mb-16 px-4">
          <span className="text-gray-400 font-bold text-xs md:text-sm tracking-[0.3em] uppercase block mb-3">
            NOSSOS PARCEIROS
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">
            Quem confia na RFM Têxtil
          </h2>
          <div className="h-1 w-20 bg-[#002672] mx-auto mt-6 rounded-full opacity-80"></div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-100 via-gray-100/90 to-transparent z-20 pointer-events-none"></div>

          {/* Scrollable Track - Render Logos Twice for Infinite Effect */}
          <div 
            ref={scrollRef}
            className="flex items-center overflow-x-auto scrollbar-hide py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex items-center">
                <Logos />
            </div>
            <div className="flex items-center">
                <Logos />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Clients;