import React from "react";
import { CSSTransition } from "react-transition-group";
import Loader from "react-loader-spinner";

import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";
import "./App.css";

export default function App({ isLoadingContacts }) {
  return (
    <>
      <div className="Container">
        {isLoadingContacts && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}
        <section title="Phonebook" className="Section">
          <CSSTransition
            in={true}
            timeout={500}
            appear
            classNames="Title-anime"
            unmountOnExit
          >
            <h1 className="SectionTitle">Phonebook</h1>
          </CSSTransition>
          <ContactForm />
        </section>
        <section title="Contacts" className="Section">
          <Filter />
          <ContactList />
        </section>
      </div>
    </>
  );
}
