import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';
import AdminSignIn from './pages/AdminSignIn';
import AdminHome from './pages/AdminHome';
import UsersPage from './pages/UsersPage';
import Services from './pages/Services';
import Team from './pages/Team';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/sign-in" element={<AdminSignIn />} />
        <Route path="/admin/home" element={<AdminHome />} />
        <Route path="/admin/users" element={<UsersPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/about" element={<About />} />
        <Route path="/Services" element={<Services/>}/>
        <Route path="/search" element={<Search />} />
        <Route path="/listing/:listingId" element={<Listing />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/update-listing/:listingId" element={<UpdateListing />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
