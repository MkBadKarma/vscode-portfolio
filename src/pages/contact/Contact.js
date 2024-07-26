import React from "react";
import styles from "./Contact.module.css";
import ContactsCode from "../../components/contacts-code/ContactsCode";

const Contact = () => {
  return (
    <div className={styles.container}>
          <div className={styles.container.left}>

        <h3 className={styles.size}>Reach Me Out</h3>
        <ContactsCode />
      </div>
      </div>
  );
};

export default Contact;
