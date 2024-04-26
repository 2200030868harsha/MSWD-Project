import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminSignIn = () => {
  const [formData, setFormData] = useState({
    AdminId: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin/signin', formData);
      if (response.data.success) {
        localStorage.setItem('adminToken', response.data.token);
        navigate('/AdminHome'); // Navigate to AdminHome after successful sign-in
      } else {
        setError('Invalid credentials');
      }
    } catch (error) {
      setError('Something went wrong');
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Admin Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='Admin ID'
          className='border p-3 rounded-lg'
          name='AdminId'
          value={formData.AdminId}
          onChange={handleChange}
        />
        <input
          type='password'
          placeholder='Password'
          className='border p-3 rounded-lg'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
          Sign In
        </button>
      </form>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  );
};

export default AdminSignIn;
