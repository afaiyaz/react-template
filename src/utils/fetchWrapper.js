import responseHandler from './responseHandler';

<<<<<<< HEAD
export default async ({
=======
const fetchWrapper = async ({
>>>>>>> 5b449be1b07bfd7b4233e32abe160e09fe6b47c5
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
<<<<<<< HEAD
=======

export default fetchWrapper;
>>>>>>> 5b449be1b07bfd7b4233e32abe160e09fe6b47c5
