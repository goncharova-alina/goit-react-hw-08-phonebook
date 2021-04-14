import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import contactsOperations from "../../redux/contacts/contactsOperations";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

const ContactListItem = ({ name, number, onClickRemove }) => {
  return (
    <li className="ContactListItem">
      <p>
        {name}: {number}
      </p>
      <button
        type="button"
        className="ContactsList-button"
        onClick={onClickRemove}
      >
        Delete
      </button>
    </li>
  );
};

const mapStateToProps = (state, ownProps) => {
  const contact = contactsSelectors.getContactById(state, ownProps.id);
  return { ...contact };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClickRemove: () => dispatch(contactsOperations.removeContact(ownProps.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactListItem);

ContactListItem.defaultProps = {
  name: "",
  number: "",
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClickRemove: PropTypes.func.isRequired,
};
