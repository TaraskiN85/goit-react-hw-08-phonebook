import React from 'react'
import { Li } from './Contact.styled'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contacts/contactsSlice'

const Contact = ({ contactData }) => {
  const dispatch = useDispatch()

  const handleDeleteContact = () => {
    dispatch(deleteContact(contactData.id))
  }

  return (
    <Li>
      <div>
        <p>{contactData.name}</p>
        <p>{contactData.phone}</p>
      </div>
      <button onClick={handleDeleteContact}>Delete</button>
    </Li>
  )
}

export default Contact