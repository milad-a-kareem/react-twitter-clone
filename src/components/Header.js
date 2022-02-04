import {ReactComponent as Twitter} from '../assets/icons/twitter.svg'
import {ReactComponent as Tweet} from '../assets/icons/outline/tweet.svg'
import {ReactComponent as EllipsIcons} from '../assets/icons/outline/ellipsis.svg'
import NavItem from './NavItem';
import {Link, useLocation} from 'react-router-dom';

function Header() {
  let location = useLocation()
  console.log(location)
  return <header className='border-r h-full border-xlight-gray px-1 xl:px-3 flex justify-end overflow-auto'>
  <div className='flex flex-col items-center justify-between max-w-[275px] xl:items-start xl:w-[245px]'>
   
    <div className="flex flex-col w-full items-start">
      <div className='w-full flex justify-center xl:justify-start'>
        <div className='p-2 w-12 h-12 rounded-full hover:bg-blue/10'>
          <Twitter className=' fill-blue '/>
        </div>
      </div>

      <NavItem to='/home' iconName='home' btnText='Home' dot/>
      <NavItem to='/explore' iconName='explore' btnText='Explore'/>
      <NavItem to='/notifications' iconName='notifications' btnText='Notifications' badge={5}/>
      <NavItem to='/messages' iconName='messages' btnText='Messages' badge={7}/>
      <NavItem to='/bookmarks' iconName='bookmarks' btnText='bookmarks'/>
      <NavItem to='/lists' iconName='lists' btnText='lists'/>
      <NavItem to='/profile' iconName='profile' btnText='profile'/>
      <NavItem to='' iconName='more' btnText='More'/>

      <Link state={{isTweetOpen: location}}  to='/compose/tweet' className='w-full flex justify-center xl:justify-start'>
        <div className='bg-blue hover:bg-dark-blue w-14 h-14 rounded-full flex justify-center items-center xl:w-11/12 my-3 average:my-1 shadow-sm'>
          <span className="hidden xl:flex text-white text-lg font-bold ">Tweet</span>
          <div className="w-6 flex xl:hidden"><Tweet className='fill-white'/></div>
        </div>
      </Link>
    

    </div>
    
    <div className='max-w-full'>
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

  </div>

</header>
}

export default Header;
