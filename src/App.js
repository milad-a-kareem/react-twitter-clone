import './App.css'


import {Routes, Route, Navigate, useLocation} from 'react-router-dom'

import Home from './pages/Home';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
import Bookmarks from './pages/Bookmarks';
import Lists from './pages/Lists';
import Profile from './pages/Profile';
import Topics from './pages/Topics';
import Moments from './pages/Moments';
import Settings from './pages/Settings';

import Header from './components/Header';

import TweetModal from './Modals/TweetModal'



function App() {
  let location = useLocation()
  return (
    <div className='w-screen h-screen bg-white'>
        <div className="h-full max-w-[1300px] mx-auto flex justify-center">
          <div className='w-full h-full flex justify-center'>
            <Header/>

            <main className='w-[990px] h-full'>
              <Routes location={ location.state?.isTweetOpen || location }>
                <Route path='/' element={<Navigate to='/home'/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/explore' element={<Explore/>}/>
                <Route path='/notifications' element={<Notifications/>}/>
                <Route path='/messages' element={<Messages/>}/>
                <Route path='/bookmarks' element={<Bookmarks/>}/>
                <Route path='/lists' element={<Lists/>}/>
                <Route path='/topics' element={<Topics/>}/>
                <Route path='/moments' element={<Moments/>}/>
                <Route path='/setttings' element={<Settings/>}/>

              </Routes>
              { location.state?.isTweetOpen &&
                <Routes>
                  <Route path='/compose/tweet' element={<TweetModal/>}/>
                </Routes>
              }

            </main>

          
          </div>
        </div>

        

    </div>
  );
}

export default App;
