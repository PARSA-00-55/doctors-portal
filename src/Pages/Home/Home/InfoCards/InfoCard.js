import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgClass } = card;
  return (
    <div className={`card md:card-side shadow-xl p-5 text-white ${bgClass}`}>
      <figure>
        <img src={icon} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
