import './App.css'

import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'

import AddContactForm from './components/AddContactForm/AddContactForm.jsx'
import ContactList from './components/ContactList/ContactList.jsx'
import { PageWrapper } from './components/PageWrapper/PageWrapper.styled.jsx'
import ContactFilter from './components/ContactFilter/ContactFilter.jsx'

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  )
  const [filter, setFilter] = useState('')

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  function addContact(name, number) {
    if (contacts.find((contact) => contact.name === name)) {
      alert(`${name} is already in contacts`)
      return false
    }
    setContacts((prevContacts) => [
      {
        id: nanoid(),
        name: name,
        number: number,
      },
      ...prevContacts,
    ])
  }

  function deleteContact(id) {
    setContacts((prevContacts) => {
      prevContacts.filter((contact) => contact.id !== id)
    })
  }

  function handleChange(e) {
    const { value } = e.target
    setFilter(value)
  }

  function rendedContact() {
    const normalizedFilter = filter.toLowerCase()
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    )
  }

  return (
    <PageWrapper>
      <AddContactForm onSubmit={addContact} />
      <ContactFilter filter={filter} onChange={handleChange} />
      {filter.length === 0 ? (
        contacts.length === 0 ? (
          <h1>You have not contacts saved</h1>
        ) : (
          <ContactList contacts={contacts} onDeleteContact={deleteContact} />
        )
      ) : (
        <ContactList
          contacts={rendedContact()}
          onDeleteContact={deleteContact}
        />
      )}
    </PageWrapper>
  )
}
