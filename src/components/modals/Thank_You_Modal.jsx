import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import { useContext } from 'react'
import LogicContext from '../../context/LogicContext'

const Thank_You_Modal = () => {
    const mainButtonStyles = "bg-moderate_cyan text-white rounded-full font-medium max-w-[100px] h-[50px] w-full hover:bg-dark_cyan transition-colors"

    const { thankYouModalOpen, toggleThankYouModal } = useContext(LogicContext)

    useBodyScrollLock(thankYouModalOpen);

    return (
        <div className={`${thankYouModalOpen === true ? "opacity-100 z-40" : "opacity-0 -z-10"} transition-[250ms] bg-black bg-opacity-30 fixed top-0 w-full h-full grid place-items-center sm:p-12 pl-6 pr-6 pt-12 pb-12 overflow-y-auto`}>
            <div className={`${thankYouModalOpen === true ? "left-0" : "left-[400px]"} transition-[500ms] bg-white max-w-[540px] relative w-full grid place-items-center text-center gap-8 p-8 rounded-md`}>
                <img src="assets/icons/icon-check.svg" alt="" />
                <h2 className='font-bold text-xl'>Thanks for your support!</h2>
                <p className='text-dark_gray'>
                    Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                    an email once our campaign is completed.
                </p>
                <button onClick={toggleThankYouModal} className={`${mainButtonStyles}`}>Got it!</button>
            </div>
        </div>
    )
}

export default Thank_You_Modal