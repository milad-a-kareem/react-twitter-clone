import { useNavigate } from 'react-router-dom'

function TweetModal() {
  const navigate = useNavigate()

  const onCloseHandler = ()=>{
    navigate(-1)
  }
  return <div onClick={onCloseHandler} className='w-screen h-screen bg-black/40 fixed top-0 left-0'>

  </div>

}

export default TweetModal;
