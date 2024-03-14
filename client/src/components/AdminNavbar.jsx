// AdminNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <nav className='bg-red-300 shadow-lg'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-4'>
        <Link to='/'>
          <h1 className='font-bold text-lg sm:text-xl flex flex-wrap text-slate-700'>
            <span className='text-slate-500'>REMS</span>
            <span className='text-slate-700'>Project</span>
          </h1>
        </Link>
        <ul className='flex gap-5'>
          <Link to='/users'>
            <li className='text-slate-700 hover:underline'>Users</li>
          </Link>
          <Link to='/listings'>
            <li className='text-slate-700 hover:underline'>Listings</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default AdminNavbar;
