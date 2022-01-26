export const createPageReducer = (pageName, initialState, actionHandlers) => {
  actionHandlers[`LOAD_${pageName}`] = (state, action) => {
    return {
      ...state,
      pageLoading: true,
    };
  };

  actionHandlers[`LOAD_${pageName}_SUCCESS`] = (state, action) => {
    return {
      ...state,
      pageLoading: false,
    };
  };

  actionHandlers[`UNLOAD_${pageName}`] = (state, action) => ({
    ...initialState,
    pageLoading: true,
  });

  return (
    state = {
      ...initialState,
      pageLoading: true,
    },
    action
  ) => {
    const effect = actionHandlers[action.type];

    if (effect) return effect(state, action);
    else return state;
  };
};
