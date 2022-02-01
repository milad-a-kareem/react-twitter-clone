import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import {ReactComponent as HomeO} from '../assets/icons/outline/home.svg'
import {ReactComponent as HomeF} from '../assets/icons/filled/home.svg'

import {ReactComponent as NotificationsO} from '../assets/icons/outline/notification.svg'
import {ReactComponent as NotificationsF} from '../assets/icons/filled/notification.svg'

import {ReactComponent as MessagesO} from '../assets/icons/outline/mail.svg'
import {ReactComponent as MessagesF} from '../assets/icons/filled/messages.svg'

import {ReactComponent as BookmarksO} from '../assets/icons/outline/bookmarks.svg'
import {ReactComponent as BookmarksF} from '../assets/icons/filled/bookmarks.svg'

import {ReactComponent as ListsO} from '../assets/icons/outline/lists.svg'
import {ReactComponent as ListsF} from '../assets/icons/filled/lists.svg'

import {ReactComponent as ProfileO} from '../assets/icons/outline/profile.svg'
import {ReactComponent as ProfileF} from '../assets/icons/filled/profile.svg'

import {ReactComponent as ExploreO} from '../assets/icons/outline/hash.svg'

import {ReactComponent as MoreO} from '../assets/icons/outline/more.svg'

function NavItem({to, btnText, iconName}) {
    // let resolved = useResolvedPath(to);
    const match = useMatch(to);

  return <>
  {to ?
    <Link to={to} className={`hover:bg-black/10 rounded-full flex items-center w-fit p1 my-2 ${iconName==='lists'|| iconName ==='bookmarks'? 'short:hidden':''}`}>
        <div className='p-2 w-11 h-11 '>
            {iconName === 'explore' && <ExploreO className={match ? 'stroke-4 stroke-black' : ' fill-black '}/>}
            
            {iconName === 'home' && !match && <HomeO className=' fill-black '/>}
            {iconName === 'home' && match && <HomeF className=' fill-black '/>}
            
            {iconName === 'notifications' && !match && <NotificationsO className=' fill-black '/>}
            {iconName === 'notifications' && match && <NotificationsF className=' fill-black '/>}

            {iconName === 'messages' && !match && <MessagesO className=' fill-black '/>}
            {iconName === 'messages' && match && <MessagesF className=' fill-black '/>}

            {iconName === 'bookmarks' && !match && <BookmarksO className=' fill-black '/>}
            {iconName === 'bookmarks' && match && <BookmarksF className=' fill-black '/>}
            
            {iconName === 'lists' && !match && <ListsO className=' fill-black '/>}
            {iconName === 'lists' && match && <ListsF className=' fill-black '/>}
        
            {iconName === 'profile' && !match && <ProfileO className=' fill-black '/>}
            {iconName === 'profile' && match && <ProfileF className=' fill-black '/>}

        </div>
        <div className={`hidden ml-4 mr-3 text-xl xl:flex ${match ? 'font-bold':''}`}><span>{btnText}</span></div>
    </Link>
    :
    <button to={to} className='hover:bg-black/10 rounded-full flex items-center w-fit px-2 my-2'>
        <div className='p-2 w-11 h-11 '>            
            {iconName === 'more' && !match && <MoreO className=' fill-black '/>}
        </div>
        <div className={`hidden ml-4 mr-3 text-xl xl:flex `}><span>{btnText}</span></div>
    </button>
  }
  </>
}

export default NavItem;
