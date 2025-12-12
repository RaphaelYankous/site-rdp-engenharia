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
      
      {/* --- NAVBAR (LOGO OCUPANDO ALTURA TOTAL) --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full z-50 bg-engine-darker/90 backdrop-blur-md border-b border-white/5"
      >
        {/* h-20 define a altura da barra (80px) */}
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO: h-full faz ela ter os mesmos 80px da barra */}
          <div className="flex items-center cursor-pointer h-full">
             <img 
               src="/image_a07a1a.png" 
               alt="RDP Engenharia Logo" 
               className="h-full w-auto object-contain hover:opacity-80 transition-opacity" 
             />
          </div>

          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            {['NR12', 'Linha de Vida', 'Projetos', 'Laudos'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/ /g, '')}`} className="hover:text-engine-primary hover:scale-105 transition-all">
                {item}
              </a>
            ))}
          </div>
          
          {/* BOTÃO NAVBAR - LINK PARA WHATSAPP */}
          <a 
            href="https://wa.me/5531999128061"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-engine-primary text-engine-darker font-bold text-sm rounded hover:bg-yellow-400 hover:shadow-[0_0_15px_rgba(255,215,0,0.3)] transition-all flex items-center justify-center"
          >
            Falar com Engenheiro
          </a>
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
              {/* BOTÃO HERO - LINK PARA WHATSAPP */}
              <a 
                href="https://wa.me/5531999128061"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-engine-primary text-engine-darker font-bold rounded hover:bg-yellow-400 hover:scale-105 transition-all shadow-lg shadow-engine-primary/20 inline-block"
              >
                Solicitar Orçamento
              </a>
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
          SERVIÇO 2: LINHA DE VIDA (FOTO REAL)
      ========================================= */}
      <section id="linhadevida" className="py-32 px-6 bg-[#0a0a0a]">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20"
        >
          
          {/* --- COLUNA ESQUERDA: FOTO REAL IMPACTANTE --- */}
          <div className="flex-1 w-full h-full">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group"
            >
              {/* Overlay gradiente para dar estilo e legibilidade se quiser por texto em cima */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              
              {/* A FOTO REAL AQUI */}
              <img 
                src="/linha.jpg" 
                alt="Trabalhadores em altura utilizando Linha de Vida Vertical" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Tag Flutuante (Opcional - dá um charme) */}
              <div className="absolute bottom-8 left-8 z-20 bg-engine-primary/90 backdrop-blur-md px-4 py-2 rounded text-engine-darker font-bold text-sm shadow-lg">
                Execução Certificada
              </div>
            </motion.div>
          </div>

          {/* --- COLUNA DIREITA: TEXTO TÉCNICO --- */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-engine-primary"></span>
              <span className="text-engine-primary text-xs font-bold uppercase tracking-widest">Trabalho em Altura</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Linhas de Vida <br/> Rígidas e Flexíveis
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              Projetos focados na viabilidade econômica sem sacrificar a segurança. Sistemas testados e aprovados com rigoroso controle de qualidade para proteção total da sua equipe.
            </p>

            {/* Lista de Detalhes */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                "Levantamento Técnico", 
                "Memorial de Cálculo", 
                "Instalação Certificada", 
                "Teste de Arrancamento", 
                "Catálogo Técnico", 
                "Inspeção Periódica"
              ].map((item, i) => (
                <motion.div 
                  variants={fadeInUp}
                  whileHover={{ x: 10, borderColor: '#FFD700' }}
                  key={i} 
                  className="p-4 bg-white/5 border border-white/5 rounded transition-all cursor-default group"
                >
                  <h4 className="text-gray-300 group-hover:text-white font-medium text-sm flex items-center gap-3">
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
          SERVIÇO 3: PROJETOS CUSTOMIZADOS (TAMANHO COMPACTO E NÍTIDO)
      ========================================= */}
      <section id="projetos" className="py-24 px-6 bg-engine-darker relative overflow-hidden">
        
        {/* Linha decorativa no topo */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-engine-primary/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Cabeçalho da Seção */}
          <div className="text-center mb-16">
            <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Projetos Customizados
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Transformamos complexidade em eficiência. Confira nosso fluxo de trabalho detalhado.
                </p>
            </motion.div>
          </div>

          {/* Grid com as 3 Imagens - AGORA BEM MENORES (max-w-xs) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-start">
            
            {/* Painel 1: Modelagem 3D */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10 group cursor-default"
            >
              <img 
                src="/image_58.png" 
                alt="Infográfico de Modelagem 3D" 
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Painel 2: Otimização */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10 group cursor-default"
            >
              <img 
                src="/image_59.png" 
                alt="Infográfico de Otimização" 
                className="w-full h-auto object-contain"
              />
            </motion.div>

            {/* Painel 3: Para Fábrica */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              className="w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-2xl border border-white/10 group cursor-default"
            >
              <img 
                src="/image_60.png" 
                alt="Infográfico de Execução" 
                className="w-full h-auto object-contain"
              />
            </motion.div>

          </div>
        </div>
      </section>
      
      {/* --- FOOTER (CORRIGIDO) --- */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Coluna 1: Logo e Sobre (OCUPA 2 ESPAÇOS) */}
            <div className="col-span-1 md:col-span-2">
              
              {/* LOGO NO RODAPÉ */}
              <div className="mb-6">
                <img 
                  src="/image_a07a1a.png" 
                  alt="RDP Engenharia Logo" 
                  className="w-40 h-auto object-contain" 
                />
              </div>

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

            {/* Coluna 2: Navegação (OCUPA 1 ESPAÇO) */}
            <div>
              <h4 className="text-white font-bold mb-6">Navegação</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#nr12" className="hover:text-engine-primary transition-colors">Adequação NR12</a></li>
                <li><a href="#linhadevida" className="hover:text-engine-primary transition-colors">Linhas de Vida</a></li>
                <li><a href="#projetos" className="hover:text-engine-primary transition-colors">Projetos Mecânicos</a></li>
                <li><a href="#laudos" className="hover:text-engine-primary transition-colors">Laudos Técnicos</a></li>
              </ul>
            </div>
            
            {/* Coluna 3: Certificações (OCUPA 1 ESPAÇO) */}
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

      {/* --- BOTÃO FLUTUANTE WHATSAPP --- */}
      <motion.a
        href="https://wa.me/5531999128061?text=Olá,%20vim%20pelo%20site%20da%20RDP%20Engenharia%20e%20gostaria%20de%20um%20orçamento."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 25px rgba(37, 211, 102, 0.6)" }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer group"
        title="Fale conosco no WhatsApp"
      >
        
        {/* Ícone SVG */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          fill="currentColor" 
          viewBox="0 0 16 16"
          className="relative z-10"
        >
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </motion.a>

    </div>
  );
}

export default App;