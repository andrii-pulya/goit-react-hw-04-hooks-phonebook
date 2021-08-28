import PropTypes from 'prop-types'

import {
  ContactFilterContainer,
  ContactFilterInput,
  ContactFilterName,
} from './ContactFilter.styled'

export default function ContactFilter({ filter, onChange }) {
  return (
    <ContactFilterContainer>
      <ContactFilterName>Find contact by name</ContactFilterName>
      <ContactFilterInput
        type="text"
        name="filter"
        autoComplete="off"
        value={filter}
        onChange={onChange}
      />
    </ContactFilterContainer>
  )
}

ContactFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
