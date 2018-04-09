export default (state = null, action) => {
  switch (action.type) {
    case 'INIT': {
      const { user } = action;
      return user;
    }
    default: {
      return state;
    }
  }
};
