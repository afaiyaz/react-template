const ErrorObj = response => ({
  status: response.status,
  error: response.error,
});

export default response => (!response.ok ? ErrorObj(response) : response);
