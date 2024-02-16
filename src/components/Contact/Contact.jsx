import React from 'react'
import { Li } from './Contact.styled'
import { useDispatch } from 'react-redux'
import { deleteContact } from '../../redux/contacts/contactsSlice'
import { toast } from 'react-toastify'

const Contact = ({ contactData }) => {
  const dispatch = useDispatch()

  const handleDeleteContact = () => {
    dispatch(deleteContact(contactData.id)).unwrap().then(() => toast.success(`${contactData.name} successfuly removed!`)).catch(error => toast.error(error))
    
  }

  return (
    <Li>
      <div>
        <p>{contactData.name}</p>
        <p>{contactData.number}</p>
      </div>
      <button onClick={handleDeleteContact}>Delete</button>
    </Li>
  )
}

export default Contact