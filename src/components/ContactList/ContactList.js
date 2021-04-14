import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./ContactList.css";
import ContactListItem from "./ContactListItem";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" className="ContactsList">
      {contacts.map(({ id }) => (
        <CSSTransition key={id} timeout={500} classNames="Contact-anime">
          <ContactListItem key={id} id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
});

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
