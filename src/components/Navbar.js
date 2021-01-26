import React from 'react';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>Movie Review Club</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/addreview">Add Review</a>
      </div>
    </nav>
  );
}

export default Navbar;