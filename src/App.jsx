import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Configurações de Animação (Reutilizáveis)
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function App() {
  // Estado para o Menu Mobile
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMenu = () => setIsMobileMenuOpen(false);

  // Estado para rastrear o Mouse (Efeito Spotlight)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-engine-darker text-engine-light font-sans selection:bg-engine-primary selection:text-engine-darker overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full z-50 bg-engine-darker/90 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center cursor-pointer h-full">
             <img src="/image_a07a1a.png" alt="RDP Engenharia Logo" className="h-full w-auto object-contain hover:opacity-80 transition-opacity" />
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {['Sobre', 'NR12', 'Linha de Vida', 'Projetos', 'Laudos'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, '')}`} className="hover:text-engine-primary hover:scale-105 transition-all">
                {item}
              </a>
            ))}
          </div>
          
          <a href="https://wa.me/5531999128061?text=Olá,%20vim%20pelo%20site%20da%20RDP%20Engenharia%20e%20gostaria%20de%20um%20orçamento." target="_blank" rel="noopener noreferrer" className="hidden md:flex px-5 py-2 bg-engine-primary text-engine-darker font-bold text-sm rounded hover:bg-yellow-400 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all items-center justify-center">
            Falar com Engenheiro
          </a>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white p-2 focus:outline-none">
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="md:hidden bg-engine-darker border-b border-white/10 overflow-hidden">
              <div className="flex flex-col p-6 gap-4">
                {['Sobre', 'NR12', 'Linha de Vida', 'Projetos', 'Laudos'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase().replace(/ /g, '')}`} onClick={closeMenu} className="text-lg font-medium text-gray-300 hover:text-engine-primary py-2 border-b border-white/5">{item}</a>
                ))}
                <a href="https://wa.me/5531999128061?text=Olá,%20vim%20pelo%20site%20da%20RDP%20Engenharia%20e%20gostaria%20de%20um%20orçamento." target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="mt-2 w-full py-3 bg-engine-primary text-engine-darker font-bold text-center rounded">Falar com Engenheiro</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center overflow-hidden py-12 md:py-0 bg-engine-darker">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFD700 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute inset-0 opacity-100 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#FFD700 2px, transparent 2px)', backgroundSize: '40px 40px', maskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`, WebkitMaskImage: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)` }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] md:w-[500px] md:h-[500px] bg-engine-primary/5 blur-[100px] md:blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-engine-primary font-medium tracking-[0.2em] text-xs md:text-sm uppercase mb-4 md:mb-6">Soluções Industriais & Segurança</motion.h2>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-4xl md:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-tight">Engenharia <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">De Precisão</span></motion.h1>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex flex-col md:flex-row gap-4 justify-center">
              <a href="https://wa.me/5531999128061?text=Olá,%20vim%20pelo%20site%20da%20RDP%20Engenharia%20e%20gostaria%20de%20um%20orçamento." target="_blank" rel="noopener noreferrer" className="px-8 py-3 md:py-4 bg-engine-primary text-engine-darker font-bold rounded hover:bg-yellow-400 hover:scale-105 transition-all shadow-lg shadow-engine-primary/20 inline-block text-sm md:text-base relative z-20">Solicitar Orçamento</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SEÇÃO DE CLIENTES --- */}
      <section className="relative py-24 bg-engine-darker border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 bg-engine-primary"></span>
              <h3 className="text-engine-primary font-bold tracking-[0.2em] text-sm uppercase">Parceiros Estratégicos</h3>
              <span className="h-px w-8 bg-engine-primary"></span>
            </div>
            <p className="text-white font-bold text-2xl md:text-3xl">Confiança que move grandes indústrias</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[{ name: "Versa Rent a Car", logo: "/image_29.png" }, { name: "Fundação Gorceix", logo: "/image_22.png" }, { name: "Brazil Construction", logo: "/image_15.png" }, { name: "Cidade BH", logo: "/image_38.png" }, { name: "Grupo Emtel", logo: "/image_33.png" }].map((client, index) => (
              <motion.div key={index} whileHover={{ y: -5, borderColor: 'rgba(255, 215, 0, 0.6)', boxShadow: "0 8px 20px -8px rgba(255, 215, 0, 0.2)" }} className="w-52 h-32 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center p-6 border border-white/10 transition-all duration-300 cursor-default group">
                <img src={client.logo} alt={`Logo ${client.name}`} className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.2)] transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SOBRE A EMPRESA --- */}
      <section id="sobre" className="py-24 px-6 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Texto */}
          <div className="flex-1">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-10 bg-engine-primary"></span>
                <span className="text-engine-primary text-xs font-bold uppercase tracking-widest">Sobre Nós</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                Excelência e Reconhecimento Nacional
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                A <strong className="text-white">RDP Engenharia</strong> é referência em engenharia mecânica com ampla experiência em todo o Brasil. Atendemos empresas nacionais e globais, oferecendo serviços de excelência focados em resultado.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Nossa equipe qualificada garante <span className="text-engine-primary">qualidade, eficiência e segurança</span> em cada projeto. Estamos prontos para superar desafios e entregar soluções personalizadas que impulsionam o sucesso da sua indústria.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white/5 rounded border-l-2 border-engine-primary">
                  <h4 className="text-white font-bold text-xl mb-1">+10 Anos</h4>
                  <p className="text-gray-500 text-sm">De Experiência</p>
                </div>
                <div className="p-4 bg-white/5 rounded border-l-2 border-engine-primary">
                  <h4 className="text-white font-bold text-xl mb-1">Nacional</h4>
                  <p className="text-gray-500 text-sm">Atendimento Brasil</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Imagem */}
          <div className="flex-1 w-full relative">
             <motion.div 
               initial={{ opacity: 0, x: 50 }} 
               whileInView={{ opacity: 1, x: 0 }} 
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
             >
                <img src="/sobre-banner.jpg" alt="RDP Engenharia Sobre - Banner" className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* --- ADEQUAÇÃO NR12 --- */}
      <section id="nr12" className="py-32 px-6 bg-engine-darker relative z-10">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 order-2 md:order-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-engine-primary"></span>
              <span className="text-engine-primary text-xs font-bold uppercase tracking-widest">Segurança do Trabalho</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">Adequação NR12 <br/> & Conformidade</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 border-l-2 border-white/10 pl-6">Não corra riscos. Nossos engenheiros blindam sua operação contra multas e acidentes com soluções completas, do laudo à proteção física.</p>
            <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              {["Apreciação de Risco (APR) Completa", "Projetos Mecânicos e Elétricos", "Fabricação de proteções físicas", "Laudo final com ART", "Treinamentos técnicos"].map((item, i) => (
                <motion.li variants={fadeInUp} key={i} className="flex items-center text-gray-300 group">
                  <span className="w-8 h-8 rounded-full bg-engine-primary/10 text-engine-primary flex items-center justify-center mr-4 text-xs group-hover:bg-engine-primary group-hover:text-black transition-colors">✓</span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className="flex-1 w-full order-1 md:order-2">
            <motion.div whileHover={{ scale: 1.02 }} className="relative h-[400px] md:h-[500px] w-full bg-neutral-900 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-engine-primary/10 via-transparent to-transparent"></div>
              <div className="relative z-10 p-12">
                <img src="/image_16.png" alt="Selo NR12 Adequado" className="w-full h-auto drop-shadow-[0_0_25px_rgba(255,215,0,0.3)]" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- CICLO NR12 (METODOLOGIA) COM ÍCONES SVG --- */}
        <div className="mt-32 max-w-7xl mx-auto">
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-engine-primary via-transparent to-transparent"></div>
            <div className="relative z-10 text-center mb-16">
              <span className="text-engine-primary text-xs font-bold uppercase tracking-[0.3em] mb-2 block">Processo Certificado</span>
              <h3 className="text-white font-bold text-2xl md:text-4xl">Metodologia de Adequação</h3>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-engine-primary to-transparent mx-auto mt-6"></div>
            </div>
            
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {[
                { 
                  id: "01", 
                  title: "Apreciação de Riscos", 
                  desc: "Mapeamento completo dos perigos da máquina.",
                  icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg> 
                },
                { 
                  id: "02", 
                  title: "Conceituação Técnica", 
                  desc: "Definição das categorias de segurança (CAT).",
                  icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                },
                { 
                  id: "03", 
                  title: "Projetos Executivos", 
                  desc: "Desenhos elétricos, mecânicos e hidráulicos.",
                  icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                },
                { 
                  id: "04", 
                  title: "Adequação & Instalação", 
                  desc: "Fabricação e montagem das proteções físicas.",
                  icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                },
                { 
                  id: "05", 
                  title: "Capacitação", 
                  desc: "Treinamento operacional e de manutenção.",
                  icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
                },
                { 
                  id: "06", 
                  title: "Validação Final", 
                  desc: "Laudo conclusivo e entrega da ART.",
                  icon: <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                }
              ].map((step, index) => (
                <motion.div key={step.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -5 }} className="group relative w-full max-w-sm cursor-default">
                  <div className="flex items-center gap-6 p-6 bg-engine-darker border border-white/5 rounded-xl hover:border-engine-primary/40 hover:bg-white/5 transition-all duration-300 shadow-lg">
                    <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center">
                       <div className="absolute inset-0 bg-engine-primary/10 group-hover:bg-engine-primary/20 transition-colors" style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}></div>
                       <div className="text-engine-primary relative z-10 group-hover:scale-110 transition-transform">
                          {step.icon}
                       </div>
                    </div>
                    <div>
                      <div className="text-engine-primary text-xs font-bold mb-1">PASSO {step.id}</div>
                      <h4 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-engine-primary transition-colors">{step.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center text-gray-500 text-xs mt-12 border-t border-white/5 pt-8">* Seguimos rigorosamente as etapas exigidas pela Norma Regulamentadora Nº 12 (NR-12) do Ministério do Trabalho.</p>
          </div>
        </div>    
      </section>

      {/* --- LINHA DE VIDA --- */}
      <section id="linhadevida" className="py-32 px-6 bg-[#0a0a0a]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1 w-full h-full">
            <motion.div whileHover={{ scale: 1.02 }} className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <img src="/linha.jpg" alt="Trabalhadores em altura utilizando Linha de Vida Vertical" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute bottom-8 left-8 z-20 bg-engine-primary/90 backdrop-blur-md px-4 py-2 rounded text-engine-darker font-bold text-sm shadow-lg">Execução Certificada</div>
            </motion.div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-engine-primary"></span>
              <span className="text-engine-primary text-xs font-bold uppercase tracking-widest">Trabalho em Altura</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Linhas de Vida <br/> Rígidas e Flexíveis</h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">Projetos focados na viabilidade econômica sem sacrificar a segurança. Sistemas testados e aprovados com rigoroso controle de qualidade para proteção total da sua equipe.</p>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Levantamento Técnico", "Memorial de Cálculo", "Instalação Certificada", "Teste de Arrancamento", "Catálogo Técnico", "Inspeção Periódica"].map((item, i) => (
                <motion.div variants={fadeInUp} whileHover={{ x: 10, borderColor: '#FFD700' }} key={i} className="p-4 bg-white/5 border border-white/5 rounded transition-all cursor-default group">
                  <h4 className="text-gray-300 group-hover:text-white font-medium text-sm flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-engine-primary"></span>{item}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* --- PROJETOS CUSTOMIZADOS --- */}
      <section id="projetos" className="py-24 px-6 bg-engine-darker relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-engine-primary/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Projetos Customizados</h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">Transformamos complexidade em eficiência. Confira nosso fluxo de trabalho detalhado.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-start">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} whileHover={{ scale: 1.05 }} className="w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10 group cursor-default">
              <img src="/image_58.png" alt="Infográfico de Modelagem 3D" className="w-full h-auto object-contain" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} whileHover={{ scale: 1.05 }} className="w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10 group cursor-default">
              <img src="/image_59.png" alt="Infográfico de Otimização" className="w-full h-auto object-contain" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} whileHover={{ scale: 1.05 }} className="w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10 group cursor-default">
              <img src="/image_60.png" alt="Infográfico de Execução" className="w-full h-auto object-contain" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- LAUDOS TÉCNICOS COM ÍCONES SVG --- */}
      <section id="laudos" className="py-24 px-6 bg-[#0a0a0a] relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group"
          >
             <img src="/image_6.png" alt="Engenheiros da RDP realizando análise técnica na fábrica" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </motion.div>

          <div className="flex-1">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center lg:text-left mb-12">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <span className="h-px w-10 bg-engine-primary"></span>
                  <span className="text-engine-primary text-xs font-bold uppercase tracking-widest">Inspeção & Segurança</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Laudos Técnicos</h2>
              <p className="text-gray-400 text-lg">
                Avaliações precisas feitas por engenheiros habilitados. Garantimos a segurança jurídica e operacional da sua empresa através de inspeções rigorosas e laudos conclusivos com ART.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { title: "Máquinas Pesadas", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg> },
                { title: "Pontes Rolantes", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" /></svg> },
                { title: "Içamento de Cargas", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg> },
                { title: "Estruturas Metálicas", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg> },
                { title: "Vasos de Pressão", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
                { title: "Compressores", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg> },
                { title: "Reclassificação de Monta", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg> },
                { title: "PMOC", icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-4 rounded-lg flex items-center gap-4 hover:border-engine-primary/50 transition-all cursor-default h-auto min-h-[80px] group"
                >
                  <div className="text-engine-primary/80 group-hover:text-engine-primary transition-colors flex-shrink-0">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-medium text-sm leading-tight">{item.title}</h3>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center lg:text-left">
               <a href="https://wa.me/5531999128061?text=Olá,%20gostaria%20de%20solicitar%20um%20Laudo%20Técnico." target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-engine-primary text-engine-darker font-bold rounded hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all inline-block">
                 Solicitar Laudo Técnico
               </a>
            </div>
          </div>

        </div>
      </section>
      
      {/* --- FOOTER ATUALIZADO --- */}
      <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-zinc-800 font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            
            {/* COLUNA 1: CONTATO */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">CONTATO</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg><span>(31) 99912-8061</span></li>
                <li><a href="https://share.google/bJ6ulLYwJPFoSD5XW" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-white transition-colors group" title="Ver localização no Google Maps"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white mt-1 flex-shrink-0 group-hover:text-engine-primary transition-colors" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg><span>Belo Horizonte - MG<br/>Atendimento em todo o Brasil</span></a></li>
                <li className="flex items-start gap-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg><span>Seg a Sex: 8:00h às 18h</span></li>
              </ul>
            </div>

            {/* COLUNA 2: MAPA DO SITE */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">MAPA DO SITE</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#nr12" className="hover:text-engine-primary transition-colors">Adequação NR12</a></li>
                <li><a href="#linhadevida" className="hover:text-engine-primary transition-colors">Linhas de Vida</a></li>
                <li><a href="#projetos" className="hover:text-engine-primary transition-colors">Projetos Mecânicos</a></li>
                <li><a href="#laudos" className="hover:text-engine-primary transition-colors">Laudos Técnicos</a></li>
              </ul>
            </div>

            {/* COLUNA 3: CERTIFICAÇÕES */}
            <div>
               <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">CERTIFICAÇÕES</h4>
               <div className="flex flex-col gap-4">
                  {/* CREA */}
                  <div className="flex items-center gap-3">
                     <div className="bg-gray-200 p-1 rounded h-12 w-16 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer overflow-hidden">
                        <img src="/CREA.png" alt="Certificado CREA-MG" className="h-full w-auto object-contain" />
                     </div>
                     <span className="text-xs text-gray-500 max-w-[120px] leading-tight">Empresa registrada no CREA-MG</span>
                  </div>

                  {/* NR-12 */}
                  <div className="flex items-center gap-3">
                     <div className="bg-white/5 p-1 rounded h-12 w-16 flex items-center justify-center border border-white/10 hover:border-engine-primary/50 hover:scale-105 transition-all cursor-pointer overflow-hidden">
                        <img src="/image_16.png" alt="Selo NR-12" className="h-full w-auto object-contain" />
                     </div>
                     <span className="text-xs text-gray-500 max-w-[120px] leading-tight">Adequação NR-12 Certificada</span>
                  </div>

                  {/* NR-11 */}
                  <div className="flex items-center gap-3">
                     <div className="bg-white/5 rounded h-12 w-16 flex items-center justify-center border border-white/10 hover:border-engine-primary/50 hover:scale-105 transition-all cursor-pointer overflow-hidden relative">
                        <img src="/NR11.jpg" alt="Selo NR-11" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                     </div>
                     <span className="text-xs text-gray-500 max-w-[120px] leading-tight">Especialista em NR-11 e Carga</span>
                  </div>
               </div>
            </div>

            {/* COLUNA 4: REDES SOCIAIS */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6">REDES SOCIAIS</h4>
              <ul className="space-y-4 text-sm text-gray-400">
                <li><a href="https://www.instagram.com/rdp.engenharia/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group"><svg className="h-4 w-4 text-white group-hover:text-engine-primary transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg><span>Instagram</span></a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-gray-500 text-center md:text-left">© {new Date().getFullYear()} RDP Engenharia - CNPJ: 21.632.581/0001-54 | <a href="#" className="hover:text-white">Política de Privacidade</a></div>
            <div className="flex flex-col md:flex-row items-center gap-4 text-xs text-gray-500">
              <div className="flex items-center gap-2"><span>Desenvolvido por</span><a href="https://www.linkedin.com/in/raphael-yankous-machado-clemente-7bb750191/" target="_blank" rel="noopener noreferrer" className="font-mono font-bold text-white bg-white/10 px-2 py-1 rounded hover:bg-engine-primary hover:text-black transition-all">&lt; Raphael Yankous /&gt;</a></div>
              <a href="https://wa.me/5531993790633" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-white transition-colors" title="Falar com o Desenvolvedor"><svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>(31) 99379-0633</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- BOTÃO FLUTUANTE --- */}
      <motion.a href="https://wa.me/5531999128061?text=Olá,%20vim%20pelo%20site%20da%20RDP%20Engenharia%20e%20gostaria%20de%20um%20orçamento." target="_blank" rel="noopener noreferrer" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }} whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(37, 211, 102, 0.6)" }} whileTap={{ scale: 0.9 }} className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer group" title="Fale conosco no WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16" className="relative z-10"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
      </motion.a>

    </div>
  );
}

export default App;