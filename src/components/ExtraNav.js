import {ReactComponent as TopicsO} from '../assets/icons/outline/topics.svg'
import {ReactComponent as MomentsO} from '../assets/icons/outline/moments.svg'
import {ReactComponent as NewsO} from '../assets/icons/outline/newsletters.svg'
import {ReactComponent as RocketO} from '../assets/icons/outline/rocket.svg'
import {ReactComponent as AdsO} from '../assets/icons/outline/ads.svg'
import {ReactComponent as AnalyticsO} from '../assets/icons/outline/analytics.svg'
import {ReactComponent as SettingssO} from '../assets/icons/outline/settings.svg'
import {ReactComponent as HelpO} from '../assets/icons/outline/help.svg'
import {ReactComponent as DisplayO} from '../assets/icons/outline/display.svg'
import {ReactComponent as ShortcutsO} from '../assets/icons/outline/shortcuts.svg'

import {ReactComponent as BookmarksO} from '../assets/icons/outline/bookmarks.svg'
import {ReactComponent as ListsO} from '../assets/icons/outline/lists.svg'

import {useDispatch} from 'react-redux'
import { navActions } from '../store/nav-slice'
import ExtraNavItem from './ExtraNavItem'

function ExtraNav() {
    const dispatch  = useDispatch()

    const navHandler = () =>{
        dispatch(navActions.toggle())
    }

    const arr = [
        {to: '/topics', text: 'Topics', icon:<TopicsO/>},
        {to: '/moments', text: 'Moments', icon:<MomentsO/>},
        {to: '/i/newsletters', text: 'Newsletters', icon:<NewsO/>},
        {to: '/i/professionals', text: 'Twitter for Professionals', icon:<RocketO/>},
        {to: 'https://ads.twitter.com/', external:true, text: 'Twitter Ads', icon:<AdsO/>},
        {to: 'https://analytics.twitter.com/', external:true, text: 'Analytics', icon:<AnalyticsO/>},
        {to: '/settings', text: 'Settings and Privacy', icon:<SettingssO/>},
        {to: 'https://help.twitter.com/', external:true, text: 'Help Center', icon:<HelpO/>},
        {to: '/i/display', text: 'Display', icon:<DisplayO/>},
        {to: '/i/keyboard_shortcuts', text: 'Keyboard Shortcuts', icon:<ShortcutsO/>},
    ]

  return <>
   <div onClick={navHandler} className='w-screen h-screen bg-white/0 fixed left-0 top-0'>
      
    </div>
   <div className='flex flex-col rounded-lg absolute top-0 z-10 bg-white w-fit max-h-[100vh] shadow-md overflow-y-auto'>
        <ExtraNavItem onClick={navHandler} temp text='Bookmarks' to='/bookmarks' icon={<BookmarksO/>}></ExtraNavItem>
        <ExtraNavItem onClick={navHandler} temp text='Lists' to='/lists' icon={<ListsO/>}></ExtraNavItem>
       {arr.map(item=>{
           return <ExtraNavItem onClick={navHandler} text={item.text} icon={item.icon} to={item.to} external={item.external ? true : false}></ExtraNavItem>
       })}
       
        
        

      </div>
  </>
  
}

export default ExtraNav;
