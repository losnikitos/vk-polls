const defaultState = {
  byID: {},
  list: []
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'GOT_POLLS': {
      const { polls } = action;

      const list = [];
      const byID = {};
      polls.forEach(poll => {
        byID[poll.id] = poll;
        list.push(poll.id);
      });

      return {
        ...state,
        byID,
        list
      };
    }
    default: {
      return state;
    }
  }
};
