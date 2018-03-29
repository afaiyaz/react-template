import responseHandler from './responseHandler';

const fetchWrapper = async ({
  url,
  method = 'GET',
  headers = {},
  body = {},
  otherOptions = {},
}) => {
  const raw = await fetch(url, {
    method,
    headers: {
      ...headers,
    },
    body,
    credentials: 'include',
    ...otherOptions,
  });
  const formattedResponse = await responseHandler(raw).json();
  return formattedResponse;
};

export default fetchWrapper;
