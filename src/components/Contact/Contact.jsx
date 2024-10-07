import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  const handledelete = (id) => {
    dispatch(deleteContact(id));
  };
  return (
    <div className={css.contactContainer}>
      <div>
        <p className={css.contactInfo}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6ZM6 7.5C3.9975 7.5 0 8.505 0 10.5V11.25C0 11.6625 0.3375 12 0.75 12H11.25C11.6625 12 12 11.6625 12 11.25V10.5C12 8.505 8.0025 7.5 6 7.5Z"
              fill="#2E2F42"
            />
          </svg>
          {contact.name}
        </p>
        <p className={css.contactInfo}>
          <svg
            width="14"
            height="14"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.7263 8.86511L9.88811 8.65525C9.44667 8.60459 9.01246 8.75656 8.70128 9.06775L7.36971 10.3993C5.3217 9.35722 3.64276 7.68551 2.60067 5.63025L3.93947 4.29144C4.25065 3.98025 4.40263 3.54605 4.35197 3.1046L4.1421 1.28092C4.05526 0.549999 3.44013 0 2.70198 0H1.45002C0.632259 0 -0.0479991 0.680262 0.00265842 1.49802C0.386208 7.67827 5.32893 12.6138 11.5019 12.9973C12.3197 13.048 12.9999 12.3677 12.9999 11.55V10.298C13.0072 9.56709 12.4572 8.95196 11.7263 8.86511V8.86511Z"
              fill="#2E2F42"
            />
          </svg>
          {contact.number}
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          handledelete(contact.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
