import './App.css'
import {ReactComponent as Twitter} from './assets/icons/twitter.svg'

import {Routes, Route, Navigate, Link} from 'react-router-dom'
import Home from './pages/Home';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import NavItem from './components/NavItem';

function App() {
  return (
    <div className='w-screen h-screen bg-white'>
      <div className="h-full max-w-[1300px] mx-auto flex ">

        <header className='border-r h-full border-xlight-gray px-4 flex justify-end'>

          <div className="flex flex-col xl:w-[275px]">
            <div className='p-2 w-12 h-12 rounded-full hover:bg-blue/10'>
              <Twitter className=' fill-blue '/>
            </div>

            <NavItem to='/home' iconName='home' btnText='Home'/>
            <NavItem to='/explore' iconName='explore' btnText='Explore'/>
            <NavItem to='/notifications' iconName='notifications' btnText='Notifications'/>
            <NavItem to='/messages' iconName='messages' btnText='Messages'/>
            <NavItem to='/bookmarks' iconName='bookmarks' btnText='bookmarks'/>
            <NavItem to='/lists' iconName='lists' btnText='lists'/>
            <NavItem to='/profile' iconName='profile' btnText='profile'/>
            <NavItem to='' iconName='more' btnText='More'/>

          </div>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Navigate to='/home'/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/explore' element={<Explore/>}/>
            <Route path='/notifications' element={<Notifications/>}/>
            <Route path='/messages' element={<Messages/>}/>

          </Routes>
        </main>
        
      </div>

    </div>
  );
}

export default App;
