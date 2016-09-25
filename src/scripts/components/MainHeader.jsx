import React from 'react';
import { Link } from 'react-router';

export default function MainHeader() {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/places">Places</Link></li>
    </ul>
  );
}
