import Image from 'next/image';
import styles from '@/app/ui/separateur.module.css';

const Skills = () => {
  const skills = [
    { name: 'Java', percentage: 70 },
    { name: 'Python', percentage: 70 },
    { name: 'HTML', percentage: 70 },
    { name: 'React', percentage: 70 },
    { name: 'Spring', percentage: 70 },
    { name: 'SQL', percentage: 80 },
    { name: 'MongoDB', percentage: 70 },
    { name: 'JS', percentage: 70 }
  ];

  return (
    <div>
      <h1 className='text-xl uppercase'>Compétences</h1>
      <hr className={styles.separator} />
      <br/>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={`/images/${skill.name.toLowerCase()}.svg`} alt={`${skill.name} Icon`} width={20} height={20} />
            <span className='italic hover:not-italic ml-2'>{skill.name}</span>
            <div className='ml-5 bg-gray-200 w-24'>
              <div style={{ width: `${skill.percentage}%`, backgroundColor: 'sienna', height: '10px' }}></div>
            </div>
            <span className='ml-5'>{skill.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
