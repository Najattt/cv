import React from "react";
import styles from "@/app/ui/separateur.module.css";
const Experiences = () => {
    const experiences = [
      {
        title: 'Emploi en bureautique',
        company: 'Electro abou youssef |6 mois',
        
      },
      {
        title: 'Assistante informatique',
        company: 'Mégaphone le Havre |1 mois ',
      },
      {
        title:'Professeur particulier | Maroc',
        company:'Mathématiques et informatiques |2018 - 2020 ', 
      }
    ];
  
    return (
      <div>
        <br/>
        <h1 className='text-xl uppercase mb-4 '>Expériences Professionnelles</h1>
        <hr className={styles.separator} />
        {experiences.map((experience, index) => (
          <div key={index}>
            <h3 className={styles.title}>{experience.title}</h3>
            <p className={styles.subtitle}>{experience.company}</p>
          </div>
        ))}
        

      </div>
    );
  };
  
  export default Experiences;
  