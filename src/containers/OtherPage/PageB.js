import React from 'react';
import config from 'config';
import fetchWrapper from 'utils/fetchWrapper';
import { Link } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';

const fetchDataFromServer = async () => {
  const response = await fetchWrapper({ url: config.BACKEND_SERVER });
  console.log(response);
  console.log('You can pass action dispatcher to put response in store');
};

const enhance = compose(
  lifecycle({
    componentDidMount() {
      fetchDataFromServer();
    },
  }),
);
const PageB = () => (
  <>
    <div>When this page mounts, it dispatches a call to backend</div>
    <Link to="/">Return to landing page</Link>
  </>
);
export default enhance(PageB);
