import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { PhonebookForm } from "../../components/PhonebookForm/PhonebookForm";
import { Contacts } from "../../components/Contacts/Contacts";
import { Filter } from "../../components/Filter/Filter";

import { fetchAllContacts } from "../../redux/contacts/contactsSlice";

import { Main, Title } from "./ContactsPage.styled";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts())
  }, [dispatch])
  
  return (
    <Main>
      <section>
        <Title>Search Contacts</Title>
        <Filter />
        <Title>Add New Contact</Title>
        <PhonebookForm />
      </section>
      <section>
        <Title>Contacts List</Title>
        <Contacts />
      </section>
    </Main>
  )
}

export default ContactsPage;