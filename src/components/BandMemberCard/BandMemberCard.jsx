import React from "react";
import "./BandMemberCard.css";

function BandMemberCard({ image, name, role, instagram }) {
  return (
    <div className="band-member-card">
      <div className="band-member-card__img">
        <img src={image} alt={`${name} - ${role}`} />
      </div>
      <div className="band-member-card__content">
        <h3>{`${name.toUpperCase()}`}</h3>
        <p>{`ROLE: ${role.toUpperCase()}`}</p>

        {instagram && (
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="band-member-card__social"
          >
            Instagram ↗
          </a>
        )}
      </div>
    </div>
  );
}

export default BandMemberCard;
