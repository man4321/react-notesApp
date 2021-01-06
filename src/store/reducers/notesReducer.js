import * as Actions from "../actions";

const initialState = {
  notesData: [],
  showTextForm: false,
};

function notesReducer(state = initialState, actions) {
  switch (actions.type) {
    case Actions.CREATE_NOTE:
      return {
        ...state,
        notesData: actions.payload,
      };
    case Actions.SHOW_FULL_FORM:
      return {
        ...state,
        showTextForm: !state.showTextForm,
      };
    default:
      return state;
  }
}
export default notesReducer;
