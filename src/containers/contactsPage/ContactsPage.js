import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({contacts, addContacts}) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!duplicate) {
      addContacts(name, phone, email);
      setName('');
      setEmail('')
      setPhone('');
    }
  };

  useEffect(() => {
    const nameIsDuplicate = () => {
      const found = contacts.find((contact) => contact.name === name);
      if (found !== undefined) {
        return true;
      }
      return false;
    };
    if (nameIsDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false)
    }
  }, [name, contacts, duplicate])

  return (
    <div>
      <section>
        { duplicate ? "Name already exists" : ""}
        <ContactForm 
        name={name} 
        phone={phone} 
        email={email} 
        setName={setName} 
        setPhone={setPhone} 
        setEmail={setEmail} 
        handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts}/>
      </section>
    </div>
  );
};
