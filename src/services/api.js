import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const setToken = token => {
  apiInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
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
