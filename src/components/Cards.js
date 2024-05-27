import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore Real Adventure</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='https://images.pexels.com/photos/442598/pexels-photo-442598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              text='Experience Football on Top of the Himilayan Mountains'
              label='ATTRACTIVE'
              path='/'
            />
            <CardItem
              src='https://images.pexels.com/photos/2882599/pexels-photo-2882599.jpeg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='DISCOVER'
              path='/'
            />
            <CardItem
              src='https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              text='Explore the hidden waterfall deep inside the barazil Jungle'
              label='favourite'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='https://images.pexels.com/photos/930676/pexels-photo-930676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='MYSTERY'
              path='/'
            />
            <CardItem
              src='https://images.pexels.com/photos/11759844/pexels-photo-11759844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='ADVENTURE'
              path='/'
            />
            <CardItem
              src='https://images.pexels.com/photos/2161449/pexels-photo-2161449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='DELIGHTED'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
