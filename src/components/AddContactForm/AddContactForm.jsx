import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  AddContactContainer,
  AddContactBtn,
  FormContainer,
  ItemFormLabel,
} from './AddContactForm.styled'

export default function AddContactForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  function submitContacts(e) {
    e.preventDefault()
    onSubmit(name, number)
    setName('')
    setNumber('')
  }

  function handlechange(e) {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'number':
        setNumber(value)
        break
      default:
        break
    }
  }

  return (
    <>
      <AddContactContainer>
        <h1>Phonebook</h1>
        <FormContainer onSubmit={submitContacts}>
          <ItemFormLabel>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              placeholder="Put the name here"
              autoComplete="off"
              value={name}
              onChange={handlechange}
              required
            />
          </ItemFormLabel>
          <ItemFormLabel>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              placeholder="Put the number here"
              autoComplete="off"
              value={number}
              onChange={handlechange}
              required
            />
          </ItemFormLabel>
          <AddContactBtn type="submit" text={'Add contact'} />
        </FormContainer>
      </AddContactContainer>
    </>
  )
}
// export default class AddContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   }

//   submitContacts = (e) => {
//     e.preventDefault()
//     const { name, number } = this.state
//     this.props.onSubmit(name, number)
//     this.setState({ name: '', number: '' })
//   }

//   handlechange = (e) => {
//     const { name, value } = e.target
//     this.setState({
//       [name]: value,
//     })
//   }

//   render() {
//     const { name, number } = this.state
//     return (
//       <>
//         <AddContactContainer>
//           <h1>Phonebook</h1>
//           <FormContainer onSubmit={this.submitContacts}>
//             <ItemFormLabel>
//               Name
//               <input
//                 type="text"
//                 name="name"
//                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                 title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//                 placeholder="Put the name here"
//                 autoComplete="off"
//                 value={name}
//                 onChange={this.handlechange}
//                 required
//               />
//             </ItemFormLabel>
//             <ItemFormLabel>
//               Number
//               <input
//                 type="tel"
//                 name="number"
//                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                 title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//                 placeholder="Put the number here"
//                 autoComplete="off"
//                 value={number}
//                 onChange={this.handlechange}
//                 required
//               />
//             </ItemFormLabel>
//             <AddContactBtn type="submit" text={'Add contact'} />
//           </FormContainer>
//         </AddContactContainer>
//       </>
//     )
//   }
// }

FormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
