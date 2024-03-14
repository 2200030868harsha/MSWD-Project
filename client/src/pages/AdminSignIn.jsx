// AdminSignIn.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/Admin/adminSlice';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar'; // Import AdminNavbar component

const AdminSignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate hook

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch('http://localhost:3000/api/admin/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      // Redirect to the admin panel
      navigate('/users'); // Redirect to the users route
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div>
      <AdminNavbar />
      <div className='p-3 max-w-lg mx-auto'>
        <h1 className='text-3xl text-center font-semibold my-7'>Admin Sign In</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <input
            type='text'
            placeholder='Admin ID'
            className='border p-3 rounded-lg'
            id='adminId'
            onChange={handleChange}
          />
          <input
            type='password'
            placeholder='Password'
            className='border p-3 rounded-lg'
            id='password'
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
          >
            {loading ? 'Loading...' : 'Sign In'}
          </button>
        </form>
        {error && <p className='text-red-500 mt-5'>{error}</p>}
      </div>
    </div>
  );
};

export default AdminSignIn;
