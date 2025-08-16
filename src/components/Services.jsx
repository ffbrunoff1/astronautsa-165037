import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Star, Satellite, BookOpen, Users, Camera, Map, Lightbulb } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Telescope,
      title: 'Observação Astronômica',
      description: 'Sessões guiadas de observação do céu noturno com equipamentos profissionais, incluindo telescópios de alta resolução e sistemas de rastreamento automático.',
      features: ['Telescópios profissionais', 'Guias especializados', 'Sessões noturnas', 'Equipamentos de última geração'],
      color: 'from-primary-400 to-primary-600',
      bgColor: 'bg-primary-500/10'
    },
    {
      icon: BookOpen,
      title: 'Educação Espacial',
      description: 'Programas educacionais completos sobre astronomia e ciências espaciais, desenvolvidos para diferentes faixas etárias e níveis de conhecimento.',
      features: ['Cursos personalizados', 'Material didático', 'Certificação', 'Metodologia inovadora'],
      color: 'from-accent-400 to-accent-600',
      bgColor: 'bg-accent-500/10'
    },
    {
      icon: Satellite,
      title: 'Consultoria Espacial',
      description: 'Assessoria especializada em projetos relacionados à exploração espacial, análise de dados astronômicos e desenvolvimento de tecnologias espaciais.',
      features: ['Análise de dados', 'Projetos customizados', 'Tecnologia avançada', 'Relatórios técnicos'],
      color: 'from-secondary-400 to-secondary-600',
      bgColor: 'bg-secondary-500/10'
    },
    {
      icon: Camera,
      title: 'Astrofotografia',
      description: 'Serviços profissionais de captura e processamento de imagens astronômicas, documentando a beleza e complexidade dos objetos celestes.',
      features: ['Equipamentos profissionais', 'Processamento avançado', 'Alta resolução', 'Impressões de qualidade'],
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Users,
      title: 'Eventos Corporativos',
      description: 'Experiências astronômicas únicas para empresas, incluindo team building sob as estrelas e palestras motivacionais sobre exploração espacial.',
      features: ['Eventos personalizados', 'Team building', 'Palestras inspiradoras', 'Experiências memoráveis'],
      color: 'from-orange-400 to-orange-600',
      bgColor: 'bg-orange-500/10'
    },
    {
      icon: Map,
      title: 'Expedições Astronômicas',
      description: 'Viagens organizadas para os melhores locais de observação do mundo, com roteiros planejados para maximizar a experiência astronômica.',
      features: ['Destinos exclusivos', 'Guias especializados', 'Roteiros planejados', 'Grupos reduzidos'],
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Star,
      title: 'Planetário Digital',
      description: 'Experiências imersivas em planetário com tecnologia de projeção 360°, permitindo viagens virtuais pelo cosmos em alta definição.',
      features: ['Projeção 360°', 'Experiência imersiva', 'Tecnologia de ponta', 'Conteúdo exclusivo'],
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: Lightbulb,
      title: 'Pesquisa & Desenvolvimento',
      description: 'Projetos de pesquisa astronômica e desenvolvimento de tecnologias inovadoras para observação e análise de fenômenos espaciais.',
      features: ['Pesquisa aplicada', 'Inovação tecnológica', 'Parcerias acadêmicas', 'Publicações científicas'],
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-yellow-500/10'
    }
  ]

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-20 bg-secondary-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-stars-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Nossos <span className="gradient-text">Serviços</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Oferecemos uma gama completa de serviços especializados em astronomia e exploração espacial, 
            desde observações guiadas até consultoria avançada em tecnologias espaciais.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-2xl glass-effect hover-lift flex flex-col h-full ${service.bgColor}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${service.color} mb-6`}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow leading-relaxed">{service.description}</p>
              
              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-400"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-3 h-3 text-primary-400 mr-2 flex-shrink-0" />
                    {feature}
                  </motion.div>
                ))}
              </div>
              
              <motion.button
                onClick={scrollToContact}
                className={`w-full py-3 px-6 rounded-full bg-gradient-to-r ${service.color} text-white font-semibold hover:shadow-lg transition-all duration-300 mt-auto`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Saber Mais
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass-effect p-8 rounded-2xl">
            <motion.h3
              className="text-2xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Serviços Personalizados
            </motion.h3>
            
            <motion.p
              className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Cada projeto é único e desenvolvemos soluções customizadas para atender às suas necessidades específicas. 
              Entre em contato conosco para discutir como podemos criar uma experiência astronômica 
              verdadeiramente memorável para você ou sua organização.
            </motion.p>
            
            <motion.button
              onClick={scrollToContact}
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-300 cosmic-glow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Orçamento Personalizado
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}