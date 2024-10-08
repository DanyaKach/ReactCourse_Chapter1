import React, { useState } from 'react';

const ContactForm = ({ onAddContact }) => {
  const [newContact, setNewContact] = useState({ firstName: '', lastName: '', phone: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!newContact.firstName) newErrors.firstName = 'The first name is required';
    if (!newContact.lastName) newErrors.lastName = 'The last name is required';
    if (!newContact.phone) newErrors.phone = 'The phone number is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      onAddContact(newContact);
      setNewContact({ firstName: '', lastName: '', phone: '' });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={newContact.firstName}
        onChange={(e) => setNewContact({ ...newContact, firstName: e.target.value })}
      />
      {errors.firstName && <span className="error">{errors.firstName}</span>}

      <input
        type="text"
        placeholder="Last Name"
        value={newContact.lastName}
        onChange={(e) => setNewContact({ ...newContact, lastName: e.target.value })}
      />
      {errors.lastName && <span className="error">{errors.lastName}</span>}

      <input
        type="text"
        placeholder="Phone"
        value={newContact.phone}
        onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
      />
      {errors.phone && <span className="error">{errors.phone}</span>}

      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
