const ErrorObj = response => ({
  status: response.status,
  error: response.error,
});

const responseHandler = response =>
  !response.ok ? ErrorObj(response) : response;

export default responseHandler;
