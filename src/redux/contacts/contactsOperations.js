import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import contactsActions from "./contactsActions";

axios.defaults.baseURL = "http://localhost:2000";

const fetchContacts = () => (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());
  axios
    .get("/contacts")
    .then((response) =>
      dispatch(contactsActions.fetchContactsSuccess(response.data))
    )
    .catch((error) => dispatch(contactsActions.fetchContacstError(error)));
};

const addContact = (name, number) => (dispatch) => {
  dispatch(contactsActions.addContactRequest());
  axios
    .post("/contacts", { id: uuidv4(), name, number })
    .then((response) =>
      dispatch(contactsActions.addContactSuccess(response.data))
    )
    .catch((error) => dispatch(contactsActions.addContactError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(contactsActions.removeContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactSuccess(id)))
    .catch((error) => dispatch(contactsActions.removeContactError(error)));
};

export default { fetchContacts, addContact, removeContact };
