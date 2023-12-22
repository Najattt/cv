import Image from "next/image";
import styles from '@/app/ui/separateur.module.css';
const Loisirs = () => {
  return (
    <div>
      <h1 className='text-xl uppercase'>Loisirs</h1>
      <hr className={styles.separator} />
      <ul>
      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Image src="/images/sports.svg" alt="sports"  width="100" height="100" style={{ marginRight: '40px' }} />
          <Image src="/images/pro.svg" alt="programmation" width="100" height="100" style={{ marginRight: '40px' }} />
          <Image src="/images/analys.svg" alt="analyse" width="100" height="100" />

        </li>
      </ul>
    </div>
  );
};

export default Loisirs;
