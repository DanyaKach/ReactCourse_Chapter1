import React, { useState } from 'react';

const ContactTable = ({ contacts, onEditContact, onDeleteContact }) => {
  const [editIndex, setEditIndex] = useState(null);
  const [editedContact, setEditedContact] = useState({ firstName: '', lastName: '', phone: '' });

  const handleEdit = (contact) => {
    setEditIndex(contact.id);
    setEditedContact(contact);
  };

  const handleSave = (id) => {
    if (!editedContact.firstName || !editedContact.lastName || !editedContact.phone) {
      alert('All fields are required');
      return;
    }
    onEditContact(id, editedContact);
    setEditIndex(null);
  };

  return (
    <div>
      {contacts.length === 0 ? (
        <p>No data to display</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                {editIndex === contact.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        value={editedContact.firstName}
                        onChange={(e) => setEditedContact({ ...editedContact, firstName: e.target.value })}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editedContact.lastName}
                        onChange={(e) => setEditedContact({ ...editedContact, lastName: e.target.value })}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editedContact.phone}
                        onChange={(e) => setEditedContact({ ...editedContact, phone: e.target.value })}
                      />
                    </td>
                    <td>
                      <button onClick={() => handleSave(contact.id)}>Save</button>
                      <button onClick={() => setEditIndex(null)}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{contact.firstName}</td>
                    <td>{contact.lastName}</td>
                    <td>{contact.phone}</td>
                    <td>
                      <button onClick={() => handleEdit(contact)}>Edit</button>
                      <button onClick={() => onDeleteContact(contact.id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ContactTable;
