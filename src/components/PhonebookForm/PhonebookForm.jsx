import { useDispatch } from 'react-redux'
import { Button, Form, Input, Label, Span } from './PhonebookForm.styled'
import { addContact } from '../../redux/contacts/contactsSlice'

export const PhonebookForm = () => {
  const dispatch = useDispatch()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const name = e.currentTarget.elements.contactName.value
    const number = e.currentTarget.elements.contactNumber.value
    const profileData = { name, number }

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
      <Button type='submit'>Add Contact</Button>
    </Form>
  )
}
