import PropTypes from 'prop-types'

import { ContactListContainer, Headline } from './ContactList.styled'
import {
  ContactItemContainer,
  ContactItem,
  ItemName,
  DeleteBtn,
} from '../ContactItem/ContactItem.styled'

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      <ContactListContainer>
        {contacts.length === 0 ? (
          <Headline>Can not find the Contact</Headline>
        ) : (
          <Headline>Contacts</Headline>
        )}

        {contacts.map((contact) => (
          <ContactItem key={contact.id}>
            <ContactItemContainer>
              <ItemName>
                {contact.name}
                {': '}
                {contact.number}
              </ItemName>
              <DeleteBtn
                onClick={() => onDeleteContact(contact.id)}
                type="button"
              >
                Delete
              </DeleteBtn>
            </ContactItemContainer>
          </ContactItem>
        ))}
      </ContactListContainer>
    </>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}
