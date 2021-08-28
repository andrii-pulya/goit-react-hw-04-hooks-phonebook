import styled from '@emotion/styled/macro'
import PropTypes from 'prop-types'

export const AddContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  border-radius: 5px;
  width: max-content;
  align-items: center;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

export const ItemFormLabel = styled.label`
  display: flex;
  flex-direction: column;
`

const ContactBtn = styled.button`
  display: block;
  padding: 5px;
  margin: 10px 0px;
  width: max-content;
  coursor: pointer;
  margin: 20px auto;
`

export function AddContactBtn({ text }) {
  return <ContactBtn>{text}</ContactBtn>
}

AddContactBtn.propTypes = {
  text: PropTypes.string.isRequired,
}
