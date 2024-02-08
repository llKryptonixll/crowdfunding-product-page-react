import { motion } from "framer-motion"

const About_Article = () => {

  const animations = {
    header: {
      initial: { letterSpacing: "20px", opacity: 0 },
      whileInView: { letterSpacing: "0", opacity: 1 },
      transition: { duration: 1, delay: 1 },
      viewport: { once: true }
    },
    paragraph: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 1, delay: 1.5 },
      viewport: { once: true }
    }
  }

  return (
    <article className='grid gap-10'>
      <motion.h2 {...animations.header} className='text-xl font-bold text-black'>About this project</motion.h2>
      <motion.p {...animations.paragraph} className='text-dark_gray'>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
        to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
        your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
      </motion.p>
      <motion.p {...animations.paragraph} className='text-dark_gray'>
        Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
        to allow notepads, pens, and USB sticks to be stored under the stand.
      </motion.p>
    </article>
  )
}

export default About_Article