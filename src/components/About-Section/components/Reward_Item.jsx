import { useContext } from 'react'
import LogicContext from '../../../context/LogicContext'
import { motion } from 'framer-motion'

const Reward_Item = ({title, pledgeTitle, description}) => {
  const mainButtonStyles = "bg-moderate_cyan text-white rounded-full font-medium max-w-[150px] h-[50px] w-full hover:bg-dark_cyan transition-colors disabled:hover:bg-dark_gray disabled:hover:bg-opacity-40"

  const { handleRewardBtn_Click, leftPledges } = useContext(LogicContext)

  // change style if 0 pledges left
  function changeStyle(style) {
    return leftPledges[title] === 0 ? style : "";
  }

  const animations = {
    item: {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 1, delay: 0.5 },
      viewport: { once: true }
    }
  }

  return (
    <motion.div {...animations.item} className="border-[1px] p-8 rounded-md grid gap-7">
      <div className='md:flex grid gap-2 md:gap-0 justify-between items-center'>
        <h2 className={`${changeStyle("text-dark_gray")} font-bold text-black text-xl`}>{title}</h2>
        <p className={`${changeStyle("text-opacity-50")} text-moderate_cyan font-medium`}>{pledgeTitle}</p>
      </div>
      <p className={`${changeStyle("text-opacity-70")} text-dark_gray`}>{description}</p>
      <div className='md:flex grid gap-6 md:gap-0 md:justify-between'>
        <div className='flex items-center space-x-2'>
          <span className={`${changeStyle("text-opacity-50")} text-black text-3xl font-bold`}>{leftPledges[title]}</span>
          <span className={`${changeStyle("text-opacity-50")} text-dark_gray`}>left</span>
        </div>
        <button disabled={leftPledges[title] === 0 ? "disabled" : ""} onClick={() => handleRewardBtn_Click(title)} className={`${mainButtonStyles} ${changeStyle("bg-dark_gray bg-opacity-40")}`}>{leftPledges[title] === 0 ? "Out of stock" : "Select Reward"}</button>
      </div>
    </motion.div>
  )
}

export default Reward_Item