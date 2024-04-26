import React, { useState, useEffect } from 'react';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5173/admin/UsersPage/all') // Fetch all users from the backend
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <h2>{user.username}</h2>
            <p>Email: {user.email}</p>
            {/* Add more user details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
