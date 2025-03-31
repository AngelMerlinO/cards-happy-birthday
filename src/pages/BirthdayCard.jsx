import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import pairImage from '../assets/pair.jpg'
import polaroidImage from '../assets/pair.jpg'


const cardsData = [
  {
    nombre: 'Amor',
    imageHeader: pairImage,
    polaroidImage: polaroidImage,
    titulo: 'Mon amour ✨',
    textoIntro: 'No podía dejar pasar tu día sin dedicarte unas palabras...',
    textoCuerpo: 'Eres mi persona favorita...',
    textoCierre: 'Gracias por existir en mi vida 💖',
  },
  {
    nombre: 'Juan',
    imageHeader: pairImage,
    polaroidImage: polaroidImage,
    titulo: '¡Feliz Cumpleaños!',
    textoIntro: 'Hola mi niño...',
    textoCuerpo: 'Quiero recordarte lo importante que eres para mí...',
    textoCierre: 'Te quiero montones, mi niño 🌙',
  },
]


const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      stiffness: 70,
      damping: 12,
    },
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.4 },
  }),
}

const swipeConfidenceThreshold = 100
const swipePower = (offset, velocity) => Math.abs(offset) * velocity

export default function BirthdayCarousel() {
  const [[page, direction], setPage] = useState([0, 0])
  const index = ((page % cardsData.length) + cardsData.length) % cardsData.length
  const card = cardsData[index]

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection])
  }

  const handleClick = (e) => {
    const { offsetWidth } = e.currentTarget
    const x = e.clientX
    if (x < offsetWidth / 2) paginate(-1)
    else paginate(1)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-screen h-screen bg-[#1d1d21] text-white flex items-center justify-center overflow-hidden"
      onClick={handleClick}
    >
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={page}
          className="
            relative 
            w-[95%] 
            max-w-md 
            md:max-w-2xl 
            h-auto 
            md:h-[90%] 
            bg-[#fefffe] 
            text-gray-800 
            rounded-xl 
            shadow-2xl 
            flex 
            flex-col 
            items-center 
            justify-start 
            overflow-hidden
          "
          style={{ cursor: 'grab' }}
          variants={variants}
          custom={direction}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x)
            if (swipe < -swipeConfidenceThreshold) paginate(1)
            else if (swipe > swipeConfidenceThreshold) paginate(-1)
          }}
        >
          {/* Encabezado con imagen */}
          <div
            className="w-full h-48 md:h-64 bg-center bg-cover relative"
            style={{ backgroundImage: `url(${card.imageHeader})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h2 className="text-white text-2xl md:text-3xl font-extrabold italic tracking-widest drop-shadow-md px-4">
                {card.titulo}
              </h2>
            </div>
          </div>

          {/* Cuerpo de carta */}
          <div className="flex-1 w-full overflow-y-auto p-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl md:text-4xl font-extrabold italic text-pink-600 tracking-wide mb-4"
            >
              ¡Feliz cumpleaños, {card.nombre}!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-sm md:text-base font-normal italic text-gray-700 leading-relaxed px-2 mb-6"
            >
              {card.textoIntro}
            </motion.p>

            {/* Imagen polaroid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="
                relative 
                w-48 
                h-60 
                md:w-60 
                md:h-72 
                bg-white 
                border 
                border-gray-300 
                shadow-lg 
                mx-auto 
                p-2 
                rounded-md 
                mb-6
              "
              style={{ transform: 'rotate(-2deg)' }}
              whileHover={{ scale: 1.05, rotate: 0 }}
            >
              <img
                src={card.polaroidImage}
                alt="Recuerdo especial"
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 text-center p-1 text-xs font-medium italic">
                Recuerdo de nosotros 💕
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-sm md:text-lg font-normal italic text-gray-800 leading-relaxed px-2 mb-4"
            >
              {card.textoCuerpo}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-right text-xs md:text-base italic font-normal text-gray-500 mt-6 pr-4"
            >
              {card.textoCierre}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  )
}
