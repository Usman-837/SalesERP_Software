import { TOGGLE_SIDEBAR, CLOSE_SIDEBAR } from "../actions/sidebarActions";

const initialState = {
  isOpen: true,
};

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default sidebarReducer;
