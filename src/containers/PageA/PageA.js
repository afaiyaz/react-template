import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div>
    This is page A
    <Link to="/pageB">PageB</Link>
  </div>
);
