import React from 'react';

import Header from './Header';
import Education from './Education';
import Skills from './Skills';
import Experiences from './Experience';
import Loisirs from './Loisirs';


const Home = () => {
  return (
    <div className='mb-40'>
      <div className='ml-20 mr-20'><Header /></div>
      <div className='mr-20'><Education/></div>
      <div className='ml-20'><Skills /></div>
       <div className='ml-20'><Experiences /></div> 
       <div className='ml-20'><Loisirs /></div> 
    </div>
  );
};

export default Home;