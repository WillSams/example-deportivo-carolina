export const createPageReducer = (pageName, initialState, actionHandlers) => {
  actionHandlers[`LOAD_${pageName}`] = (state, action) => ({
    ...state,
    loading: true,
  });

  actionHandlers[`LOAD_${pageName}_SUCCESS`] = (state, action) => ({
    ...state,
    loading: false,
  });

  actionHandlers[`UNLOAD_${pageName}`] = (state, action) => ({
    ...initialState,
    loading: true,
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
