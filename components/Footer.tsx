import React from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook, ArrowRight, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col font-sans">
      
      {/* Top Contact Bar - Deep Blue with Diagonal Texture Effect */}
      <div className="w-full bg-[#002672] text-white py-6 px-4 md:px-8 relative overflow-hidden">
        {/* CSS Pattern Overlay for Texture */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #000 10px, #000 20px)' }}></div>
        
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          
          {/* Address */}
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <MapPin size={24} className="text-[#002672]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-base leading-tight">Rua Ambrosina Maria de Freitas, 340</span>
              <span className="text-gray-300 text-xs md:text-sm">Bairro Central Park, CEP: 32400-239</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Mail size={24} className="text-[#002672]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-base leading-tight">Nosso E-mail:</span>
              <a href="mailto:rfmtextil@gmail.com" className="text-gray-300 text-xs md:text-sm hover:text-white transition-colors truncate max-w-[200px] md:max-w-none">
                rfmtextil@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Phone size={24} className="text-[#002672]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm md:text-base leading-tight">Nosso Telefone:</span>
              <a href="tel:+5531999175874" className="text-gray-300 text-xs md:text-sm hover:text-white transition-colors">
                (31) 99917-5874
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Area - Dark Gradient */}
      <div className="w-full bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] pt-16 pb-8 px-4 md:px-8 text-gray-400">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col items-start gap-6">
            {/* Logo Image */}
            <div className="flex flex-col items-center lg:items-start select-none">
               <img 
                  src="https://i.postimg.cc/wBSgJ7Jc/Sem-nome-(Apresentacao-(43)).png" 
                  alt="RFM Têxtil" 
                  className="h-28 w-auto object-contain mb-2" 
               />
            </div>

            <p className="text-sm leading-relaxed max-w-sm">
              RFM Têxtil é a sua parceira em uniformes personalizados de alta qualidade, 
              oferecendo design exclusivo e atendimento excepcional para elevar a imagem da sua empresa.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#002672] hover:border-[#002672] hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:bg-[#002672] hover:border-[#002672] hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div className="flex flex-col items-start lg:pl-12">
            <h3 className="text-white font-bold text-lg uppercase tracking-wide mb-6 relative">
              Links Úteis
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#002672]"></span>
            </h3>
            <ul className="flex flex-col gap-3 w-full">
              {['Home', 'Sobre Nós', 'FAQ', 'Contatos', 'Serviços', 'Clientes', 'Portfólio'].map((link) => (
                <li key={link}>
                  <a href="#" className="flex items-center gap-2 text-sm hover:text-[#002672] hover:pl-2 transition-all duration-300 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#002672] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Location / Map */}
          <div className="flex flex-col w-full">
            <h3 className="text-white font-bold text-lg uppercase tracking-wide mb-6 relative">
              Localidade
              <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#002672]"></span>
            </h3>
            
            <a 
              href="https://share.google/y1swN2pHAWBHaMWBF" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative w-full h-[200px] rounded-xl overflow-hidden group shadow-2xl border border-gray-800 block cursor-pointer"
            >
              {/* Map Placeholder Image */}
              <img 
                src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" 
                alt="Mapa da Localização" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

              {/* Pin Card Overlay */}
              <div className="absolute top-4 left-4 bg-white p-3 rounded-lg shadow-lg max-w-[200px]">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-[#002672] mt-1 shrink-0" />
                  <div>
                    <p className="text-gray-900 font-bold text-xs leading-tight">Rua Ambrosina Maria de Freitas, 340</p>
                    <span className="text-[#0055A4] text-[10px] font-bold hover:underline mt-1 flex items-center gap-1">
                      Ver mapa ampliado <ExternalLink size={8} />
                    </span>
                  </div>
                </div>
              </div>

              {/* Yellow Pin on Center - Changed to Dark Blue */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#002672] drop-shadow-xl animate-bounce">
                <MapPin size={40} className="fill-[#002672] text-white" />
              </div>
            </a>
          </div>

        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-gray-800 mt-16 mb-8"></div>

        {/* Bottom Copyright */}
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-gray-500 font-medium text-center">
          <p>
            RFM TÊXTIL © {new Date().getFullYear()} TODOS OS DIREITOS AUTORAIS RESERVADOS
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;