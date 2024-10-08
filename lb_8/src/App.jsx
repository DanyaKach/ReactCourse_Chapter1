import React from 'react';
import PageTitle from './Components/PageTitle.jsx';
import AddressBookContainer from './Components/AddressBookContainer.jsx';
import './App.css';

function AddressBookApp() {
  return (
    <div className="address-book-app">
      <PageTitle title="Address Book" />
      <AddressBookContainer />
    </div>
  );
}

export default AddressBookApp;
