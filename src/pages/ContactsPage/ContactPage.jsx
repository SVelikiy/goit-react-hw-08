import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Contactlist from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectError } from "../../redux/contacts/selectors";

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isError = useSelector(selectError);
  return (
    <div>
      <ContactForm />
      <SearchBox />
      {isError ? (
        <h2>Something went wrong, please reload the page and try again</h2>
      ) : (
        <Contactlist />
      )}
    </div>
  );
}
