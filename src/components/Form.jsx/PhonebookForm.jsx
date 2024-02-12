import { useDispatch } from 'react-redux'
import { Button, CheckLabel, Form, Input, Label, Span } from './PhonebookForm.styled'
import { addContact } from '../../redux/contacts/contactsSlice'

export const PhonebookForm = () => {
  const dispatch = useDispatch()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const name = e.currentTarget.elements.contactName.value
    const phone = e.currentTarget.elements.contactNumber.value
    const email = e.currentTarget.elements.contactEmail.value
    const favourite = e.currentTarget.elements.contactFavourite.checked
    const profileData = { name, phone, email, favourite }

    dispatch(addContact(profileData))
    e.currentTarget.reset()
  }
  
  return (
    <Form onSubmit={handleFormSubmit}>
      <Label>
        <Span>Name</Span>
        <Input type="text" name="contactName" placeholder='John Doe' required />
      </Label>
      <Label>
        <Span>Number</Span>
        <Input type="tel" name="contactNumber" placeholder='555-55-55' required />
      </Label>
      <Label>
        <Span>Email</Span>
        <Input type="email" name="contactEmail" placeholder='mail@example.com' required />
      </Label>
      <CheckLabel>
        <Span>Is Favourite?</Span>
        <Input type="checkbox" name="contactFavourite" />
      </CheckLabel>
      <Button type='submit'>Add Contact</Button>
    </Form>
  )
}
