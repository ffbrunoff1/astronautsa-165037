import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Star, Globe, ArrowRight, Eye } from 'lucide-react'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const floatingElements = [
    { icon: Star, delay: 0, duration: 4, x: '10%', y: '20%' },
    { icon: Globe, delay: 1, duration: 5, x: '80%', y: '30%' },
    { icon: Eye, delay: 2, duration: 6, x: '15%', y: '70%' },
    { icon: Rocket, delay: 0.5, duration: 4.5, x: '85%', y: '60%' }
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cosmic-gradient">
      <div className="absolute inset-0 bg-stars-pattern opacity-30"></div>
      
      {floatingElements.map((Element, index) => (
        <motion.div
          key={index}
          className="absolute text-white/20"
          style={{ left: Element.x, top: Element.y }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: Element.duration,
            delay: Element.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Element.icon className="w-8 h-8 lg:w-12 lg:h-12" />
        </motion.div>
      ))}

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore os
              <span className="block gradient-text text-shadow">
                Mistérios do Universo
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              A Astronaut SA é sua porta de entrada para o cosmos. Descubra os segredos das estrelas, 
              planetas e galáxias distantes através de nossa expertise em astronomia e exploração espacial.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-primary-600 hover:to-accent-600 transition-all duration-300 flex items-center justify-center gap-2 cosmic-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Comece sua Jornada
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                onClick={scrollToAbout}
                className="border-2 border-primary-400 text-primary-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary-400 hover:text-secondary-900 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Saiba Mais
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-400/30 to-accent-500/30 blur-3xl"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.div
                className="relative z-10 w-full h-full rounded-full glass-effect p-8 flex items-center justify-center"
                animate={{ 
                  y: [0, -20, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="w-24 h-24 text-primary-400 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold gradient-text">Explore</h3>
                  <p className="text-gray-300">o Cosmos</p>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-4 right-4 w-4 h-4 bg-accent-400 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.div
                className="absolute bottom-8 left-8 w-3 h-3 bg-primary-400 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}