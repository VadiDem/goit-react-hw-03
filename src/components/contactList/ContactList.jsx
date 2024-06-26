import css from "./ContactList.module.css";
import Contact from "../contact/Contact";

export default function ContactList({ filteredContacts, deleteContact }) {
  return (
    <div className={css["container-contacts"]}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          id={id}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </div>
  );
}