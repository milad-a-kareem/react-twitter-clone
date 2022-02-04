import {Link} from 'react-router-dom';

function ExtraNavItem({text, icon, temp, to, onClick}) {
  return <Link to={to} onClick={onClick} className={`py-2 justify-start items-center w-full hover:bg-black/10 ${text==='Analytics'?'border-b':''} ${temp ? 'hidden short:flex' : 'flex'}`}>
            <div className='w-[18px] h-[18px] m-3'>{icon}</div>
            <div className='mr-4'><span>{text}</span></div>
        </Link>

}

export default ExtraNavItem;
