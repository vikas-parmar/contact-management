import { Link } from "react-router-dom";
import { useAppSelector } from "app/hook";
import { selectContact } from "app/contacts/contactSlice";

const buttonStyle =
  "bg-black hover:bg-white hover:text-black w-full p-2 text-white outline";

const CreateContact = () => {
  const contacts = useAppSelector(selectContact);
  return (
    <div className="flex flex-col items-center p-4 text-center gap-4">
      <Link to="/contact-save">
        <button className={buttonStyle}>Create Contact</button>
      </Link>
      {contacts.length === 0 && (
        <p>No Contact found. Please add contact from create contact button</p>
      )}
    </div>
  );
};

export default CreateContact;
