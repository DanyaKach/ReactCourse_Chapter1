import React, { useState } from 'react';
import ContactForm from './ContactForm.jsx';
import ContactTable from './ContactTable.jsx';

const AddressBookContainer = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');

  const handleAddContact = (contact) => {
    setContacts((prevContacts) => [
      ...prevContacts,
      { id: Date.now(), ...contact },
    ]);
  };

  const handleEditContact = (id, updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) => (contact.id === id ? updatedContact : contact))
    );
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <ContactForm onAddContact={handleAddContact} />
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ContactTable
        contacts={filteredContacts}
        onEditContact={handleEditContact}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default AddressBookContainer;
