import React from 'react'
import { motion } from 'framer-motion'
import { Telescope, Users, Award, Target, Star, Rocket, Globe } from 'lucide-react'

export default function About() {
  const stats = [
    { 
      icon: Telescope, 
      number: '15+', 
      label: 'Anos de Experiência',
      description: 'em astronomia e pesquisa espacial'
    },
    { 
      icon: Users, 
      number: '1000+', 
      label: 'Clientes Atendidos',
      description: 'em projetos de observação e educação'
    },
    { 
      icon: Award, 
      number: '25+', 
      label: 'Prêmios Conquistados',
      description: 'em reconhecimento científico'
    },
    { 
      icon: Star, 
      number: '5000+', 
      label: 'Descobertas Catalogadas',
      description: 'de objetos celestes e fenômenos'
    }
  ]

  const values = [
    {
      icon: Target,
      title: 'Precisão Científica',
      description: 'Utilizamos equipamentos de última geração e metodologias rigorosas para garantir a máxima precisão em nossas observações e análises astronômicas.',
      color: 'from-primary-400 to-primary-600'
    },
    {
      icon: Rocket,
      title: 'Inovação Constante',
      description: 'Estamos sempre na vanguarda da tecnologia espacial, desenvolvendo novas técnicas e ferramentas para explorar os mistérios do universo.',
      color: 'from-accent-400 to-accent-600'
    },
    {
      icon: Globe,
      title: 'Impacto Global',
      description: 'Nossa missão é democratizar o conhecimento astronômico, tornando a ciência espacial acessível a pessoas de todas as idades e backgrounds.',
      color: 'from-secondary-400 to-secondary-600'
    }
  ]

  return (
    <section id="about" className="py-20 bg-secondary-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-stars-pattern opacity-10"></div>
      
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
            Sobre a <span className="gradient-text">Astronaut SA</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Somos uma empresa pioneira em astronomia, dedicada a desvendar os segredos do universo 
            e compartilhar o fascínio pela exploração espacial. Nossa equipe de especialistas 
            combina paixão científica com tecnologia de ponta para oferecer experiências únicas 
            de descoberta e aprendizado sobre o cosmos.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl glass-effect hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-accent-500 mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.h3
                className="text-3xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.h3>
              
              <h4 className="text-lg font-semibold text-white mb-2">{stat.label}</h4>
              <p className="text-sm text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-2xl glass-effect hover-lift"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${value.color} mb-6`}
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
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
          <div className="glass-effect p-8 rounded-2xl max-w-4xl mx-auto">
            <motion.h3
              className="text-2xl font-bold gradient-text mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Nossa Missão
            </motion.h3>
            
            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Inspirar e educar através da exploração espacial, tornando a astronomia acessível 
              e fascinante para todos. Acreditamos que o conhecimento sobre o universo nos conecta 
              como humanidade e nos motiva a buscar respostas para as grandes questões da existência. 
              Cada descoberta é um passo em direção a um futuro onde a exploração espacial 
              beneficia toda a sociedade.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}