import React from 'react';
import { Link } from 'react-router-dom';
import fetchWrapper from 'utils/fetchWrapper';

const initiateLogin = async () => {
  const response = await fetchWrapper({
    url: 'http://localhost:3000/engage/workorder/codegroups',
  });
  console.log(response);
};

export default () => (
  <div>
    This is page A
    <Link to="/pageB">PageB</Link>
    <button onClick={() => initiateLogin()}>Test Async Await</button>
  </div>
);
