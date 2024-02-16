import Contact from 'components/Contact/Contact'
import { ContactsList, Container, P } from './Contacts.styled'
import { useSelector } from 'react-redux'
import { selectContacts, selectFilter, selectFilteredContacts, selectIsLoading } from '../../redux/contacts/contactsSlice.selectors'
import { selectIsLoggedIn } from '../../redux/auth/authSlice.selectors'
import { Loader } from 'components/Loader/Loader'

export const Contacts = () => {
  const filteredContacts = useSelector(selectFilteredContacts)
  const isLoggedIn = useSelector(selectIsLoggedIn)
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectFilter)
  const isLoading = useSelector(selectIsLoading)

  const sortedContacts = filteredContacts.sort((contactA, contactB) => contactA.name.localeCompare(contactB.name))

  return (<>
    {isLoading ? <Loader /> : (
      <Container>
      
        {filter !== '' && filteredContacts.length <= 0 && <P>Nothing matches your search</P>}
        {isLoggedIn && contacts.length <= 0 ? <P>Your Contacts will appear here when you add them</P>
          : (<ContactsList>
            {sortedContacts.map(contact => {
              return <Contact key={contact.id} contactData={contact}>
              </Contact>
            })}
          </ContactsList>)
        }


      </Container>)}</>
  )
}
