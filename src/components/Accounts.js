import {useState} from 'react';
import {ReactComponent as EllipsIcons} from '../assets/icons/outline/ellipsis.svg'

function Accounts() {
    const [isAccountsOpen, setAccountsIsOpen] = useState(false);

    const clickHanfler =()=>{
        setAccountsIsOpen(true)
    }
  return <>
  {isAccountsOpen ? <div onClick={()=>{setAccountsIsOpen(false)}} className='bg-black/50 fixed h-screen w-screen z-10 left-0 top-0'></div> : null}
  <div onClick={clickHanfler} className='max-w-full cursor-pointer relative overflow-visible'>
      {isAccountsOpen ? <div className='bg-white rounded-md h-40 w-56 absolute shadow-md -top-32 z-20'></div>:null}
  <div className='rounded-full my-4 hover:bg-black/10'>
    <div className='p-4 flex items-center'>
      <div className='rounded-full w-10 h-10 bg-blue overflow-clip'>
        <img width='100%' height='100%' src="https://scontent.febl5-1.fna.fbcdn.net/v/t39.30808-1/s320x320/241285199_1538427673180442_9053026322561242168_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_ohc=0rX1p1QoSrAAX872shk&_nc_ht=scontent.febl5-1.fna&oh=00_AT-aNaGB59KOChXUlmfXI___YI1fpxV3G-HCXSoLfxLu7Q&oe=61FF7DB3" alt="" srcSet="" />
      </div>

      <div className='hidden xl:flex flex-col justify-center mx-4 '>
        <div className='text-base font-bold'><span>Milad A. Kareem</span></div>
        <div className='text-sm text-dark-gray'><span>@milad_a_kareem</span></div>
      </div>

      <div className='w-4 h-4 hidden xl:flex'>
        <EllipsIcons/>
      </div>

    <div>

      </div>

    </div>

  </div>
</div>
  
  </>
}

export default Accounts;
