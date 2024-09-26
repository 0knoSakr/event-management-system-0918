import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.companyName}</h3>
      <p>担当者:{event.contactPerson}</p>
      <p>メールアドレス :{event.email}</p>
    </div>
  );
};

export default EventCard;
