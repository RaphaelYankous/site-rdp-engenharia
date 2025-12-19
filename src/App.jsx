import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, ArrowRight, MapPin, Instagram, Mail, MessageCircle, Ruler, ShieldCheck, HardHat, FileText, Activity, Check, Award } from 'lucide-react';

/* IMAGENS - Certifique-se que estes arquivos estão na pasta /public */
const logo = "/image_a07a1a.png"; 
const creaLogo = "/CREA.png";
const nr11Logo = "/NR11.jpg";
const nr12Logo = "/image_16.png"; 

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const phoneNumber = "5531999128061";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Olá,%20vim%20pelo%20site%20da%20RDP%20Engenharia%20e%20gostaria%20de%20um%20orçamento.`;

  // Dados dos Diferenciais
  const differentials = [
    { title: "NR12 & Segurança", icon: <ShieldCheck />, desc: "Adequação completa e laudos técnicos" },
    { title: "Projetos 3D", icon: <Ruler />, desc: "Modelagem mecânica e simulações" },
    { title: "Linha de Vida", icon: <Activity />, desc: "Projetos e instalação certificada" },
    { title: "Laudos ART", icon: <FileText />, desc: "Segurança jurídica e operacional" }
  ];

  // DADOS DETALHADOS DOS SERVIÇOS
  const services = [
    {
      id: "nr12",
      title: "Adequação à NR12",
      description: "Soluções completas para garantir a segurança de máquinas e equipamentos. Atuamos desde o diagnóstico até a implementação física, garantindo que sua empresa atenda rigorosamente às normas do Ministério do Trabalho sem perder produtividade.",
      icon: <ShieldCheck className="w-6 h-6" />,
      image: "/A-Nova-NR-12.png", 
      highlight: "Conformidade Legal",
      items: [
        "Apreciação de Risco (APR)",
        "Projetos Mecânicos e Elétricos de Segurança",
        "Laudos de Conformidade com ART",
        "Resolução de Notificações / Interdições",
        "Fabricação e instalação de proteções físicas",
        "Treinamentos e Manuais de Operação"
      ]
    },
    {
      id: "linhadevida",
      title: "Linhas de Vida",
      description: "Projetos e instalações de sistemas de ancoragem definitivos ou temporários. Focamos na segurança absoluta para o trabalho em altura, desenvolvendo soluções que se adaptam à estrutura do seu galpão ou edificação.",
      icon: <Activity className="w-6 h-6" />,
      image: "/linha.jpg",
      highlight: "Trabalho em Altura",
      items: [
        "Levantamento técnico e análise estrutural",
        "Projeto de Linha de Vida Rígida e Flexível",
        "Memorial de cálculo detalhado",
        "Fabricação e montagem especializada",
        "Testes de arrancamento (Dinamômetro)",
        "Laudo Técnico de Inspeção Anual"
      ]
    },
    {
      id: "projetos",
      title: "Projetos Mecânicos",
      description: "Transformamos necessidades industriais em realidade. Nossa equipe utiliza softwares de ponta para criar máquinas, dispositivos e estruturas que otimizam seu processo produtivo, reduzem custos e aumentam a eficiência.",
      icon: <HardHat className="w-6 h-6" />,
      image: "/modelagem.png",
      highlight: "Engenharia de Precisão",
      items: [
        "Modelagem 3D e detalhamento 2D para fabricação",
        "Dimensionamento estrutural (Elementos Finitos)",
        "Desenvolvimento de dispositivos de içamento",
        "Otimização de layouts industriais",
        "Retrofitting de máquinas antigas",
        "Acompanhamento de fabricação e montagem"
      ]
    },
    {
      id: "laudos",
      title: "Laudos Técnicos e Inspeções",
      description: "Segurança jurídica e operacional para o seu patrimônio. Nossos laudos são elaborados por engenheiros peritos, oferecendo um diagnóstico preciso sobre a condição real dos seus equipamentos e estruturas.",
      icon: <FileText className="w-6 h-6" />,
      image: "/image_6.png",
      highlight: "Inspeção & Segurança",
      items: [
        "Inspeção de Máquinas Pesadas (Linha Amarela)",
        "Laudos de Pontes Rolantes e Talhas",
        "Inspeção de Vasos de Pressão (NR13)",
        "Laudos de Estruturas Metálicas e Porta-Pallets",
        "Reclassificação de Monta Veicular",
        "Parecer Técnico para Seguradoras"
      ]
    }
  ];

  return (
    <div className="font-sans text-gray-200 bg-zinc-950 selection:bg-brand-primary selection:text-zinc-950 overflow-x-hidden">
      
      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[60] bg-[#25D366] !text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] hover:scale-110 transition duration-300 flex items-center justify-center border border-white/10 animate-bounce-slow"
        title="Falar no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* HEADER */}
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
            {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/ /g, '').replace('ç','c').replace('õ','o')}`} 
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
               className="flex items-center gap-2 bg-transparent border border-brand-primary text-brand-primary px-5 py-2 rounded-md hover:bg-brand-primary hover:text-zinc-950 transition-all duration-300 font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_15px_rgba(255,215,0,0.4)]"
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
            {['Início', 'Sobre', 'Serviços', 'Contato'].map((item) => (
               <a key={item} href={`#${item.toLowerCase().replace(/ /g, '').replace('ç','c').replace('õ','o')}`} onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-white block hover:text-brand-primary">{item}</a>
            ))}
             <a href={whatsappLink} className="text-brand-primary font-bold flex items-center gap-2"><MessageCircle size={18}/> Falar com Engenheiro</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
            <img 
              src="/hero.jpg" 
              alt="Engenharia Industrial" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-zinc-950/70"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950"></div>
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
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
              Segurança Industrial & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">Alta Performance.</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
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
                href="#servicos" 
                className="border border-white/30 bg-black/20 backdrop-blur-sm !text-white px-8 py-4 rounded-md font-bold uppercase tracking-widest text-sm hover:bg-white hover:!text-zinc-950 transition-all duration-300 hover:border-white hover:-translate-y-1"
              >
                Nossos Serviços
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section id="sobre" className="py-20 bg-zinc-950 border-t border-white/5 relative z-10">
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

      {/* SERVIÇOS DETALHADOS */}
      <div id="servicos" className="relative z-10">
        <div className="bg-zinc-950 pt-24 pb-12 border-t border-white/5">
          <div className="container mx-auto px-6 text-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nossas Especialidades</h2>
            <p className="text-lg text-gray-400">
              Conheça em detalhes como podemos elevar o padrão de segurança e eficiência da sua indústria.
            </p>
          </div>
        </div>

        {services.map((service, index) => (
          <section 
            key={service.id} 
            className={`py-20 lg:py-28 border-t border-white/5 overflow-hidden ${index % 2 === 0 ? 'bg-zinc-950' : 'bg-zinc-900/50'}`}
          >
            <div className="container mx-auto px-6">
              <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2 relative group"
                >
                  <div className="absolute -inset-4 bg-brand-primary/5 rounded-xl blur-2xl group-hover:bg-brand-primary/10 transition duration-700"></div>
                  <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-[400px] md:h-[500px] object-cover transition duration-700 ease-in-out transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-brand-primary/10 rounded-lg border border-brand-primary/20 text-brand-primary">
                      {service.icon}
                    </div>
                    <span className="text-brand-primary text-xs font-bold tracking-[0.2em] uppercase bg-brand-primary/5 px-3 py-1 rounded border border-brand-primary/10">
                      {service.highlight}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-2 border-brand-primary/30 pl-6">
                    {service.description}
                  </p>

                  <div className="mb-10">
                    <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-white/20"></span>
                      O que entregamos
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                      {service.items.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 group/item">
                          <Check className="w-5 h-5 text-brand-primary shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                          <span className="text-gray-300 text-sm font-medium leading-snug group-hover/item:text-white transition-colors">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    className="inline-flex items-center gap-3 bg-transparent border border-brand-primary text-brand-primary font-bold px-8 py-4 rounded hover:bg-brand-primary hover:text-zinc-950 transition-all duration-300 uppercase tracking-widest text-xs shadow-[0_0_20px_rgba(255,215,0,0.05)] hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:-translate-y-1"
                  >
                    Solicitar Orçamento <ArrowRight size={16}/>
                  </a>
                </motion.div>

              </div>
            </div>
          </section>
        ))}
      </div>

      {/* PARCEIROS */}
      <section className="py-24 bg-zinc-950 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6 text-center">
            <span className="text-gray-500 uppercase tracking-[0.2em] text-xs font-bold mb-8 block">Parceiros Estratégicos</span>
            <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {["/image_29.png", "/image_22.png", "/image_15.png", "/image_38.png", "/image_33.png"].map((img, idx) => (
                    <img key={idx} src={img} alt="Cliente" className="h-12 w-auto object-contain hover:scale-110 transition duration-300"/>
                ))}
            </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-zinc-950 pt-24 pb-12 border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
            
            {/* Colunas Sobre */}
            <div className="col-span-1 lg:col-span-2">
              <span className="font-bold text-2xl text-white tracking-tighter block mb-4">RDP ENGENHARIA</span>
              <p className="text-gray-400 max-w-sm leading-relaxed text-sm mb-6">
                Referência nacional em adequação NR12 e engenharia mecânica. Segurança, conformidade técnica e eficiência para sua indústria.
              </p>
              
              {/* REDES SOCIAIS / E-MAIL */}
              <div className="flex gap-4 mb-8">
                {/* Botão E-mail (Substituindo LinkedIn) */}
                <a href="mailto:contato@englucasalmeida.com.br" className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center hover:bg-brand-primary hover:text-zinc-950 transition text-gray-400 border border-white/5" title="Enviar E-mail">
                  <Mail size={18} />
                </a>
                {/* Botão Instagram */}
                <a href="https://www.instagram.com/rdp.engenharia/" className="w-10 h-10 rounded bg-zinc-900 flex items-center justify-center hover:bg-[#E1306C] hover:text-white transition text-gray-400 border border-white/5">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Coluna Contato */}
            <div className="lg:col-span-1">
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

            {/* Coluna Links Rápidos */}
            <div className="lg:col-span-1">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Links Rápidos</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#inicio" className="hover:text-white transition block">Início</a></li>
                <li><a href="#servicos" className="hover:text-white transition block">Serviços</a></li>
                <li><a href="#sobre" className="hover:text-white transition block">Sobre</a></li>
                <li><a href="#contato" className="hover:text-white transition block">Contato</a></li>
              </ul>
            </div>

            {/* Coluna Certificações */}
            <div className="lg:col-span-1">
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest flex items-center gap-2">
                  <Award size={16} className="text-brand-primary" />
                  Certificações
              </h4>
              <div className="flex flex-col gap-4">
                  {/* CREA */}
                  <div className="bg-white/5 p-2 rounded border border-white/10 flex items-center gap-3 hover:border-brand-primary/50 transition">
                      <img src={creaLogo} alt="CREA MG" className="h-10 w-auto object-contain" />
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">CREA-MG</span>
                  </div>

                  {/* NR12 */}
                  <div className="bg-white/5 p-2 rounded border border-white/10 flex items-center gap-3 hover:border-brand-primary/50 transition">
                      <img src={nr12Logo} alt="NR12" className="h-10 w-auto object-contain rounded" />
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">NR12</span>
                  </div>

                  {/* NR11 */}
                  <div className="bg-white/5 p-2 rounded border border-white/10 flex items-center gap-3 hover:border-brand-primary/50 transition">
                      <img src={nr11Logo} alt="NR11" className="h-10 w-auto object-contain rounded" />
                      <span className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">NR11</span>
                  </div>
              </div>
            </div>
            
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} RDP Soluções de Engenharia © 2023 - Todos os direitos reservados CNPJ: 21.632.581/0001-54
            </p>
          </div>
                    <div className="mt-8 md:mt-0 md:absolute md:right-6 flex flex-col items-center md:items-end gap-1">
              <span className="text-[10px] uppercase tracking-widest text-gray-600">Desenvolvido por</span>
              <a 
                href="https://www.linkedin.com/in/raphael-yankous-machado-clemente-7bb750191/"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-sm text-gray-400 hover:text-white transition-colors font-bold tracking-tight"
                style={{ fontFamily: 'monospace' }}
              >
                {`< Raphael Yankous />`}
              </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
