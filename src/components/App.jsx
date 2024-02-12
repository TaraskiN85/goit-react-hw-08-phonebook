import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { PhonebookForm } from "./Form.jsx/PhonebookForm";
import { Contacts } from "./Contacts/Contacts";
import { Filter } from "./Filter/Filter";

import { fetchAllContacts } from "../redux/contacts/contactsSlice";

import { Container, Header, Main, Phonebook, PhonebookTitle, Title } from "./App.styled";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts())
  }, [dispatch])
  
  return (
    <Phonebook>
      <Header>
        <Container>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        </Container>
      </Header>
      <Container>
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
      </Container>
    </Phonebook>
  )
}
