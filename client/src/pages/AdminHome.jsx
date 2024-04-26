import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOutUserStart } from '../redux/user/userSlice';

const AdminHome = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(state => state.user);

  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch('/api/auth/signout');
      const data = await res.json();
      if (data.success === false) {
        console.log(data.message);
        return;
      }
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h1 style={{ marginBottom: '20px', fontSize: '2rem' }}>Welcome, {currentUser?.AdminId}</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <Link to="/admin/UsersPage">
          <button className='bg-slate-700 text-white rounded-lg p-4 uppercase hover:opacity-95 disabled:opacity-80 text-lg' style={{ width: '200px' }}>
            Users
          </button>
        </Link>
        <Link to="/admin/properties">
          <button className='bg-slate-700 text-white rounded-lg p-4 uppercase hover:opacity-95 disabled:opacity-80 text-lg' style={{ width: '200px' }}>
            Properties
          </button>
        </Link>
      </div>
      <div className='flex justify-between mt-5'>
        <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>Sign out</span>
      </div>
    </div>
  );
};

export default AdminHome;
