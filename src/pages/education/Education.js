import React from "react";
import styles from "./Education.module.css";
import EducationCode from "../../components/education-code/EducationCode";

const graduationData = {
  school: "Escuela Politécnica de Ingeniería de Gijón",
  degree: "Computer Engineering",
  Grade: "Not known for now",
  start: "Sep 2024",
  end: "Expected to end in Jul 2028",
};

const highSchoolData = {
  school: "Tunivers Formacion",
  degree: "Multiplatform Application Development",
  Grade: "8.5/10",
  start: "Sep 2022",
  end: "Jun 2024",
};

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <h3>University</h3>
        <EducationCode jsonData={graduationData} />
      </div>
      <div className={styles.container__right}>
        <h3>Superior degree</h3>
        <EducationCode jsonData={highSchoolData} />
      </div>
    </div>
  );
};

export default Education;