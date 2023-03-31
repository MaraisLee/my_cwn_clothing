import { CATEGORIES_ACTION_TYPES } from "./category.type";

const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    // 일치하는게 없으면 원래 값을 리턴
    default:
      return state;
  }
};
