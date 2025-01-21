// write the component code here

import React from 'react';

const Usercard = () => {
    const profilephoto = "https://via.placeholder.com/150";
    const name = "Alex";
    const mail = "alexmorr@gmail.com";
    const phoneNum = "+1 452 244 2413";
    const address = "22, Main Street, Bangalore, Karnataka, India";

    return (
        <div className="user-card">
          <img src={profilephoto} alt="Profile" className="user-card__photo" />
          <div className="user-card__details">
            <h2 className="user-card__name">{name}</h2>
            <p className="user-card__email">{mail}</p>
            <p className="user-card__phone">{phoneNum}</p>
            <p className="user-card__address">{address}</p>
          </div>
        </div>
    );
};

export default Usercard;
