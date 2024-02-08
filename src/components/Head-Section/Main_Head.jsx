import { useState, useContext } from "react"
import LogicContext from "../../context/LogicContext"
import { motion } from "framer-motion"

const Main_Head = ({ mainCardStyles }) => {
    const [isBookmarked, setIsBookmarked] = useState(false)

    function toggleBookmark() {
        setIsBookmarked(!isBookmarked)
    }

    const { openModal } = useContext(LogicContext)

    const mainButtonStyles = "bg-moderate_cyan text-white rounded-full font-bold max-w-[200px] w-full hover:bg-dark_cyan transition-colors"
    const animations = {
        logo: {
            initial: { left: 0, rotate: 90 },
            whileInView: { left: "auto", rotate: 360 },
            transition: { duration: 0.5 },
            viewport: { once: true }
        },
        header: {
            initial: { opacity: 0, scale: 0 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { duration: 0.5, delay: 0.5 },
            viewport: { once: true }
        },
        buttonLeft: {
            initial: { opacity: 0, scaleX: 0 },
            whileInView: { opacity: 1, scaleX: 1 },
            transition: { duration: 0.5, delay: 1 },
            viewport: { once: true }
        },
        buttonRight: {
            initial: { opacity: 0, scaleX: 0 },
            whileInView: { opacity: 1, scaleX: 1 },
            transition: { duration: 0.5, delay: 1 },
            viewport: { once: true }
        }
    }

    return (
        <section className={`${mainCardStyles} grid gap-6 content-center relative`}>
            <motion.img {...animations.logo} className='absolute top-[-27px] justify-self-center' src="assets/images/logo-mastercraft.svg" alt="mastercraft-company-logo" />
            <motion.header {...animations.header} className='text-center grid gap-4'>
                <h1 className='font-bold text-black sm:text-[1.7rem] text-2xl'>Mastercraft Bamboo Monitor Riser</h1>
                <p className='text-dark_gray'>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
            </motion.header>
            <div className='flex items-center space-x-3 justify-center sm:justify-between'>
                <motion.button {...animations.buttonLeft} onClick={openModal} className={`${mainButtonStyles} h-[55px] origin-left`}>Back this project</motion.button>
                <motion.button {...animations.buttonRight} onClick={toggleBookmark} className='flex items-center origin-right sm:bg-dark_gray sm:bg-opacity-10 sm:w-[200px] w-auto rounded-full space-x-4'>
                    <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="evenodd"><circle fill={`${isBookmarked === true ? '#147b74' : "#2F2F2F"}`} cx="28" cy="28" r="28" />
                            <path fill={`${isBookmarked === true ? '#FFFFFF' : "#B1B1B1"}`} d="M23 19v18l5-5.058L33 37V19z" />
                        </g>
                    </svg>
                    <span className={`${isBookmarked === true ? "text-dark_cyan" : "text-dark_gray"} font-bold sm:block hidden`}>{isBookmarked === true ? "Bookmarked" : "Bookmark"}</span>
                </motion.button>
            </div>
        </section>
    )
}

export default Main_Head