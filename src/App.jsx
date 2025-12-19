import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, CheckCircle, ArrowRight, MapPin, Instagram, Linkedin, MessageCircle, Ruler, ShieldCheck, HardHat, FileText, Activity } from 'lucide-react';

/* IMAGENS - Mantendo suas importações ou placeholders */
// Certifique-se de que os caminhos das imagens estão corretos conforme seu projeto original
const logo = "/image_a07a1a.png"; 

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const phoneNumber = "5531999128061";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20vim%20pelo%20site%20da%20RDP%20Engenharia%20e%20gostaria%20de%20um%20orçamento.`;

  // Dados de Serviços/Diferenciais baseados no seu conteúdo original
  const differentials = [
    { title: "NR12 & Segurança", icon: <ShieldCheck />, desc: "Adequação completa e laudos técnicos" },
    { title: "Projetos 3D", icon: <Ruler />, desc: "Modelagem mecânica e simulações" },
    { title: "Linha de Vida", icon: <Activity />, desc: "Projetos e instalação certificada" },
    { title: "Laudos ART", icon: <FileText />, desc: "Segurança jurídica e operacional" }
  ];

  const services = [
    {
      id: "nr12",
      title: "Adequação NR12",
      description: "Não corra riscos. Nossos engenheiros blindam sua operação contra multas e acidentes. Realizamos desde a Apreciação de Risco (APR) até a instalação física das proteções e laudo final com ART.",
      icon: <ShieldCheck className="w-6 h-6" />,
      image: "/image_16.png", // Sua imagem original
      highlight: "Conformidade Total"
    },
    {
      id: "linhadevida",
      title: "Linhas de Vida",
      description: "Sistemas de ancoragem rígidos e flexíveis para trabalho em altura. Projetos focados na viabilidade econômica sem sacrificar a segurança, com memorial de cálculo e teste de arrancamento.",
      icon: <Activity className="w-6 h-6" />,
      image: "/linha.jpg",
      highlight: "Trabalho em Altura"
    },
    {
      id: "laudos",
      title: "Laudos Técnicos",
      description: "Inspeções rigorosas em máquinas pesadas, pontes rolantes, vasos de pressão e estruturas metálicas. Garanta a integridade dos seus equipamentos com engenheiros habilitados.",
      icon: <FileText className="w-6 h-6" />,
      image: "/image_6.png",
      highlight: "Inspeção & Segurança"
    },
    {
      id: "projetos",
      title: "Projetos Mecânicos",
      description: "Desenvolvimento de máquinas e dispositivos customizados. Transformamos complexidade em eficiência utilizando softwares de ponta para modelagem 3D e validação.",
      icon: <HardHat className="w-6 h-6" />,
      image: "/image_58.png",
      highlight: "Engenharia de Precisão"
    }
  ];

  return (
    <div className="font-sans text-gray-200 bg-zinc-950 selection:bg-brand-primary selection:text-zinc-950 overflow-x-hidden">
      
      {/* BOTÃO FLUTUANTE WHATSAPP (Estilo Modelo) */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[60] bg-[#25D366] !text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-110 transition duration-300 flex items-center justify-center border border-white/10 animate-bounce-slow"
        title="Falar no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* HEADER (Estilo Modelo: Blur e Minimalista) */}
      <header className="fixed w-full top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-white/5 shadow-lg transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src={logo} alt="RDP Engenharia" className="h-10 md:h-12 w-auto object-contain" />
            <div className="hidden md:flex flex-col">
              <span className="font-bold text-lg leading-none tracking-wide text-white">RDP ENGENHARIA</span>
              <span className="text-[10px] text-gray-400 tracking-[0.2em] uppercase">Soluções Industriais</span>
            </div>
          </div>

          <nav className="hidden lg:flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest items-center">
            {['Início', 'Sobre', 'NR12', 'Linha de Vida', 'Projetos'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/ /g, '')}`} 
                className="hover:text-brand-primary transition-colors relative group"
              >
                {item} 
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
             <a 
               href={whatsappLink} 
               target="_blank" 
               className="flex items-center gap-2 bg-white !text-zinc-950 px-5 py-2 rounded-md hover:bg-brand-primary transition font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_15px_rgba(255,215,0,0.4)]"
             >
              <Phone size={14} />
              <span>Orçamento</span>
            </a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-6 shadow-2xl absolute w-full animate-fade-in-down">
            {['Início', 'Sobre', 'NR12', 'Linha de Vida', 'Projetos'].map((item) => (
               <a key={item} href={`#${item.toLowerCase().replace(/ /g, '')}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white block hover:text-brand-primary">{item}</a>
            ))}
             <a href={whatsappLink} className="text-brand-primary font-bold flex items-center gap-2"><MessageCircle size={18}/> Falar com Engenheiro</a>
          </div>
        )}
      </header>

      {/* HERO SECTION (Estilo Modelo: Imagem de fundo escura e texto centralizado) */}
      <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
            {/* Usando um gradiente radial sutil como no modelo original da RDP mas com estética dark */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950 z-0"></div>
            {/* Pattern de fundo opcional */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#FFD700 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/50 to-zinc-950"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border border-white/10 bg-white/5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-brand-primary mb-8 backdrop-blur-sm uppercase">
              Excelência em Engenharia Mecânica
            </div>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
              Segurança Industrial & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Alta Performance.</span>
            </h1>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Soluções completas em NR12, Linhas de Vida e Projetos Mecânicos. Atendemos todo o Brasil com rigor técnico e agilidade.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
              <a 
                href={whatsappLink} 
                target="_blank" 
                className="bg-brand-primary !text-zinc-950 px-8 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-yellow-400 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.15)] flex items-center justify-center gap-2 hover:-translate-y-1"
              >
                Solicitar Cotação <ArrowRight size={18}/>
              </a>
              <a 
                href="#projetos" 
                className="border border-white/20 !text-white px-8 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-white hover:!text-zinc-950 transition-all duration-300 hover:border-white hover:-translate-y-1"
              >
                Nossos Serviços
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIFERENCIAIS (Estilo Modelo: Grid de cards dark) */}
      <section id="sobre" className="py-20 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-primary uppercase tracking-widest text-xs font-bold">Por que escolher a RDP?</span>
            <h2 className="text-3xl font-bold text-white mt-2">Tecnologia & Expertise</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentials.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900 p-8 rounded border border-white/5 hover:border-brand-primary/50 transition duration-300 group hover:-translate-y-2"
              >
                <div className="text-brand-primary mb-4 group-hover:scale-110 transition duration-300">{item.icon}</div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS DETALHADOS (Estilo Modelo: Seções alternadas com imagem grande) */}
      <div id="servicos" className="bg-zinc-950">
        {services.map((service, index) => (
          <section key={index} id={service.id} className={`py-24 border-t border-white/5 overflow-hidden ${index % 2 === 0 ? 'bg-zinc-950' : 'bg-zinc-900'}`}>
            <div className="container mx-auto px-6">
              <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full md:w-1/2 relative group"
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition duration-700 z-10 pointer-events-none"></div>
                  <div className="relative border border-white/10 rounded-md overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-[350px] md:h-[500px] object-cover rounded-md shadow-2xl grayscale group-hover:grayscale-0 transition duration-700 ease-in-out transform group-hover:scale-105"
                      />
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full md:w-1/2"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white/5 rounded-md border border-white/10 text-brand-primary">
                      {service.icon}
                    </div>
                    <span className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">{service.highlight}</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">{service.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-10">
                    {service.description}
                  </p>
                  
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    className="group inline-flex items-center gap-3 !text-white font-bold uppercase tracking-wider text-sm border-b border-white/30 pb-2 hover:border-brand-primary hover:text-brand-primary transition-all hover:gap-5"
                  >
                    Solicitar Orçamento <ArrowRight size={16} className="text-brand-primary"/>
                  </a>
                </motion.div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* PARCEIROS/CLIENTES (Adaptado para estilo minimalista) */}
      <section className="py-24 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
            <span className="text-gray-500 uppercase tracking-[0.2em] text-xs font-bold mb-8 block">Parceiros Estratégicos</span>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Substituir paths pelas logos reais */}
                {["/image_29.png", "/image_22.png", "/image_15.png", "/image_38.png", "/image_33.png"].map((img, idx) => (
                    <img key={idx} src={img} alt="Cliente" className="h-12 w-auto object-contain hover:scale-110 transition duration-300"/>
                ))}
            </div>
        </div>
      </section>

      {/* FOOTER (Estilo Modelo: Grid simples e limpo) */}
      <footer id="contato" className="bg-zinc-950 pt-24 pb-12 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <span className="font-bold text-2xl text-white tracking-tighter block mb-4">RDP ENGENHARIA</span>
              <p className="text-gray-400 max-w-sm leading-relaxed text-sm mb-6">
                Referência nacional em adequação NR12 e engenharia mecânica. Segurança, conformidade técnica e eficiência para sua indústria.
              </p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com" className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition text-gray-400 border border-white/5">
                  <Linkedin size={18} />
                </a>
                <a href="https://www.instagram.com/rdp.engenharia/" className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition text-gray-400 border border-white/5">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contato</h4>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-center gap-3 hover:text-brand-primary transition">
                  <Phone size={16} />
                  <a href={whatsappLink} target="_blank">(31) 99912-8061</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} />
                  <span>Belo Horizonte, MG</span>
                </li>
                <li className="flex items-center gap-3 text-xs text-gray-500 mt-4">
                    <span>Atendimento Nacional</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Links Rápidos</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#inicio" className="hover:text-white transition block">Início</a></li>
                <li><a href="#nr12" className="hover:text-white transition block">Adequação NR12</a></li>
                <li><a href="#linhadevida" className="hover:text-white transition block">Linha de Vida</a></li>
                <li><a href="#laudos" className="hover:text-white transition block">Laudos Técnicos</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} RDP Engenharia. Todos os direitos reservados.</p>
            <p className="mt-2 md:mt-0 flex items-center gap-1">
              Desenvolvido por <a href="https://www.linkedin.com/in/raphael-yankous-machado-clemente-7bb750191/" target="_blank" className="text-gray-500 hover:text-white transition font-medium">Raphael Yankous</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;