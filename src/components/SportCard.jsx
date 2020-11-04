import React from 'react';

function SportCard(props) {
  // en "vieux" JavaScript (ES5)
  // const sportName = props.sportName;
  // const image = props.image;
  const { sportName, image } = props;
  return (
    <div className="SportCard">
      <h3>{sportName}</h3>
      <img src={image} alt={sportName} />
      <a href="https://fr.wikipedia.org/wiki/Football">Soccer</a>
    </div>
  );
}

export default SportCard;
