import React from 'react';

const Card = ({ name, email, id, lname}) => {
    return (
      <div className='tc grow bg-dark gray br2 pa5 ma3 dib text-white'>
        <img alt='robots' src={`https://reqres.in/img/faces/${id}-image.jpg`} />
        <div>
		  <br />
          <h2>{name} {lname}</h2>
		  <br />
          <h3>{email}</h3>
        </div>
      </div>
    );
  }

export default Card;
