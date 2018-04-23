const ErrorObj = response => ({
  status: response.status,
  error: response.error,
});

<<<<<<< HEAD
export default response => (!response.ok ? ErrorObj(response) : response);
=======
const responseHandler = response =>
  !response.ok ? ErrorObj(response) : response;

export default responseHandler;
>>>>>>> 5b449be1b07bfd7b4233e32abe160e09fe6b47c5
