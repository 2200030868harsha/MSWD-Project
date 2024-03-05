import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {useSelector } from 'react-redux';

export default function Header() {
  const {currentUser} = useSelector(state=>state.user)
  return (
    <header className='bg-slate-300 shadow-lg'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
      <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
        <span className='text-slate-500'>REMS</span>
        <span className='text-slate-700'>Project</span>
      </h1>
      </Link>
      <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
        <input type="text" placeholder="Search..." className='bg-transparent focus:outline-none w-22 sm:w-64'/> 
        <FaSearch className='text-slate-600'/>
      </form>
      <ul className='flex gap-5'>
        <Link to='/'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
        </Link>
        <Link to='/About'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
        </Link>
        <Link to='/profile'>
        {currentUser ? (
            <img className='rounded-full h-8 w-8 object-cover' src={currentUser.avatar} alt='Profile'/>
        ): (
             <li className='text-slate-700 hover:underline'>Signin</li>
        )}
        </Link>
      </ul>
      </div>
    </header>
  );
}
