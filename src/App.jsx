import React from 'react';
import { motion } from 'framer-motion';

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
  return (
    <div className="min-h-screen bg-engine-darker text-engine-light font-sans selection:bg-engine-primary selection:text-engine-darker overflow-x-hidden">
      
      {/* --- NAVBAR (Fixo com Blur) --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full z-50 bg-engine-darker/80 backdrop-blur-md border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter cursor-pointer hover:text-white transition-colors">
            RDP<span className="text-engine-primary">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {['NR12', 'Linha de Vida', 'Projetos', 'Laudos'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, '')}`} className="hover:text-engine-primary hover:scale-105 transition-all">
                {item}
              </a>
            ))}
          </div>
          <button className="px-5 py-2 bg-engine-primary text-engine-darker font-bold text-sm rounded hover:bg-yellow-400 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all">
            Falar com Engenheiro
          </button>
        </div>
      </motion.nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(#FFD700 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-engine-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-engine-primary font-medium tracking-[0.2em] text-sm uppercase mb-6"
            >
              Soluções Industriais & Segurança
            </motion.h2>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-tight"
            >
              Engenharia <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                De Precisão
              </span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >
              <button className="px-10 py-4 bg-engine-primary text-engine-darker font-bold rounded hover:bg-yellow-400 hover:scale-105 transition-all shadow-lg shadow-engine-primary/20">
                Solicitar Orçamento
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

{/* --- SEÇÃO DE CLIENTES (REDESIGN SOFISTICADO) --- */}
      <section className="relative py-24 bg-engine-darker border-b border-white/5 overflow-hidden">
        
        {/* Efeito de Fundo: Textura Sutil de Micro-pontos */}
        <div className="absolute inset-0 opacity-[0.03]"
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>
        
        {/* Efeito de Luz de Fundo (Spotlight Mais Suave) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-engine-primary/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-px w-8 bg-engine-primary"></span>
              <h3 className="text-engine-primary font-bold tracking-[0.2em] text-sm uppercase">
                Parceiros Estratégicos
              </h3>
              <span className="h-px w-8 bg-engine-primary"></span>
            </div>
            <p className="text-white font-bold text-2xl md:text-3xl">
              Confiança que move grandes indústrias
            </p>
          </div>
          
          {/* Grid de Logos - Cartões Translúcidos "Efeito Vidro" */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { name: "Versa Rent a Car", logo: "/image_29.png" },
              { name: "Fundação Gorceix", logo: "/image_22.png" },
              { name: "Brazil Construction", logo: "/image_15.png" },
              { name: "Cidade BH", logo: "/image_38.png" },
              { name: "Grupo Emtel", logo: "/image_33.png" }
            ].map((client, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5, borderColor: 'rgba(255, 215, 0, 0.6)', boxShadow: "0 8px 20px -8px rgba(255, 215, 0, 0.2)" }}
                className="w-52 h-32 bg-white/5 backdrop-blur-sm rounded-xl flex items-center justify-center p-6 border border-white/10 transition-all duration-300 cursor-default group"
              >
                {/* O logo em si, com um leve brilho no hover do pai */}
                <img 
                  src={client.logo} 
                  alt={`Logo ${client.name}`} 
                  className="max-h-full max-w-full object-contain filter drop-shadow-sm group-hover:drop-shadow-[0_0_5px_rgba(255,215,0,0.2)] transition-all"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SERVIÇO 1: ADEQUAÇÃO NR12
      ========================================= */}
      <section id="nr12" className="py-32 px-6 bg-engine-darker relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20"
        >
          
          <div className="flex-1 order-2 md:order-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-engine-primary"></span>
              <span className="text-engine-primary text-xs font-bold uppercase tracking-widest">Segurança do Trabalho</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Adequação NR12 <br/> & Conformidade
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 border-l-2 border-white/10 pl-6">
              Não corra riscos. Nossos engenheiros blindam sua operação contra multas e acidentes com soluções completas, do laudo à proteção física.
            </p>
            
            <motion.ul variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
              {[
                "Apreciação de Risco (APR) Completa", "Projetos Mecânicos e Elétricos", "Fabricação de proteções físicas", "Laudo final com ART", "Treinamentos técnicos"
              ].map((item, i) => (
                <motion.li variants={fadeInUp} key={i} className="flex items-center text-gray-300 group">
                  <span className="w-8 h-8 rounded-full bg-engine-primary/10 text-engine-primary flex items-center justify-center mr-4 text-xs group-hover:bg-engine-primary group-hover:text-black transition-colors">✓</span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="flex-1 w-full order-1 md:order-2">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-[500px] w-full bg-neutral-900 rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-engine-primary/10 via-transparent to-transparent"></div>
              
              {/* --- IMAGEM DO SELO NR12 NA SEÇÃO --- */}
              <div className="relative z-10 p-12">
                <img 
                  src="/image_16.png" 
                  alt="Selo NR12 Adequado" 
                  className="w-full h-auto drop-shadow-[0_0_25px_rgba(255,215,0,0.3)]"
                />
              </div>

            </motion.div>
          </div>
        </motion.div>

{/* --- CICLO NR12 (DESIGN PROFISSIONAL "HIGH-TECH") --- */}
        <div className="mt-32 max-w-7xl mx-auto">
          
          {/* Painel Container com Efeito de Vidro e Borda Técnica */}
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-16 overflow-hidden">
            
            {/* Background Decorativo do Painel */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-engine-primary via-transparent to-transparent"></div>
            
            {/* Cabeçalho do Painel */}
            <div className="relative z-10 text-center mb-16">
              <span className="text-engine-primary text-xs font-bold uppercase tracking-[0.3em] mb-2 block">
                Processo Certificado
              </span>
              <h3 className="text-white font-bold text-3xl md:text-4xl">
                Metodologia de Adequação
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-engine-primary to-transparent mx-auto mt-6"></div>
            </div>

            {/* Grid de Steps */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {[
                { id: "01", title: "Apreciação de Riscos", icon: "🔍", desc: "Mapeamento completo dos perigos da máquina." },
                { id: "02", title: "Conceituação Técnica", icon: "📝", desc: "Definição das categorias de segurança (CAT)." },
                { id: "03", title: "Projetos Executivos", icon: "📐", desc: "Desenhos elétricos, mecânicos e hidráulicos." },
                { id: "04", title: "Adequação & Instalação", icon: "⚙️", desc: "Fabricação e montagem das proteções físicas." },
                { id: "05", title: "Capacitação", icon: "🎓", desc: "Treinamento operacional e de manutenção." },
                { id: "06", title: "Validação Final", icon: "✅", desc: "Laudo conclusivo e entrega da ART." },
              ].map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative w-full max-w-sm cursor-default"
                >
                  {/* Card Hexagonal Estilizado */}
                  <div className="flex items-center gap-6 p-6 bg-engine-darker border border-white/5 rounded-xl hover:border-engine-primary/40 hover:bg-white/5 transition-all duration-300 shadow-lg">
                    
                    {/* Ícone Hexagonal */}
                    <div className="relative flex-shrink-0 w-16 h-16 flex items-center justify-center">
                       <div className="absolute inset-0 bg-engine-primary/10 group-hover:bg-engine-primary/20 transition-colors" 
                            style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}>
                       </div>
                       <span className="text-2xl relative z-10">{step.icon}</span>
                    </div>

                    {/* Textos */}
                    <div>
                      <div className="text-engine-primary text-xs font-bold mb-1">PASSO {step.id}</div>
                      <h4 className="text-white font-bold text-lg leading-tight mb-2 group-hover:text-engine-primary transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-gray-500 text-xs leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Rodapé do Painel */}
            <p className="text-center text-gray-500 text-xs mt-12 border-t border-white/5 pt-8">
              * Seguimos rigorosamente as etapas exigidas pela Norma Regulamentadora Nº 12 (NR-12) do Ministério do Trabalho.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SERVIÇO 2: LINHA DE VIDA
      ========================================= */}
      <section id="linhadevida" className="py-32 px-6 bg-[#0a0a0a]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20"
        >
          <div className="flex-1 w-full">
            <motion.div 
              whileHover={{ scale: 1.02, rotate: -1 }}
              className="relative h-[600px] w-full bg-neutral-800 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              <div className="absolute bottom-10 left-10 z-20">
                <div className="text-5xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-gray-400 uppercase tracking-widest">Segurança Certificada</div>
              </div>
              <span className="text-7xl relative z-0 group-hover:scale-110 transition-transform duration-700">🏗️</span>
            </motion.div>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-engine-primary"></span>
              <span className="text-engine-primary text-xs font-bold uppercase tracking-widest">Trabalho em Altura</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Linhas de Vida <br/> Rígidas e Flexíveis
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Projetos focados na viabilidade econômica sem sacrificar a segurança. Sistemas testados e aprovados com rigoroso controle de qualidade.
            </p>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                "Levantamento Técnico", "Memorial de Cálculo", "Instalação Certificada", "Teste de Arrancamento", "Catálogo Técnico", "Inspeção Periódica"
              ].map((item, i) => (
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ x: 10, borderColor: '#FFD700' }}
                  key={i} 
                  className="p-5 bg-white/5 border border-white/5 rounded transition-all cursor-default"
                >
                  <h4 className="text-white font-medium text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-engine-primary"></span>
                    {item}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          SERVIÇO 3: PROJETOS MECÂNICOS
      ========================================= */}
      <section id="projetos" className="py-32 px-6 bg-engine-darker relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-engine-primary/50 to-transparent"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Projetos Customizados
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Transformamos complexidade em eficiência. Do esboço à fabricação, entregamos a solução completa em 3D e 2D.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: "⚙️", title: "Modelagem 3D", desc: "Antecipe erros e visualize o produto final com precisão milimétrica." },
              { icon: "📉", title: "Otimização", desc: "Redução inteligente de custos e materiais sem perder resistência." },
              { icon: "🏭", title: "Para Fábrica", desc: "Desenhos técnicos claros para execução imediata no chão de fábrica." }
            ].map((card, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="p-10 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-engine-primary/30 hover:shadow-2xl hover:shadow-engine-primary/5 transition-all group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-engine-primary transition-colors">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SERVIÇO 4: LAUDOS TÉCNICOS
      ========================================= */}
      <section id="laudos" className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h3 className="text-engine-primary font-medium tracking-widest text-sm uppercase mb-2">Engenharia Legal</h3>
              <h2 className="text-4xl font-bold text-white">Laudos Técnicos</h2>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 mt-4 md:mt-0"
            >
              Registro CREA e ART inclusos em todos os serviços.
            </motion.p>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: "Pontes Rolantes", desc: "Inspeção de trilhos, vigas e sistemas de içamento." },
              { title: "Estruturas Metálicas", desc: "Análise de corrosão, deformações e soldas." },
              { title: "Máquinas Pesadas", desc: "Avaliação de integridade para linha amarela." },
              { title: "Reclassificação de Monta", desc: "Laudos para regularização de veículos sinistrados." },
              { title: "Compressores (NR13)", desc: "Teste hidrostático e inspeção de vasos de pressão." },
              { title: "Laudo de Conformidade", desc: "Documento conclusivo para fiscalização do trabalho." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.03)" }}
                className="p-8 bg-engine-darker rounded-xl border-l-4 border-engine-primary shadow-lg cursor-pointer"
              >
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

{/* --- FOOTER (ATUALIZADO COM 3 CERTIFICAÇÕES) --- */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Coluna 1: Sobre */}
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tighter">
                RDP<span className="text-engine-primary">.</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
                Soluções de engenharia mecânica e segurança do trabalho focadas em reduzir custos e salvar vidas.
              </p>
              <div className="flex gap-4">
                {['LinkedIn', 'Instagram', 'WhatsApp'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-gray-400 hover:bg-engine-primary hover:text-black transition-colors text-xs font-bold">
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Coluna 2: Navegação */}
            <div>
              <h4 className="text-white font-bold mb-6">Navegação</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#nr12" className="hover:text-engine-primary transition-colors">Adequação NR12</a></li>
                <li><a href="#linhadevida" className="hover:text-engine-primary transition-colors">Linhas de Vida</a></li>
                <li><a href="#projetos" className="hover:text-engine-primary transition-colors">Projetos Mecânicos</a></li>
                <li><a href="#laudos" className="hover:text-engine-primary transition-colors">Laudos Técnicos</a></li>
              </ul>
            </div>
            
            {/* Coluna 3: Certificações (AGORA COM OS 3 SELOS) */}
            <div>
              <h4 className="text-white font-bold mb-6">Certificações</h4>
              <div className="flex flex-col gap-3">
                
                {/* 1. Selo NR-12 */}
                <div className="flex items-center gap-3 p-2 bg-white/5 rounded-lg border border-white/5 hover:border-engine-primary/30 transition-colors cursor-default">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded overflow-hidden">
                        <img src="/image_16.png" alt="NR12" className="w-full h-full object-contain" />
                    </div>
                    <div>
                        <p className="text-white font-bold text-xs">NR-12 Adequado</p>
                        <p className="text-[10px] text-engine-primary">Segurança em Máquinas</p>
                    </div>
                </div>

                {/* 2. Selo NR-11 */}
                <div className="flex items-center gap-3 p-2 bg-white/5 rounded-lg border border-white/5 hover:border-engine-primary/30 transition-colors cursor-default">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded overflow-hidden bg-white/10">
                        <img src="/NR11.jpg" alt="NR11" className="w-full h-full object-contain mix-blend-screen" />
                    </div>
                    <div>
                        <p className="text-white font-bold text-xs">NR-11 Transporte</p>
                        <p className="text-[10px] text-engine-primary">Movimentação de Cargas</p>
                    </div>
                </div>

                {/* 3. Selo CREA */}
                <div className="flex items-center gap-3 p-2 bg-white/5 rounded-lg border border-white/5 hover:border-engine-primary/30 transition-colors cursor-default">
                    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded overflow-hidden bg-white p-0.5">
                        <img src="/CREA.png" alt="CREA" className="w-full h-full object-contain" />
                    </div>
                    <div>
                        <p className="text-white font-bold text-xs">CREA-MG</p>
                        <p className="text-[10px] text-engine-primary">Engenharia Certificada</p>
                    </div>
                </div>

              </div>
            </div>

          </div>
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <p>© 2025 RDP Engenharia. Todos os direitos reservados.</p>
            <p>CNPJ: 21.632.581/0001-54</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;