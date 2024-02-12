import { useDispatch, useSelector } from 'react-redux'
import { SearchField } from './Filter.styled'
import { filterContacts } from '../../redux/contacts/contactsSlice'
import { selectFilter } from '../../redux/contacts/contactsSlice.selectors'

export const Filter = () => {
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    const searchData = e.currentTarget.value
    dispatch(filterContacts(searchData))
  }

  return (
      <SearchField type='search'
        onChange={handleSearch} value={filter}></SearchField>
  )
}
