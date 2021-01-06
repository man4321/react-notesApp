import axios from "axios";
export const CREATE_NOTE = "CREATE_NOTE";
export const SHOW_FULL_FORM = "SHOW_FULL_FORM";

export function createNote(data) {
  return async (dispatch) => {
    const send = {
      title: data.title,
      text: data.text,
      marked: false,
    };
    const response = await axios.post(
      "https://notes-application-297406-default-rtdb.firebaseio.com/notes.json",
      send
    );
   
  };
}
export function getAllNotes() {
  return async (dispatch) => {
    const getNotes = await axios.get(
      "https://notes-application-297406-default-rtdb.firebaseio.com/notes.json"
    );
    dispatch({
      type: CREATE_NOTE,
      payload: getNotes.data,
    });
  };
}
export function showAction() {
  return (dispatch) => {
    dispatch({
      type: SHOW_FULL_FORM,
    });
  };
}
export function deleteNote(id) {
  return async (dispatch) => {
    await axios.delete(
      `https://notes-application-297406-default-rtdb.firebaseio.com/notes/${id}.json`
    );
  };
}

export function updateNote(id, data) {
  return async (dispatch) => {
    const send = {
      marked: !data.marked,
      text: data.text,
      title: data.title,
    };
    const respose = await axios.put(
      `https://notes-application-297406-default-rtdb.firebaseio.com/notes/${id}.json`,
      send
    );
    
  };
}
