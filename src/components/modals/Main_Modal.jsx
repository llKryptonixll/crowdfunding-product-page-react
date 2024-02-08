import Pledge_Item from './Pledge_Item'
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock'
import LogicContext from '../../context/LogicContext'
import { useContext } from 'react'

const Main_Modal = ({ mainCardStyles }) => {

  const { closeModal, modalIsOpen } = useContext(LogicContext);

  useBodyScrollLock(modalIsOpen)

  return (
    <div className={`${modalIsOpen === true ? "opacity-100 z-40" : "opacity-0 -z-10"} transition-[250ms] grid fixed w-full h-full top-0 bg-black bg-opacity-30 place-items-center sm:p-12 pl-6 pr-6 pt-12 pb-12 overflow-y-auto`}>
      <div className={`${mainCardStyles} ${modalIsOpen === true ? "left-0" : "left-[200px]"} grid gap-7 bg-white relative transition-[500ms]`}>
        <button onClick={closeModal} className='absolute right-0 sm:p-6 pl-6 pr-6 pt-14 pb-12' aria-label='close-pledge-modal'>
          <img src="assets/icons/icon-close-modal.svg" alt="" />
        </button>
        <div className='grid gap-4'>
          <h2 className='text-black text-2xl font-bold'>Back this project</h2>
          <p className='text-dark_gray'>  Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
        </div>
        <div className='grid gap-6'>
          <Pledge_Item
            title="Pledge with no reward"
            plegeTitle=""
            description="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
          />
          <Pledge_Item
            title="Bamboo Stand"
            pledgeTitle="Pledge $25 or more"
            description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
          />
          <Pledge_Item
            title="Black Edition Stand"
            pledgeTitle="Pledge $75 or more"
            description="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          />
          <Pledge_Item
            title="Mahogany Special Edition"
            pledgeTitle="Pledge $200 or more"
            description="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          />
        </div>
      </div>
    </div>
  )
}

export default Main_Modal