// Pledge_Item.js
import { useContext } from 'react';
import LogicContext from '../../context/LogicContext';

const Pledge_Item = ({ title, pledgeTitle, description }) => {
  const mainButtonStyles = "bg-moderate_cyan text-white rounded-full w-[140px] font-medium h-[50px] hover:bg-dark_cyan transition-colors";
  const checkboxInputStyles = `
    border-[1px]
    cursor-pointer
    relative w-[25px] 
    h-[25px] 
    rounded-full 
    appearance-none 
    after:checked:bg-moderate_cyan
    focus:ring-0 
    after:content-[""] 
    after:w-[13px] 
    after:rounded-full 
    after:h-[13px] 
    after:absolute 
    grid 
    place-items-center
  `

  const { checkSelectedItem, handleRewardBtn_Click, handleInputChange, handleSubmit, leftPledges, inputValue, errors, isLoading } = useContext(LogicContext);

  function handleCheckboxChange() {
    handleRewardBtn_Click(title);
  }

  // change style if 0 pledges left
  function changeStyle(style) {
    return leftPledges[title] === 0 ? style : "";
  }

  return (
    <div className={`${checkSelectedItem(title) && "border-moderate_cyan border-2 transition-colors"} border-[1px] rounded-md grid`}>
      <div className='grid gap-4 p-8'>
        <div className='grid gap-4 grid-cols-5'>
          <div className='sm:col-span-4 col-span-full'>
            <div className='flex space-x-4 items-center'>
              <input
                disabled={leftPledges[title] === 0}
                className={checkboxInputStyles}
                type="checkbox"
                checked={checkSelectedItem(title)}
                onChange={handleCheckboxChange}
                name={title}
                aria-label={`select ${title}`}
              />
              <div className='md:flex items-center md:space-x-4'>
                <h3 className={`${changeStyle("text-dark_gray")} font-bold text-black text-xl`}>{title}</h3>
                <p className={`${changeStyle("text-opacity-50")} text-moderate_cyan font-medium`}>{pledgeTitle}</p>
              </div>
            </div>
          </div>
          {title === "Pledge with no reward" ? "" :
            <div className='flex space-x-1 items-center col-span-1 sm:row-start-auto row-start-3 sm:justify-self-end'>
              <span className={`${changeStyle("text-opacity-50")} text-black text-xl font-bold`}>{leftPledges[title]}</span>
              <span className={`${changeStyle("text-opacity-50")} text-dark_gray`}>left</span>
            </div>
          }
          <p className={`${changeStyle("text-opacity-70")} sm:pl-[30px] text-dark_gray col-span-full`}>{description}</p>
        </div>
      </div>

      {checkSelectedItem(title) &&
        <div className='sm:flex grid sm:gap-0 gap-4 justify-items-center sm:justify-between justify-end items-center border-t-2 p-8 pr-8 pt-6 pb-6 animate-scaleY' >
          {title === "Pledge with no reward" ? "" :
            <p className='text-dark_gray'>Enter your pledge</p>
          }
          <div className='flex space-x-4'>
            {title === "Pledge with no reward" ? "" :
              <div className='relative grid items-center'>
                <span className='absolute pl-5 text-dark_gray'>$</span>
                <input
                  className={`${errors[title] && "border-red-400"} border-[1px] w-[100px] rounded-full h-[50px] text-center font-bold text-black outline-moderate_cyan`}
                  type="number"
                  value={inputValue}
                  onChange={(e) => handleInputChange(e)}
                />
                {errors[title] === true ? <p className='absolute bottom-[-20px] text-sm text-red-400'>wrong amount</p> : ""}
              </div>
            }
            <button onClick={handleSubmit} className={`${mainButtonStyles}`}>
              {isLoading === true ?
                <div role="status">
                  <svg aria-hidden="true" role="status" className="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"></path>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"></path>
                  </svg>
                  ...Loading
                </div>
                :
                "Continue"}
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default Pledge_Item;