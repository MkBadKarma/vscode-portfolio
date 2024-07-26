import React from "react";
import styles from "./ContactsCode.module.css";

const socialsData = [
    {
    social: "email",
    link: "markalonsolosada@gmail.com",
    //href: "mailto:markalonsolosada@gmail.com",
  },
  {
    social: "github",
    link: "MkBadKarma",
    href: "https://github.com/MkBadKarma",
  },
  {
    social: "linkedin",
    link: "Mark Alonso Losada",
    href: "https://www.linkedin.com/in/mark-alonso-losada/",
  },
  {
    social: "Leetcode",
    link: "MK_BadKarma",
    href: "https://www.leetcode.com/Mk_BadKarma",
  },
];

const ContactsCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {socialsData.map((socialItem, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{socialItem.social} :{" "}
          <a href={socialItem.href} target="_blank" rel="noreferrer">
            {socialItem.link}
          </a>
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactsCode;
