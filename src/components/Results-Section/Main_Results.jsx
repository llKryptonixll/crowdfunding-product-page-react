import { useContext } from 'react'
import LogicContext from '../../context/LogicContext'
import { motion } from 'framer-motion'
import "./progress_bar.css"

const Main_Results = ({ mainCardStyles }) => {
    const {pledgeAmount, bakers} = useContext(LogicContext);

    const resultHeaderStyles = "font-bold text-black text-4xl"
    const resultSubHeaderStyles = "text-dark_gray"
    const afterBefore_borderStyles = `
        after:content-[""] after:bg-dark_gray after:w-[50%] after:justify-self-center after:h-[1px] after:m-4 after:bg-opacity-50 md:after:content-none
        before:content-[""] before:bg-dark_gray before:w-[50%] before:justify-self-center before:h-[1px] before:m-4 before:bg-opacity-50 md:before:content-none
    `
    const animations = {
        all: {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true }
        }
    }

    return (
        <section className={`${mainCardStyles} grid gap-8`}>
            <div className='md:flex grid md:justify-self-start md:text-start text-center justify-self-center'>
                <motion.div {...animations.all} transition={{ duration: 1, delay: 1.2}} className='grid gap-2 md:w-fit md:pr-12'>
                    <span className={resultHeaderStyles}>${pledgeAmount}</span>
                    <span className={resultSubHeaderStyles}>of $100,000 backed</span>
                </motion.div>
                <motion.div {...animations.all} transition={{ duration: 1, delay: 1.7}} className={`${afterBefore_borderStyles} grid gap-2 md:w-fit md:pl-12 md:pr-12 md:border-l-[1px] md:border-r-[1px]`}>
                    <span className={resultHeaderStyles}>{bakers}</span>
                    <span className={resultSubHeaderStyles}>total backers</span>
                </motion.div>
                <motion.div {...animations.all} transition={{ duration: 1, delay: 2.2}} className='grid gap-2 md:w-fit md:pl-12'>
                    <span className={resultHeaderStyles}>56</span>
                    <span className={resultSubHeaderStyles}>days left</span>
                </motion.div>
            </div>
            <motion.progress {...animations.all} transition={{duration: 1, delay: 2.7}} aria-label='total-amount-spent-in-$' className='progressBar' id="file" value={pledgeAmount} max="100000" ></motion.progress>
        </section>
    )
}

export default Main_Results