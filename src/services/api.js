import axios from 'axios';

export const allContactsRequest = async () => {
  const res = await axios(
    'https://65c27f44f7e6ea59682b75e0.mockapi.io/contacts',
    {
      headers: { 'content-type': 'application/json' },
    }
  );
  return res.data;
};

export const deleteContactRequest = async contactId => {
  const res = await axios(
    `https://65c27f44f7e6ea59682b75e0.mockapi.io/contacts/${contactId}`,
    {
      method: 'DELETE',
    }
  );
  return res;
};

export const addContactRequest = async contact => {
  const res = await axios.post(
    'https://65c27f44f7e6ea59682b75e0.mockapi.io/contacts',
    contact
  );
  return res;
};
