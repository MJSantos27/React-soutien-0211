import React from 'react';

function SportCard(props) {
  console.log(props);
  return (
    <div className="SportCard">
      <h3>{props.sportName}</h3>
      <img src={props.image} alt="img" />
      <a href="https://fr.wikipedia.org/wiki/Football">Soccer</a>
    </div>
  );
}

export default SportCard;
