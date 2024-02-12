import Contact from 'components/Contact/Contact'
import { ContactsList, Container } from './Contacts.styled'
import { useSelector } from 'react-redux'
import { selectFilteredContacts } from '../../redux/contacts/contactsSlice.selectors'

export const Contacts = () => {
  const filteredContacts = useSelector(selectFilteredContacts)

  const sortedContacts = filteredContacts.sort((contactA, contactB) => contactA.name.localeCompare(contactB.name))

  return (
    <Container>
      <ContactsList>
        {sortedContacts.map(contact => {
          return <Contact key={contact.id} contactData={contact}>
          </Contact>
        })}
      </ContactsList>
    </Container>
  )
}
