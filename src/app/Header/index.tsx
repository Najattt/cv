import React from 'react';
import Image from 'next/image';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';






const Header = () => {
  const name = 'ABBOU Najat';
  const title = 'Recherche de stage en Développement';
  const email = 'najatabb110@gmail.com';
  const phone = '0784803870';
  const address = 'Bruay la Buissière';

  return (
    <header>
      <div className='flex bg-slate-600 mb-10 items-center'>
      <div className="h-48 w-48 rounded-full overflow-hidden">
        <Image className="object-cover h-full w-full" src="/profile.jpg" alt="Ma photo de profil" width={500}  height={512} />
      </div>
      <div className='flex-grow flex items-center justify-center text-center text-gray-50'>
      <div>
        <h1 className='text-4xl uppercase my-2.5 mt-10'>{name}</h1>
        <p className='text-2xl uppercase mb-10'>{title}</p>
        <ul className='ml-5 text-stone-100'>
          <li><FiMail className="inline-block align-text-bottom text-pink-950" /> {email}</li>
          <li><FiPhone className="inline-block align-text-bottom text-pink-950" /> {phone}</li>
          <li className='mb-1'><FiMapPin className="inline-block align-text-bottom text-pink-950" /> {address}</li>
          {/* <li className='max-w-sm mx-auto  shadow-lg flex items-center'><a href="URL_DE_VOTRE_GITHUB_PROFILE"> */}
       <li className='flex items-center justify-center text-center'> <FontAwesomeIcon icon={faGithub} className='h-5 w-5 text-pink-950 mr-1' />
      {/* </a> */}
      <Link href="https://github.com/Najattt/Cv_nextLS/">
      @Najat
      </Link>
          </li>  
        </ul>
      </div>
    </div>
    </div>
    </header>
  );
};

export default Header;
