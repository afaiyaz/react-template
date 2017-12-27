export default (state = false, { type }) => {
  switch (type) {
    case 'APP_INITALIZED': {
      return true;
    }
    default: {
      return state;
    }
  }
};
