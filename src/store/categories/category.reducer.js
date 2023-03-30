const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_INITIAL_STATE.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };
    // 일치하는게 없으면 원래 값을 리턴
    default:
      return state;
  }
};
