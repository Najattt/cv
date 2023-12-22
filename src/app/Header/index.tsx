import React from 'react';
import Image from 'next/image';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import styles from '@/app/ui/separateur.module.css';

const Header = () => {
  const name = 'ABBOU Najat';
  const title = 'Recherche de stage en Développement';
  const email = 'najatabb110@gmail.com';
  const phone = '0784803870';
  const address = 'Bruay la Buissière';

  return (
    <header>
      <div className='flex bg-orange-900 mb-10 items-center'>
      {/* overflow-visible  */}
      <div className="h-48 w-48 rounded-full overflow-hidden">
        <Image className="object-cover h-full w-full" src="/profile.jpg" alt="Ma photo de profil" width={500}  height={512} />
      </div>
      <div className='flex-grow flex items-center justify-center text-center'>
        <div >
          <h1 className='text-4xl uppercase my-2.5 mt-10'>{name}</h1>
          <p className='text-2xl uppercase mb-20'>{title}</p>
        </div>
      </div>
    </div>
      <div>
        <h1 className='text-xl uppercase mb-4' >Contact</h1>
        <hr className={styles.separator} />
      <ul className='ml-5 text-yellow-700'>
      <li><FiMail className="inline-block align-text-bottom text-amber-900" /> {email}</li>
      <li><FiPhone className="inline-block align-text-bottom text-amber-900" /> {phone}</li>
      <li className='mb-10'><FiMapPin className="inline-block align-text-bottom text-amber-900 " /> {address}</li>
      </ul>
      </div>
    </header>
  );
};

export default Header;
