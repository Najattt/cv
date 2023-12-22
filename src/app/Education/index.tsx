/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from '@/app/ui/separateur.module.css';



const Education = () => {
  const educationData = [
    {
        institution :"IUT de Lens",
        degree:"BUT3 Informatique (en cours)",
        year: "2023-2024"
    },
    {
      institution: 'Université du Havre',
      degree: 'Licence 3 Mathématiques',
      year: '2020-2021',
    },
    {
        institution: 'UMP Faculté des sciences, Maroc',
        degree: ' LICENCE SCIENCES MATHÉMATIQUES ET INFORMATIQUES',
        year: '2017-2020',
      },
  ];

  return (
    <section style={{ float: 'right', width: '50%' }}>
      <h1 className='text-xl uppercase'>Formation</h1>
      <hr className={styles.separator} />
      <ul >
        {educationData.map((education, index) => (
          <li key={index} className={styles.educationItem} >
            <p className={styles.title}>{education.degree}</p> 
            <p className={styles.subtitle}>{education.institution}</p>
            <p className={styles.duration}>{education.year}</p>
          </li>
        ))}
      </ul>
      <h1 className='text-xl uppercase mb-4'>Projets</h1>
      <hr className={styles.separator} />
        <ul className="list-disc ml-6 mb-8">
        <li className={styles.project}>Étude comparative des bases de données relationnelles et objets (SQL -NOSQL(mongoDB)) |2020</li>
        <li className={styles.project}>Application de maching (covoiturage) Spring/React/NoSql et python (en cours )2023</li>
        <li className={styles.project}>Génération de caricatures à l'aide de techniques d'IA |2022</li>
        </ul>
        <div>
          
        </div>
    </section>
  );
};


export default Education;
