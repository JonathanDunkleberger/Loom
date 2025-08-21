import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <h1
        className="cursor-pointer select-none text-2xl font-extrabold"
        style={{ color: '#00A8E1' }}
        aria-label="Loom Home"
      >
        Loom
      </h1>
    </Link>
  );
};

export default Logo;
