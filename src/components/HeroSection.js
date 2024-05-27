import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='https://images.pexels.com/photos/3698303/pexels-photo-3698303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=""  />
      <h1>TRAVEL & ENJOY</h1>
      
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          BẮT ĐẦU 
        </Button>
        
      </div>
    </div>
  );
}

export default HeroSection;
