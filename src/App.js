import './App.css'


import {Routes, Route, Navigate, useLocation} from 'react-router-dom'
import Home from './pages/Home';
import Explore from './pages/Explore';
import Notifications from './pages/Notifications';
import Messages from './pages/Messages';
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
