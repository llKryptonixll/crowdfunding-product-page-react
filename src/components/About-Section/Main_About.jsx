import About_Article from "./components/About_Article"
import Reward_Item from "./components/Reward_Item"

const Main_About = ({mainCardStyles}) => {
  return (
    <section className={`${mainCardStyles} gap-10 grid`}>
      <About_Article />
      <div className='grid gap-6'>
        <Reward_Item 
          title = "Bamboo Stand"
          pledgeTitle = "Pledge $25 or more"
          description = "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
        />
        <Reward_Item 
          title = "Black Edition Stand"
          pledgeTitle = "Pledge $75 or more"
          description = "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        />    
        <Reward_Item 
          title = "Mahogany Special Edition"
          pledgeTitle = "Pledge $200 or more"
          description = "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
        />    
      </div>
    </section>
  )
}

export default Main_About