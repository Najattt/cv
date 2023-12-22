import React from 'react';

import Header from './Header';
import Education from './Education';
import Skills from './Skills';
import Experiences from './Experience';
import Loisirs from './Loisirs';
const separatorStyle = {
  border: 'none',
  height: '2px', 
  backgroundColor: '#ccc', 
  margin: '20px 0', }

const Home = () => {
  return (
    <div className='mb-40'>
      <div className='ml-20 mr-20'><Header /></div>
      
      {/* <hr style={separatorStyle} /> */}
      <div className='mr-20'><Education/></div>
      <div className='ml-20'><Skills /></div>
       <div className='ml-20'><Experiences /></div> 
       <div className='ml-20'><Loisirs /></div> 
    </div>
  );
};

export default Home;