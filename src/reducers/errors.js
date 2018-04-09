const initialState = [];

export default (state = initialState, action) => {
  const { type } = action;

  if (type.includes('ERR')) {
    return [...state, action];
  }

  return state;
};
